import {FULFILLED, PENDING, REJECTED} from '../utils/constants';
import * as types from '../types/index';
import createReducer from '../utils/createReducer';
const initialState = {
  loading: false,
  error: null,
  loaded: false,
  user: {},
};

const ProfileReducer = createReducer(initialState)({
  [types.LOGIN + PENDING]: (state) => ({
    ...state,
    errorLogin: null,
    loadingLogin: true,
    loadedLogin: false,
  }),
  [types.LOGIN + FULFILLED]: (state, {payload}) => ({
    ...state,
    user: payload.user,
    loadingLogin: false,
    loadedLogin: true,
    errorLogin: null,
  }),
  [types.LOGIN + REJECTED]: (state, {payload}) => ({
    ...state,
    errorLogin: payload.error,
    loadingLogin: false,
    loadedLogin: false,
  }),
  [types.LOGOUT + FULFILLED]: (state, {payload}) => ({
    ...state,
    user: {},
    loadingLogin: false,
    loadedLogin: true,
    errorLogin: null,
  }),
});

export default ProfileReducer;
