import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Routes from '../navigations/Routes';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SideMenu from '../components/SideMenu';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import {connect} from 'react-redux';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
    <Stack.Navigator>
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
      drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen
        name={Routes.Home}
        options={{
          drawerIcon: () => <Icon name="home" size={20} color="skyblue" />,
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name={Routes.Profile}
        component={ProfileScreen}
        options={{
          drawerIcon: () => <Icon name="person" size={20} color="skyblue" />,
        }}
      />
    </Drawer.Navigator>
  );
};
const AppNavigation = ({initialRouteName, ...props}) => {
  const isLoggedIn = props.user.user.token ? true : false; // check for logged in user here
  return (
    <>
      {!isLoggedIn && <AuthStack initialRouteName={initialRouteName} />}
      {isLoggedIn && <AppStack />}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
