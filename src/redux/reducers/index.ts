import AsyncStorage from "@react-native-async-storage/async-storage";
import {combineReducers} from "redux";
import {auth} from "./auth-reducer/auth";
import {persistReducer, persistStore} from 'redux-persist';
import itemsReducer from "./items-reducer/items";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // механизм хранения
  whitelist: ['isLoading', 'userEmail', 'userToken']
}

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, auth),
  items: itemsReducer
})

export default rootReducer;
