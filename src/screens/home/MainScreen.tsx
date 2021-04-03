import React, {useEffect, useState} from 'react';
import {SearchBar} from "react-native-elements";
import {Dimensions, FlatList, SafeAreaView, StyleSheet, Modal} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import { TouchableOpacity } from 'react-native-gesture-handler';

import {RootState} from "../../redux/store";
import {IItems, ItemType, loadItems, toggleAddModal} from "../../redux/reducers/items-reducer/items";
import Item from "./Item/Item";
import {MainRoutes, StackNavigatorProps} from "../../components/Navigation";
import {Feather} from '@expo/vector-icons';
import {Box, theme, useTheme} from "../../components/Theme";
import AddModalForm from "../../components/AddModalForm";


const {width, height} = Dimensions.get("screen");

const MainScreen = ({navigation}: StackNavigatorProps<MainRoutes, "MainScreen">) => {
  let [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();
  const theme = useTheme();
  const items = useSelector((state: RootState) => state.items);

  const allItems: IItems = items.allItems;


  const goToItemScreen = (item: ItemType) => {
    navigation.navigate('ItemScreen', item);
  }

  const handleOpenModal = () => {

  }

  useEffect(() => {
    dispatch(loadItems(searchText));
  }, [searchText, dispatch]);


  return (
    /*TODO margin bottom to adaptive*/
    <SafeAreaView style={{marginBottom: height * 0.1}}>
      {/*@ts-ignore*/}
      <SearchBar lightTheme={"platform"}
                 platform={"default"}
                 round
                 inputStyle={{color: "black"}}
                 containerStyle={{backgroundColor: theme.colors.greyLight}}
                 inputContainerStyle={{backgroundColor: theme.colors.white}}
                 value={searchText}
                 searchIcon={(<Feather name="search" size={18} color="grey"/>)}
                 onChangeText={setSearchText}/>

      <FlatList data={allItems}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => {
                  return item.id.toString()
                }} renderItem={({item}) =>
        (<Item item={item} goToItem={goToItemScreen}/>)}/>




        <Box style={styles.addButton}>
          <TouchableOpacity
            activeOpacity={0.1}
            // TODO
            onPress={() => dispatch(toggleAddModal())}>
            <Box>
              <Feather name="plus"  size={30} color="white"/>
            </Box>

        </TouchableOpacity>
        </Box>

      <AddModalForm/>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    top: height * 0.72,
    left: width * 0.8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    width: 50,
    height: 50,
    borderRadius: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  }
});

export default MainScreen;
