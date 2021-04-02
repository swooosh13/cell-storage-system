import React, {useEffect, useState} from 'react';
import {Box, Text} from "../../components/Theme";
import {SearchBar} from "react-native-elements";
import {FlatList, SafeAreaView, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {IItems, loadItems} from "../../redux/reducers/items-reducer/items";

const HomeScreen = () => {
  const items = useSelector((state: RootState) => state.items);
  // @ts-ignore TODO
  const allItems: IItems = items.allItems;
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    dispatch(loadItems());
  }, [items, dispatch]);

  const updateSearch = (search: string) => {
    const searchText = search.toLowerCase();
    setSearch(searchText);
  }

  useEffect(() => {
    // dispatch
    console.log(search)
  }, [search])

  return (
    <SafeAreaView>
      {/* @ts-ignore */}
      <SearchBar lightTheme={"platform"}
                 round
                 value={search}
                 onChangeText={updateSearch}/>
      <FlatList data={allItems} keyExtractor={(item) => {
        return item.id.toString()
      }} renderItem={({item}) => (
        <Box marginBottom={"l"}
             backgroundColor={"grey"}
             flex={1}
             alignContent={"center"}
             justifyContent={"center"}>
          <Box>
            <Text>{item.description}</Text>
          </Box>
          <Box>
            <Text>{item.name}</Text>
          </Box>

          <Box>
            <Text>{item.position}</Text>
          </Box>

          <Box>
            <Text>{item.sector}</Text>
          </Box>
        </Box>
      )}/>


    </SafeAreaView>

  )
}

export default HomeScreen;
