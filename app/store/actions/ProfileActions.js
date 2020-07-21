import * as types from '../types';
import {FULFILLED, PENDING, REJECTED} from '../utils/constants';
import REQUESTS from '../../utils/Request';
import API, {baseDomain} from '../../utils/API';
import {isValidEmail} from '../../utils/Validator';
import * as RootNav from '../../navigations/RootNavigation';
import Routes from '../../navigations/Routes';
import AppTheme from '../../styles/AppTheme';
import AsyncStorage from '@react-native-community/async-storage';
import STORE from '..';
import {Alert} from 'react-native';

const signup = (formData) => async (dispatch) => {
  console.log('formData', formData);
  dispatch({type: types.SIGNUP + PENDING});
  try {
    const signupResponse = await REQUESTS.postRequest(API.signup, formData);
    if (signupResponse) {
      console.log('signupResponse :', signupResponse);
      const hasError = signupResponse.errorCode !== 0;
      if (!hasError) {
        // SUCCESS
        dispatch({
          type: types.SIGNUP + FULFILLED,
          payload: {signupResponse},
        });
        // RootNav.replace(Routes.Success, {
        //   msg: `Thanks.\n${signupResponse.message}`,
        //   nextBtnLabel: 'Go Login',
        //   onPressNextBtn: () => RootNav.navigate(Routes.Login),
        //   title: 'Register',
        // });
      } else {
        // FAIL
        Alert.alert('Error', signupResponse.message);
        //   text: signupResponse.message,
        //   backgroundColor: AppTheme.colors.primaryColor,
        //   fontFamily: AppTheme.fonts.medium,
        //   action: {text: 'OK', onPress: () => {}, textColor: 'white'},
        // });
        // TODO fix this
        dispatch({
          type: types.SIGNUP + REJECTED,
          payload: {signupResponse},
        });
      }
    }
  } catch (err) {
    console.log('err', err);
    dispatch({
      type: types.SIGNUP + REJECTED,
      payload: {error: err},
    });
  }
};

const login = (formData) => async (dispatch) => {
  // console.log('formData', formData);
  const userEnteredPassword = formData.Password.toString();
  formData.Password = userEnteredPassword;
  console.log('login formData', formData);
  dispatch({type: types.LOGIN + PENDING});
  REQUESTS.postRequest(API.login, formData)
    .then(async (user) => {
      console.log('user---', user);
      if (user.errorCode === 0) {
        const userObject = {
          password: userEnteredPassword,
          ...user.payload,
          token: user.token,
        };
        await AsyncStorage.setItem('USER', JSON.stringify(userObject));
        dispatch({
          type: types.LOGIN + FULFILLED,
          payload: {user: {...userObject, password: userEnteredPassword}},
        });
        if (userObject.SysGenPwd) {
          RootNav.navigate(Routes.ChangePassword);
        } else {
          RootNav.navigate(Routes.Home);
        }
      } else {
        // FAILED
        dispatch({
          type: types.LOGIN + REJECTED,
          payload: {error: user.message},
        });
      }
    })
    .catch((err) => {
      console.log('err in login--', err);
      dispatch({
        type: types.LOGIN + REJECTED,
        payload: {error: err},
      });
    });
};

const forgotPassword = (formData) => async (dispatch) => {
  console.log('forgotPassword formData', formData);
  dispatch({type: types.FORGOT_PASSWORD + PENDING});

  REQUESTS.postRequest(API.forgotPassword, formData)
    .then((forgotResp) => {
      dispatch({
        type: types.FORGOT_PASSWORD + FULFILLED,
      });
      // RootNav.replace(Routes.Success, {
      //   msg: typeof forgotResp === 'string' ? forgotResp : forgotResp.Message,
      //   nextBtnLabel: 'Go Login',
      //   onPressNextBtn: () => RootNav.goBack(),
      //   title: 'Reset Password',
      // });
    })
    .catch((err) => {
      console.log('forgotPassword err', err);
      dispatch({
        type: types.FORGOT_PASSWORD + REJECTED,
        payload: {error: err},
      });
    });
};

const reLogin = (user) => async (dispatch) => {
  console.log('reloggin in', user);
  dispatch({
    type: types.LOGIN + FULFILLED,
    payload: {user},
  });
};

const logout = () => async (dispatch) => {
  await AsyncStorage.removeItem('USER');
  RootNav.closeDrawer();
  setTimeout(() => {
    dispatch({
      type: types.LOGOUT + FULFILLED,
    });
  }, 1000);
};

export {signup, login, reLogin, logout, forgotPassword};
