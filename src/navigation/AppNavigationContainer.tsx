import React, {FC} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ThemeProvider} from "@shopify/restyle";

import {theme} from '../components/Theme'

import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from '../redux/store';
import MainNavigationContainer from "./MainNavigationContainer";
import {StatusBar} from "react-native";

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
              <StatusBar hidden />
              <MainNavigationContainer/>
            </PersistGate>
          </Provider>
        </ThemeProvider>
    </SafeAreaProvider>
  )
};

export default AppMainNavigationContainer;
