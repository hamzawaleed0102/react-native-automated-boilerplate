/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Routes from '../navigations/Routes';
import LottieView from 'lottie-react-native';
import AppTheme from '../styles/AppTheme';

const SplashScreen = (props) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(AppTheme.colors.primaryColor);
        StatusBar.setTranslucent(true);
      }
      StatusBar.setBarStyle('light-content');
      const alreadyViewed = await AsyncStorage.getItem('ONBOARDING_SKIPPED');
      let nextRoute;
      if (alreadyViewed) {
        nextRoute = Routes.Login;
      } else {
        nextRoute = Routes.Onboarding;
      }
      setTimeout(() => {
        props.navigation.replace(nextRoute);
      }, 1500);
    })();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppTheme.colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        translucent={true}
        backgroundColor={AppTheme.colors.primaryColor}
        barStyle="light-content"
      />
      <LottieView
        source={require('../assets/loader-ring.json')}
        autoPlay
        loop
        style={{width: '50%'}}
      />
    </View>
  );
};

export default SplashScreen;
