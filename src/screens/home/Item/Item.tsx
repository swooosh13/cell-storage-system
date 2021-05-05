import React, {FC} from "react";
import {Box, Text} from "../../../components/Theme";
import {removeItem} from "../../../redux/reducers/items-reducer/itemsActions";
import {Alert, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";

import {ItemType} from "../../../redux/reducers/items-reducer/items";

interface IItemProps {
  item: ItemType;
  goToItem: (item: ItemType) => void;
}

const Item: FC<IItemProps> = ({item, goToItem}) => {
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
        {text: "Подтвердить", onPress: () => dispatch(removeItem(item.id))}
      ]
    );
  }

  const navigateHandler = () => {
    goToItem(item);
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
            <Text variant={"body"}>position: {item.position}</Text>
          </Box>

          <Box>
            <Text>sector: {item.sector}</Text>
          </Box>
        </Box>

      </Box>
    </TouchableOpacity>

  )
}

export default Item;
