import React, {FC} from 'react';
import AuthenticationStackScreen from "./AuthenticationNavigator";
import LoadAssets from "../components/LoadAssets";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ThemeProvider} from "@shopify/restyle";
import {assets} from '../screens/authentication/SplashScreen';

import {theme} from '../components/Theme'
import {createDrawerNavigator} from "@react-navigation/drawer";
import AuthenticationStackNavigator from "./AuthenticationNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import {AppRoutes} from "../components/Navigation";
import HomeDrawerNavigator from "./HomeNavigator";
import AuthenticationNavigator from "./AuthenticationNavigator";
import HomeNavigator from "./HomeNavigator";

const fonts = {
  "SFProDisplay-Bold": require("../../assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Semibold": require("../../assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Regular": require("../../assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Medium": require('../../assets/fonts/SFProDisplay-Medium.ttf'),
  "SFProDisplay-Heavy": require("../../assets/fonts/SFProDisplay-Heavy.ttf"),
  "SFProDisplay-Light": require("../../assets/fonts/SFProDisplay-Light.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

const AppNavigationContainer: FC = () => {
  return (
    <ThemeProvider {...{theme}}>
      <LoadAssets {...{fonts, assets}} >
        <SafeAreaProvider>
          <AppStack.Navigator headerMode={"none"}>
            <AppStack.Screen name={"AuthenticationNavigator"} component={AuthenticationNavigator}/>
            <AppStack.Screen name={"HomeNavigator"} component={HomeNavigator}/>
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  )
}

export default AppNavigationContainer;
