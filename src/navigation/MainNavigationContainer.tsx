import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {retreiveToken} from "../redux/reducers/auth-reducer/authActions";

import {ActivityIndicator, View} from "react-native";
import AuthenticationNavigator from "./AuthenticationNavigator";
import HomeNavigator from "./HomeNavigator";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";


const MainNavigationContainer = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state: RootState) => {
    return state.auth;
  });

  useEffect(() => {
    dispatch(retreiveToken());
  }, [dispatch]);

  if (auth.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={"large"} color={"red"}/>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {auth.userToken !== null
        ? <HomeNavigator/>
        : <AuthenticationNavigator/>
      }
    </NavigationContainer>
  )
};


export default MainNavigationContainer;
