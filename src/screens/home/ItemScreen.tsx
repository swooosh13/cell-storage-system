import React from 'react';
import {Box, Text} from "../../components/Theme";
import {MainRoutes, StackNavigatorProps} from "../../components/Navigation";

const ItemScreen = ({navigation, route}: StackNavigatorProps<MainRoutes,"ItemScreen">) => {

  let {params} = route;
  return (
    <Box alignItems={"flex-start"} marginLeft={"l"} justifyContent={"center"}>
      <Text>{params.name}</Text>
      <Text>{params.description}</Text>
      <Text>{params.position}</Text>
      <Text>{params.sector}</Text>
    </Box>
  )
}

export default ItemScreen;
