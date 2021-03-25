import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch, useSelector} from 'react-redux';
import {retreiveToken} from "../redux/actions/authActions";

import {ActivityIndicator, View} from "react-native";
import AuthenticationNavigator from "./AuthenticationNavigator";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {HomeRoutes} from "../components/Navigation";
import FindScreen from "../screens/home/FindScreen";
import AboutScreen from "../screens/home/AboutScreen";

const Tab = createMaterialBottomTabNavigator<HomeRoutes>();

const HomeNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={"FindScreen"} component={FindScreen}/>
    <Tab.Screen name={"AboutScreen"} component={AboutScreen}/>
  </Tab.Navigator>
)

const MainNavigationContainer = () => {
  const dispatch = useDispatch();

  // TODO
  const auth: any = useSelector<any>(state => {
    return state.auth;
  });

  useEffect(() => {
    dispatch(retreiveToken());
  }, []);

  if (auth.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={"large"} color={"red"}/>
      </View>
    );
  }

  return (
    // TODO
    // @ts-ignore
    <NavigationContainer>
      {auth.userToken !== null ? (
          <HomeNavigator />
        ) :
        <AuthenticationNavigator />
      }
    </NavigationContainer>
)
};


export default MainNavigationContainer;
