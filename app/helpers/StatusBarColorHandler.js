import {StatusBar, Platform} from 'react-native';
import Routes from '../navigations/Routes';

const StatusBarColorHandler = routeName => {
  console.log('routeName---', routeName);
  if (routeName === Routes.Login || routeName === Routes.Signup) {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('white');
    }
  } else if (routeName === Routes.Onboarding) {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
  } else {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(false);
      StatusBar.setBackgroundColor('white');
    }
    StatusBar.setBarStyle('dark-content');
  }
};

export default StatusBarColorHandler;
