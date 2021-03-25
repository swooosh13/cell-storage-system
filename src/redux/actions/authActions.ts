import AsyncStorage from "@react-native-async-storage/async-storage";
import {authTypes} from "../types";
import {auth} from "../reducers/auth";

// TODO
export const login = (foundUser: any) => async (dispatch: any) => {
  const userToken = JSON.stringify(foundUser.userToken);
  const userEmail = foundUser.email;

  try {
    await AsyncStorage.setItem('userToken', userToken);
  } catch (e) {
    console.log(e);
  }

  dispatch({type: authTypes.LOGIN, email: userEmail, token: userToken});
}

export const logout = () => async (dispatch: any) => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (e) {
    console.log(e);
  }

  dispatch({type: authTypes.LOGOUT});
}

type User = {email: string; userToken: string};

// TODO - dispatch
export const register = (foundUser: User) => async (dispatch: any) => {
  const userToken = JSON.stringify(foundUser.userToken);
  const userEmail = foundUser.email;

  try {
    await AsyncStorage.setItem('userToken', userToken);
  } catch (e) {
    console.log(e);
  }

  dispatch({type: authTypes.REGISTER, email: userEmail, token: userToken});
}

export const retreiveToken = () => async (dispatch: any) => {
  let userToken = null;

  try {
    userToken = await AsyncStorage.getItem('userToken');
  } catch (e) {
    console.log(e);
  }

  dispatch({type: authTypes.RETREIVE_TOKEN, token: userToken})
}
