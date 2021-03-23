import {createDrawerNavigator, DrawerContent} from "@react-navigation/drawer";
import React from "react";

import FindScreen from "../screens/home/FindScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeRoutes} from "../components/Navigation";
import AboutScreen from "../screens/home/AboutScreen";

const Drawer = createStackNavigator<HomeRoutes>();

const HomeNavigator = () => (
  <Drawer.Navigator headerMode={"none"}>
    <Drawer.Screen name={"FindScreen"} component={FindScreen}/>
    <Drawer.Screen name={"AboutScreen"} component={AboutScreen}/>
  </Drawer.Navigator>
)

export default HomeNavigator;
