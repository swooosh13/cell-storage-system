import React, {useEffect, useState} from 'react';
import {Box, Text} from "../../components/Theme";
import {SearchBar} from "react-native-elements";
import {FlatList, SafeAreaView, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {IItems, loadItems} from "../../redux/reducers/items-reducer/items";
import Item from "./Items/Item";

const HomeScreen = () => {
  const items = useSelector((state: RootState) => state.items);
  const allItems: IItems = items.allItems;

  let [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems(searchText));
  }, [searchText, dispatch]);

  return (
    <SafeAreaView>
      {/* @ts-ignore */}
      <SearchBar lightTheme={"platform"}
                 round
                 value={searchText}
                 onChangeText={setSearchText}/>
      <FlatList data={allItems}
                keyExtractor={(item) => {
                  return item.id.toString()
                }} renderItem={({item}) =>
        (<Item item={item}/>)}/>


    </SafeAreaView>

  )
}

export default HomeScreen;
