import React, {FC} from "react";
import {createStackNavigator} from "@react-navigation/stack";

import SplashScreen from "../screens/authentication/OnboardingScreen";
import SignInScreen from "../screens/authentication/SignInScreen";
import SignUpScreen from "../screens/authentication/SignUpScreen";
import OnboardingScreen from "../screens/authentication/OnboardingScreen";

const Stack = createStackNavigator();

const AuthenticationStackScreen: FC = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name={"OnboardingScreen"} component={OnboardingScreen}/>
      <Stack.Screen name={"SignInScreen"} component={SignInScreen} />
      <Stack.Screen name={"SignUpScreen"} component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthenticationStackScreen;
