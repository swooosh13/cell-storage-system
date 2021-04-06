import React from "react";
import {Dimensions, Image, StatusBar} from "react-native";
import {BorderlessButton} from "react-native-gesture-handler";

import Button from '../../components/Button'
import {Box, Text, useTheme} from "../../components/Theme";
import {AuthenticationRoutes, StackNavigatorProps} from "../../components/Navigation";

const {width} = Dimensions.get('window');

const picture = {
  src: require('../../../assets/tech_signin.png'),
  width: 800,
  height: 500
}

//
// const picture = {
//   src: require('../../../assets/tech_signin.png'),
//   width: 1800,
//   height: 1024
// }

export const assets = [picture.src];

const SplashScreen = ({navigation}: StackNavigatorProps<AuthenticationRoutes, "SplashScreen">) => {
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor={"white"}>
      <StatusBar barStyle={"light-content"} hidden/>
      <Box flex={1}
           borderBottomRightRadius="xl"
           backgroundColor="grey"
           alignItems="center"
           justifyContent="flex-end">

        <Image source={picture.src}
               style={{
                 marginBottom: 30,
                 width: width - theme.borderRadii.xl,
                 height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
               }}/>
      </Box>
      <Box flex={1} borderTopLeftRadius={"xl"}>
        {/*Кусочек левый верхний*/}
        <Box backgroundColor="grey"
             position={"absolute"}
             top={0}
             left={0}
             right={0}
             bottom={0}/>
        <Box backgroundColor={"white"}
             borderTopLeftRadius={"xl"}
             flex={1}
             alignItems={"center"}
             justifyContent={"space-evenly"}
             padding={"xl"}>
          <Text variant={"title2"}>
            Let`s get Started
          </Text>
          <Text variant={"body"} textAlign={"center"}>
            Sign In. If you`r not sign in just sign up!
          </Text>
          <Button label={"Have an account? Login"} variant={"primary"}
                  onPress={() => navigation.navigate('SignInScreen')}/>
          <Button label={"Join us"} onPress={() => navigation.navigate('SignUpScreen')}/>

          <BorderlessButton onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text variant={"button"} color={"secondary"}>Forgot password ?</Text>
          </BorderlessButton>

        </Box>
      </Box>
    </Box>
  )
}

export default SplashScreen;
