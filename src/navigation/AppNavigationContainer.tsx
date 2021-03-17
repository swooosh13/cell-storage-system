import React, {FC} from 'react';
import AuthenticationStackScreen from "./AuthenticationStackScreen";
import LoadAssets from "../components/LoadAssets";

import {ThemeProvider} from "@shopify/restyle";
import theme from "../components/Theme";

const assets = {

}

const fonts = {
  "SFProDisplay-Bold": require("../../assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Semibold": require("../../assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Regular": require("../../assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Medium": require('../../assets/fonts/SFProDisplay-Medium.ttf'),
  "SFProDisplay-Heavy": require("../../assets/fonts/SFProDisplay-Heavy.ttf"),
  "SFProDisplay-Light": require("../../assets/fonts/SFProDisplay-Light.ttf"),
};

const AppNavigationContainer: FC = () => {
  return (
    <ThemeProvider {...{theme}}>
    <LoadAssets {...{fonts}}>
        <AuthenticationStackScreen />
    </LoadAssets>
    </ThemeProvider>
  )
}

export default AppNavigationContainer;
