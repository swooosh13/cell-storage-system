import AsyncStorage from "@react-native-async-storage/async-storage";
import {authTypes} from "../../types";
import {AppDispatch} from "../../store";

export type User = {email: string; userToken: string};

export const login = (foundUser: User) => async (dispatch: AppDispatch) => {
  const userToken = JSON.stringify(foundUser.userToken);
  const userEmail = foundUser.email;

  try {
    await AsyncStorage.setItem('userToken', userToken);
  } catch (e) {
    console.log(e);
  }

  dispatch({type: authTypes.LOGIN, email: userEmail, token: userToken});
}

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (e) {
    console.log(e);
  }

  dispatch({type: authTypes.LOGOUT});
}

export const register = (foundUser: User) => async (dispatch: AppDispatch) => {
  const userToken = JSON.stringify(foundUser.userToken);
  const userEmail = foundUser.email;

  try {
    await AsyncStorage.setItem('userToken', userToken);
  } catch (e) {
    console.log(e);
  }

  dispatch({type: authTypes.REGISTER, email: userEmail, token: userToken});
}

export const retreiveToken = () => async (dispatch: AppDispatch) => {
  let userToken = null;

  try {
    userToken = await AsyncStorage.getItem('userToken');
  } catch (e) {
    console.log(e);
  }

  dispatch({type: authTypes.RETREIVE_TOKEN, token: userToken})
}
