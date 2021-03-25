import AsyncStorage from "@react-native-async-storage/async-storage";
import {combineReducers} from "redux";
import {auth} from "./auth";
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // механизм хранения
  whitelist: ['isLoading', 'userEmail', 'userToken']
}

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, auth)
})

export default rootReducer;
