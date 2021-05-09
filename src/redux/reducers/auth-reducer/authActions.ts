import AsyncStorage from "@react-native-async-storage/async-storage";
import { authTypes } from "../../types";
import { AppDispatch } from "../../store";
import { usersAPI } from "../../api/api";

export type User = { email: string; userToken: string };

export const login = (foundUser: User) => async (dispatch: AppDispatch) => {
  const userToken = JSON.stringify(foundUser.userToken);
  const userEmail = foundUser.email;

  try {
    let config = {
      headers: {
        Authorization: "Bearer " + JSON.parse(userToken),
      },
    };
    await AsyncStorage.setItem("userToken", userToken);
    const userId = await usersAPI.getUserByEmail(userEmail, config);
    const id = "" + userId.data.user.id;
    await AsyncStorage.setItem("userId", id);
  } catch (e) {
    console.warn(e);
  }

  dispatch({ type: authTypes.LOGIN, email: userEmail, token: userToken });
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userId");
  } catch (e) {
    console.log(e);
  }

  dispatch({ type: authTypes.LOGOUT });
};

export const register = (foundUser: User) => async (dispatch: AppDispatch) => {
  const userToken = JSON.stringify(foundUser.userToken);
  const userEmail = foundUser.email;

  try {
    await AsyncStorage.setItem("userToken", userToken);
  } catch (e) {
    console.log(e);
  }

  dispatch({ type: authTypes.REGISTER, email: userEmail, token: userToken });
};

export const retreiveToken = () => async (dispatch: AppDispatch) => {
  let userToken = null;

  try {
    userToken = await AsyncStorage.getItem("userToken");
  } catch (e) {
    console.log(e);
  }

  dispatch({ type: authTypes.RETREIVE_TOKEN, token: userToken });
};
