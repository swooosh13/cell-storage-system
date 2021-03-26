import React, {useState} from 'react';
import AppMainNavigationContainer from "./src/navigation/AppNavigationContainer";
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';

async function bootstrap () {
  try {
    await Font.loadAsync({
      "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.ttf"),
      "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
      "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
      "SFProDisplay-Medium": require('./assets/fonts/SFProDisplay-Medium.ttf'),
      "SFProDisplay-Heavy": require("./assets/fonts/SFProDisplay-Heavy.ttf"),
      "SFProDisplay-Light": require("./assets/fonts/SFProDisplay-Light.ttf"),
    })

    console.log("Fonts were loaded");
  } catch (e) {
    console.log('Error ', e);
  }
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading
      startAsync={bootstrap}
      onFinish={() => {
        setIsReady(true)
      }}
      onError={console.warn}/>
  }

  return (
      <AppMainNavigationContainer />
  );
}

