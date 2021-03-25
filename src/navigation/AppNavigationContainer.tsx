import React, {FC} from 'react';

import LoadAssets from "../components/LoadAssets";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ThemeProvider} from "@shopify/restyle";
import {assets} from '../screens/authentication/SplashScreen';

import {theme} from '../components/Theme'

import {createStackNavigator} from "@react-navigation/stack";
import {AppRoutes} from "../components/Navigation";

import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from '../redux/store';
import MainNavigationContainer from "./MainNavigationContainer";

const fonts = {
  "SFProDisplay-Bold": require("../../assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Semibold": require("../../assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Regular": require("../../assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Medium": require('../../assets/fonts/SFProDisplay-Medium.ttf'),
  "SFProDisplay-Heavy": require("../../assets/fonts/SFProDisplay-Heavy.ttf"),
  "SFProDisplay-Light": require("../../assets/fonts/SFProDisplay-Light.ttf"),
};

const AppMainNavigationContainer: FC = () => {
  // TODO useEffect firebase auth
  return (
    <SafeAreaProvider>
        <ThemeProvider {...{theme}}>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
              <MainNavigationContainer/>
            </PersistGate>
          </Provider>
        </ThemeProvider>
    </SafeAreaProvider>
  )
};

export default AppMainNavigationContainer;
