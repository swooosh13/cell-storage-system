import React, { useEffect, useState, useRef } from 'react';
import { Box, Text, theme } from "../../../components/Theme";
import { Alert, Dimensions, TouchableOpacity, Modal, Button as RNButton, TextInput, StyleSheet } from 'react-native'
import { MainRoutes, StackNavigatorProps } from "../../../components/Navigation";
import { View } from 'react-native-animatable';
import Button from "../../../components/Button";
import { loadItems, removeItem, toggleAddModal, updateItem } from "../../../redux/reducers/items-reducer/itemsActions";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RadioButton } from 'react-native-paper';
import { ItemType } from '../../../redux/reducers/items-reducer/items';
import { RootState } from '../../../redux/store';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usersAPI } from '../../../redux/api/api';
const token = AsyncStorage.getItem('userToken');

const { width, height } = Dimensions.get('window');

const ModalSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string().min(2, 'Too short!').required('required')
});

const ItemScreen = ({ navigation, route }: StackNavigatorProps<MainRoutes, "ItemScreen">) => {
  const dispatch = useDispatch();
  const [visibleUpdate, setVisibleUpdate] = useState(false);

  let { params } = route;
  const itemId = params.id;
  let item = useSelector((state: RootState) => state.items.allItems.filter((item: any) => item.id === itemId))[0];
  const [checked, setChecked] = useState<string>(item.sector);

  const onCancel = () => {
    setVisibleUpdate(!visibleUpdate);
    setChecked('');
  }

  const onUpdateItem = async (item: ItemType) => {
    dispatch(updateItem(item));
    dispatch(loadItems());
    const title = "переместил";
      const content = item.name + " " + item.description + " [" + item.position + "(" + item.sector + ")" + "]";
      const userId = await AsyncStorage.getItem('userId');
      let config = {
        headers: {
          Authorization: "Bearer " + JSON.parse(token._W)
        }
      }
      try {
        const resp = await usersAPI.createPost(title, content, userId, config);
      } catch (e) {
        console.log(e);
      }
  };

  const onBack = () => {
    navigation.navigate('MainScreen');
  }
  const description = useRef<TextInput>(null);
  const position = useRef<TextInput>(null);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    enableReinitialize: true,
    initialValues: { name: item.name, description: item.description, sector: item.sector, position: item.position, id: item.id },
    validationSchema: ModalSchema,
    onSubmit: (values) => {
      setVisibleUpdate(!visibleUpdate);
      onUpdateItem(values);
    }
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Box width={width * 0.90} height={height * 0.6} alignItems={"center"} backgroundColor={"grey"} borderRadius={"l"}
        justifyContent={"center"}>

        <Box borderRadius={"s"}
          backgroundColor="primary"
          width={width * 0.7}
          flexDirection={"row"}
          padding={"s"}
          alignContent={"space-between"}
          justifyContent={"center"} alignItems={"center"}>

          <Box>
            <Text color={"white"} variant={"title"}>{item.name}</Text>
          </Box>
          <Box backgroundColor={"primary_analogue"} borderRadius={"s"} padding={"s"} marginLeft={"xl"}>
            <Text color={"white"} variant={"body"}>id: {item.id}</Text>
          </Box>
        </Box>

        <Box borderRadius={"s"} backgroundColor="darkGrey" padding={"l"} width={width * 0.7} marginTop={"s"}>
          <Text color={"white"} variant={"title2"}>{item.description}</Text>
          <Text color={"white"} variant={"body"}>сектор: {item.sector}</Text>
          <Text color={"white"} variant={"body"}>позиция: {item.position}</Text>
        </Box>
      </Box>
      <Box flexDirection={"row"} marginTop={"s"}>
        <TouchableOpacity activeOpacity={0.78}>
          <Button onPress={onCancel} variant={"primary"} label={"переместить"}
            style={{ backgroundColor: theme.colors.success, marginRight: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.78}>
          <Button onPress={onBack} variant={"primary"} label={"назад"} style={{ backgroundColor: theme.colors.button, width: 100 }} />
        </TouchableOpacity>
      </Box>

      <Modal animationType="slide"
        transparent={false}
        visible={visibleUpdate} onRequestClose={() => onCancel()}>

        <Box
          borderRadius={"l"}
          paddingHorizontal="xl"
          marginVertical="xl"
          alignItems={"center"}
          justifyContent="space-around"
          backgroundColor="grey"
          flex={1}
          flexDirection="column">


          <Box
            style={{ marginTop: height / 6, width: width * 0.95 }}
            justifyContent={"center"}
            flex={1}>
            <KeyboardAwareScrollView>
              <Box marginBottom={"m"} marginHorizontal={"l"}>

                <Box marginBottom={"m"}>
                  <Text variant={"title1"}>Обновить предмет</Text>
                </Box>

                <Text variant={"title2"}>навзвание</Text>
                <Box borderColor={"secondary"} borderWidth={StyleSheet.hairlineWidth * 0.7} borderRadius={"m"}
                  padding={"s"}>
                  <TextInput
                    defaultValue={item.name}
                    placeholder={"item name"}
                    onChangeText={handleChange("name")}
                    onEndEditing={handleBlur("name")}
                    autoCapitalize={"none"}
                    onSubmitEditing={() => description.current?.focus()} />
                </Box>

                <Box marginTop={"s"}>
                  <Text variant={"title2"}>описание</Text>
                  <Box borderColor={"secondary"} borderWidth={StyleSheet.hairlineWidth * 0.7} borderRadius={"m"}
                    padding={"s"}>
                    <TextInput
                      ref={description}

                      defaultValue={item.description}
                      onChangeText={handleChange("description")}
                      onBlur={handleBlur("description")}
                      placeholder={"item description"}
                      returnKeyType={"go"}
                      returnKeyLabel={"go"}
                      onSubmitEditing={() => position.current?.focus()}
                    />
                  </Box>
                </Box>

                <Box marginTop={"s"}>
                  <Text variant={"title2"}>сектор</Text>
                  <Box flexDirection={"row"} alignItems={"center"}>
                    <Text variant={"body"}>A</Text>
                    <RadioButton value={"A"} onPress={() => {
                      setChecked('A');
                      setFieldValue("sector", "A");
                    }} status={checked === 'A' ? 'checked' : 'unchecked'} />
                    <Text variant={"body"}>B</Text>
                    <RadioButton value={"B"} onPress={() => {
                      setChecked('B');
                      setFieldValue("sector", "B");
                    }} status={checked === 'B' ? 'checked' : 'unchecked'} />
                    <Text variant={"body"}>C</Text>
                    <RadioButton value={"C"} onPress={() => {
                      setChecked('C')
                      setFieldValue("sector", "C");
                    }
                    } status={checked === 'C' ? 'checked' : 'unchecked'} />
                  </Box>
                </Box>

                <Box marginTop={"s"}>
                  <Text variant={"title2"}>позиция</Text>
                  <Box borderColor={"secondary"} borderWidth={StyleSheet.hairlineWidth * 0.7} borderRadius={"m"}
                    padding={"s"}>
                    <TextInput
                      ref={position}
                      defaultValue={item.position}
                      onChangeText={handleChange("position")}
                      onBlur={handleBlur("position")}
                      placeholder={"item position"}
                      returnKeyType={"go"}
                      returnKeyLabel={"go"}
                    />
                  </Box>
                </Box>

              </Box>

              <Box flex={1} flexDirection={"row"} alignItems={"center"} justifyContent="center">
                {/* @ts-ignore  TODO*/}
                <TouchableOpacity activeOpacity={0.78} onPress={handleSubmit}>
                  <Button variant={"primary"} label={"подтвердить"}
                    style={{ backgroundColor: theme.colors.success, marginLeft: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.78} onPress={onCancel}>
                  <Button variant={"primary"} label={"отмена"}
                    style={{ backgroundColor: theme.colors.button, marginLeft: 10, width: 100 }} />
                </TouchableOpacity>



              </Box>
            </KeyboardAwareScrollView>
          </Box>
        </Box>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 15,
    textAlign: 'center'
  }
})


export default ItemScreen;
