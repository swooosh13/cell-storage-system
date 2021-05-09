import React, { FC } from "react";
import { Box, Text } from "../../../components/Theme";
import { removeItem } from "../../../redux/reducers/items-reducer/itemsActions";
import { Alert, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { ItemType } from "../../../redux/reducers/items-reducer/items";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { usersAPI } from "../../../redux/api/api";
const token = AsyncStorage.getItem('userToken');
interface IItemProps {
  item: ItemType;
  goToItem: (item: ItemType) => void;
}

const Item: FC<IItemProps> = ({ item, goToItem }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    console.log('remove item Alert')
    Alert.alert(
      `Забрать ${item.name} со склада ?`,
      "Подтвердите операцию",
      [
        {
          text: "Омена",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Подтвердить", onPress: async () => {
            dispatch(removeItem(item.id))

            const title = "удалил";
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
          }
        }
      ]
    );
  }

  const navigateHandler = () => {
    goToItem(item);
  }

  if (!item) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={navigateHandler}
      onLongPress={removeItemHandler}>

      <Box marginBottom={"s"}
        backgroundColor={"grey"}
        flex={1}
        flexDirection={"row"}
        marginVertical={"s"}
        marginHorizontal={"s"}
        borderRadius={"m"}
        alignContent={"center"}
        justifyContent={"center"}>
        <Box flex={1}
          alignItems={"center"}
          backgroundColor={"secondary"}
          borderTopLeftRadius={"s"}
          borderBottomLeftRadius={"s"}
          justifyContent={"center"}>
          <Text color={"white"} variant={"body"}>{item.name}</Text>
        </Box>

        <Box flex={3} padding={"s"} paddingHorizontal={"l"}>
          <Box>
            <Text variant={"title2"}>{item.description}</Text>
          </Box>

          <Box>
            <Text variant={"body"}>позиция: {item.position}</Text>
          </Box>

          <Box>
            <Text>сектор: {item.sector}</Text>
          </Box>
        </Box>

      </Box>
    </TouchableOpacity>

  )
}

export default Item;
