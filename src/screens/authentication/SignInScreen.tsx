import React, {FC} from "react";
import {Image, Dimensions, View} from "react-native";
import {Navigation, StackNavigatorProps} from "../../components/Navigation";
import Container from '../../components/Container';
import {Google, SocialLogin} from "../../components/SocialLogin";
import Button from "../../components/Button";
import {Box, Text} from "../../components/Theme";

const SignInScreen = ({navigation}: StackNavigatorProps<Navigation, "SignInScreen">) => {
  const footer = (
    <>
      <SocialLogin/>
      <Box alignItems={"center"}>
        <Button variant={"transparent"} onPress={() => alert("SignUp!")}>
          <Box flexDirection={"row"} justifyContent={"center"}>
            <Text variant={"button"} color={"white"}>
              Don`t have a account ?
            </Text>
            <Text marginLeft={"s"} variant={"button"} color={"primary"}>
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  )

  return (
    <Container {...{footer}} >
      <View />
    </Container>
  )
}

export default SignInScreen;
