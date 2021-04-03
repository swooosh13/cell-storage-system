import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import {ItemType} from "../redux/reducers/items-reducer/items";

export interface StackNavigatorProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string >{
    navigation: StackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>
}

export type AuthenticationRoutes = {
  SplashScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  ChangedPasswordScreen: undefined;
}

export type AppRoutes = {
  AuthenticationNavigator: undefined;
  HomeNavigator: undefined;
}

export type HomeRoutes = {
  HomeScreen:  undefined;
  DashboardScreen: undefined;
  HistoryScreen: undefined;
  SettingScreen: undefined;
}

export type MainRoutes = {
  MainScreen: undefined;
  ItemScreen: ItemType;
  AddScreen: undefined;
}
