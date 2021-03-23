import React, {FC} from 'react';

import {StackNavigationProp} from "@react-navigation/stack";
import {Navigation} from "../../components/Navigation";
import {Box, Text} from "../../components/Theme";

interface ForgotPasswordScreen {
  navigation: StackNavigationProp<Navigation, "ForgotPasswordScreen">
}

const ForgotPasswordScreen: FC<ForgotPasswordScreen>  = () => {
  return <Box flex={1} alignItems={"center"}>
    <Text variant={"title"} color={"grey"}>Forgor</Text>
  </Box>
}

export default ForgotPasswordScreen;
