/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Routes from '../navigations/Routes';
import {Platform} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import AppTheme from '../styles/AppTheme';
import AppStyles, {rf} from '../styles/AppStyles';
import SideMenu from '../components/SideMenu';
// import SecurityAlertsScreen from '../screens/SecurityAlertsScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import {connect} from 'react-redux';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Home}
        options={{headerShown: false}}
        component={DrawerNav}
      />
    </Stack.Navigator>
  );
};

const AuthStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerLeftContainerStyle: {marginLeft: '5%'},
          // headerTitleAlign: 'center',
          // headerBackTitle: 'Back',
          // headerBackTitleStyle: {
          //   color: 'black',
          //   paddingBottom: 3,
          //   fontFamily: AppTheme.fonts.medium,
          //   marginTop: 6,
          // },
          // headerTitleStyle: {
          //   color: 'black',
          //   paddingBottom: 3,
          //   fontFamily: AppTheme.fonts.medium,
          //   marginTop: Platform.select({ios: 10, android: 0}),
          //   fontSize: rf(AppTheme.metrics.deviceHeight < 645 ? 2 : 8),
          // },
          // headerBackImage: () => {
          //   return (
          //     <Icon
          //       name="ios-arrow-back"
          //       type="Ionicons"
          //       style={{marginRight: 10, alignSelf: 'center'}}
          //     />
          //   );
          // },
        }
      }>
      <Stack.Screen
        name={Routes.Onboarding}
        options={{headerShown: false}}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={Routes.Login}
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        name={Routes.Signup}
        initialParams={{type: 'register'}}
        component={SignupScreen}
      />
      <Stack.Screen
        name={Routes.ForgetPassword}
        options={{
          title: 'Forgot Password',
        }}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      overlayColor="transparent"
      edgeWidth={60}
      drawerType="back"
      drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen name={Routes.Home} component={HomeScreen} />
      <Drawer.Screen name={Routes.Profile} component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
const AppNavigation = ({initialRouteName, ...props}) => {
  const isLoggedIn = props.user.user.token ? true : false;
  console.log('isLoggedIn', isLoggedIn);
  return (
    <>
      {!isLoggedIn && <AuthStack initialRouteName={initialRouteName} />}
      {isLoggedIn && <DrawerNav />}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
