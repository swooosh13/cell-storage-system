import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";

export interface StackNavigatorProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string >{
    navigation: StackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>
}

export type Navigation = {
  SplashScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
}
