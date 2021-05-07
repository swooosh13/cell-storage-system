import React from "react";

import MainScreen from "../screens/home/MainScreen";
import {HomeRoutes, MainRoutes} from "../components/Navigation";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import DashboardScreen from "../screens/home/DashboardScreen";
import SettingsScreen from "../screens/home/SettingsScreen";
import HistoryScreen from "../screens/home/HistoryScreen";
import {useTheme} from "@shopify/restyle";
import {Theme} from "../components/Theme";
import {Ionicons as Icon} from "@expo/vector-icons";
import {createStackNavigator} from "@react-navigation/stack";
import ItemScreen from "../screens/home/ItemScreen/ItemScreen";
import AddScreen from "../screens/home/AddScreen";

const Tab = createMaterialBottomTabNavigator<HomeRoutes>();

const Stack = createStackNavigator<MainRoutes>();

const MainNavigator = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name={"MainScreen"} component={MainScreen}/>
      <Stack.Screen name={"ItemScreen"} component={ItemScreen}/>
      <Stack.Screen name={"AddScreen"} component={AddScreen}/>
    </Stack.Navigator>
  )
}

const HomeNavigator = () => {
  const theme = useTheme<Theme>();

  return (
    <Tab.Navigator activeColor={theme.colors.primary}
                   inactiveColor={theme.colors.grey}
                   barStyle={{backgroundColor: "#fff"}}>
      <Tab.Screen name={"HomeScreen"}
                  component={MainNavigator}
                  options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                      <Icon name={'home'} size={26} color={color}
                      />
                    )
                  }}/>
      <Tab.Screen name={"HistoryScreen"}
                  component={HistoryScreen}
                  options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                      <Icon name={'time'} size={26} color={color}
                      />
                    )
                  }}/>
      <Tab.Screen name={"DashboardScreen"}
                  component={DashboardScreen}
                  options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                      <Icon name={'stats-chart'} size={26} color={color}
                      />
                    )
                  }}/>
      <Tab.Screen name={"SettingScreen"}
                  component={SettingsScreen}
                  options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                      <Icon name={'settings'} size={26} color={color}
                      />
                    )
                  }}/>
    </Tab.Navigator>
  )
}
export default HomeNavigator;
