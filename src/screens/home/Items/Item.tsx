import React, {FC} from "react";
import {Box, Text} from "../../../components/Theme";
import {ItemType} from "../../../redux/reducers/items-reducer/items";
import {TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";

interface IItemProps {
  item: ItemType;
}

const Item: FC<IItemProps> = ({item}) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    console.log('remove item Alert')
  }

  const navigateHandler = () => {
    console.log('navigate to Item screen');
  }

  return (
    <TouchableOpacity
      onPress={navigateHandler}
      onLongPress={removeItemHandler}>
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
    </TouchableOpacity>

  )}

export default Item;
