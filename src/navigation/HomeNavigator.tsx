import {createDrawerNavigator, DrawerContent} from "@react-navigation/drawer";
import React from "react";

import FindScreen from "../screens/home/FindScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeRoutes} from "../components/Navigation";
import AboutScreen from "../screens/home/AboutScreen";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator<HomeRoutes>();

const HomeNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={"FindScreen"} component={FindScreen}/>
    <Tab.Screen name={"AboutScreen"} component={AboutScreen}/>
  </Tab.Navigator>
)

export default HomeNavigator;
