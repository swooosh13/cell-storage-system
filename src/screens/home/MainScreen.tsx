import React, {useEffect, useState} from 'react';
import {SearchBar} from "react-native-elements";
import {Dimensions, FlatList, SafeAreaView, Text , StyleSheet, Modal} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../redux/store";
import {loadItems, toggleAddModal} from "../../redux/reducers/items-reducer/itemsActions";
import {IItems, ItemType} from '../../redux/reducers/items-reducer/items'

import Item from "./Item/Item";
import {MainRoutes, StackNavigatorProps} from "../../components/Navigation";
import {Feather} from '@expo/vector-icons';
import {Box, theme, useTheme} from "../../components/Theme";
import AddModalForm from "../../components/AddModalForm";
import FloatingButton from "../../components/FloatingButton";

const MainScreen = ({navigation}: StackNavigatorProps<MainRoutes, "MainScreen">) => {
  let [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();
  const theme = useTheme();
  const items = useSelector((state: RootState) => state.items);

  // @ts-ignore TODO
  const [position, setPosition] = useState<any>({height, width});
  const allItems: IItems = items.allItems;

  const goToItemScreen = (item: ItemType) => {
    navigation.navigate('ItemScreen', item);
  }

  useEffect(() => {
    // сделать нормально TODO
    let str = ["", ""];
    str = searchText.split(" ");

    dispatch(loadItems(str[0], str[1]));
  }, [searchText, dispatch]);

  const openAddCallback = () => {
    dispatch(toggleAddModal());
  }

  const {width, height} = Dimensions.get("screen");

  useEffect(() => {
    // для широкоэкранных
    if (height > 850) {
      setPosition({
        top: height * 0.75,
        left: width * 0.9
      })
    } else {
      setPosition({
        top: height * 0.72,
        left: width * 0.9
      })
    }
  }, [width, height]);

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

      <AddModalForm />
      <FloatingButton
        openAdd={openAddCallback}
        style={{top: position.top, left: position.left}}/>

    </SafeAreaView>
  )
}

export default MainScreen;
