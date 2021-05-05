import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from "@shopify/restyle";

import { theme } from '../components/Theme'

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from '../redux/store';
import MainNavigationContainer from "./MainNavigationContainer";
import { StatusBar } from "react-native";

const AppMainNavigationContainer: FC = () => {
// auth useEffect
  return (
    <SafeAreaProvider>
      <ThemeProvider {...{ theme }}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <StatusBar barStyle={"dark-content"}
              backgroundColor={"white"} />
            <MainNavigationContainer />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
};

export default AppMainNavigationContainer;
