import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

let middleWaresToApply = [thunkMiddleware];

if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middleWaresToApply.push(createFlipperDebugger());
}

const rootReducer = (state, action) => {
  return combineReducers(reducers)(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const STORE = createStore(
  persistedReducer,
  applyMiddleware(...middleWaresToApply),
);
const persistor = persistStore(STORE);

export {persistor};
export default STORE;
