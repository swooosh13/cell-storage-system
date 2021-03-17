import React, {FC} from 'react';
import AuthenticationStackScreen from "./AuthenticationStackScreen";
import LoadAssets from "../components/LoadAssets";

const fonts = {
  "SF-Pro-Text-Bold": require("../../assets/fonts/SF-Pro-Text-Bold.otf"),
  "SF-Pro-Text-Semibold": require("../../assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SF-Pro-Text-Regular": require("../../assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AppNavigationContainer: FC = () => {
  return (
    <LoadAssets {...{fonts}}>
      <AuthenticationStackScreen />
    </LoadAssets>
  )
}

export default AppNavigationContainer;
