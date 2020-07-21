import {Alert, BackHandler} from 'react-native';
import StatusBarColorHandler from './StatusBarColorHandler';
import * as RootNavigation from '../navigations/RootNavigation';
// import analytics from '@react-native-firebase/analytics';

var routeN;
export const BackButtonHandler = () => {
  if (routeN === 'HomeScreen') {
    Alert.alert(
      'Exit App',
      'Exiting the application?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  } else {
    return false;
  }
};

const getActiveRouteName = (state) => {
  const route = state.routes[state.index];
  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
};

const onNavigationStateChange = (state, routeNameRef) => {
  const previousRouteName = routeNameRef.current;
  const currentRouteName = getActiveRouteName(state);

  if (previousRouteName !== currentRouteName) {
    StatusBarColorHandler(currentRouteName);
    // analytics().setCurrentScreen(currentRouteName, currentRouteName);
  }
  routeNameRef.current = currentRouteName;
};

export {getActiveRouteName, onNavigationStateChange};
