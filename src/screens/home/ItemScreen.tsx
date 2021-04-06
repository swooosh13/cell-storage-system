import React from 'react';
import {Box, Text, theme} from "../../components/Theme";
import {Alert, Dimensions} from 'react-native'
import {MainRoutes, StackNavigatorProps} from "../../components/Navigation";
import {View} from 'react-native-animatable';
import Button from "../../components/Button";
import {removeItem} from "../../redux/reducers/items-reducer/itemsActions";
import {useDispatch} from "react-redux";

const ItemScreen = ({navigation, route}: StackNavigatorProps<MainRoutes, "ItemScreen">) => {
  const dispatch = useDispatch();

  let {params} = route;
  const {width, height} = Dimensions.get('window');

  const removeItemHandler = () => {
    console.log('remove item Alert')
    Alert.alert(
      `Забрать ${params.name} со склада ?`,
      "Подтвердите операцию",
      [
        {
          text: "Омена",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {text: "Подтвердить", onPress: () => {
          dispatch(removeItem(params.id))
            navigation.popToTop();
        }}
      ]
    );
  }
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
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
            <Text color={"white"} variant={"title"}>{params.name}</Text>
          </Box>
          <Box backgroundColor={"primary_analogue"} borderRadius={"s"} padding={"s"} marginLeft={"xl"}>
            <Text color={"white"} variant={"body"}>id: {params.id}</Text>
          </Box>
        </Box>

        <Box borderRadius={"s"} backgroundColor="darkGrey" padding={"l"} width={width * 0.7} marginTop={"s"}>
          <Text color={"white"} variant={"title2"}>{params.description}</Text>
          <Text color={"white"} variant={"body"}>sector: {params.sector}</Text>
          <Text color={"white"} variant={"body"}>position: {params.position}</Text>
        </Box>

      </Box>

      <Box flexDirection={"row"} marginTop={"s"}>
        {/*TODO убрать theme*/}
        <Button onPress={removeItemHandler} variant={"primary"} label={"забрать"} style={{backgroundColor: theme.colors.danger, width: 100}}/>
        <Button variant={"primary"} label={"добавить еще"}
                style={{backgroundColor: theme.colors.success, marginLeft: 10}}/>
      </Box>
    </View>
  )
}

export default ItemScreen;
