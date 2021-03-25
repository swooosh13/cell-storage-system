import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";

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
  FindScreen:  undefined;
  AboutScreen: undefined;
}
