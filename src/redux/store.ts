import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import AsyncStorage from "@react-native-async-storage/async-storage";

import rootReducer from "./reducers";
import {persistStore} from "redux-persist";

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
