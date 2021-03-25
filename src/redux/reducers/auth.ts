import {authTypes} from "../types";
import {AnyAction} from "redux";

export interface IAuthState {
  isLoading: boolean;
  userEmail: string | null;
  userToken: string | null;
}
//TODO
export interface IAuthAction {
  isLoading?: boolean;
  userEmail?: string | null;
  userToken: string | null;
}

const initialState: IAuthState = {
  isLoading: true,
  userEmail: null,
  userToken: null
}

export const auth = (state: IAuthState = initialState, action: AnyAction) => {
  switch (action.type) {
    case authTypes.RETREIVE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false
      }
    case authTypes.LOGIN:
      return {
        ...state,
        userEmail: action.email,
        userToken: action.token,
        isLoading: false
      }
    case authTypes.LOGOUT:
      return {
        ...state,
        userToken: null,
        userEmail: null,
        isLoading: false
      }
    case authTypes.REGISTER:
      return {
        ...state,
        userToken: action.token,
        userEmail: action.email,
        isLoading: false
      }
    default:
      return state;
  }
}


