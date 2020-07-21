import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app/containers/AppNavigation';
import STORE from './app/store';
import {Provider} from 'react-redux';
import {
  getActiveRouteName,
  onNavigationStateChange,
} from './app/helpers/NavigationMiddleware';
import {navigationRef} from './app/navigations/RootNavigation';

const App = () => {
  const routeNameRef = React.useRef();

  React.useEffect(() => {
    const state = navigationRef.current.getRootState();
    routeNameRef.current = getActiveRouteName(state);
  }, []);

  return (
    <Provider store={STORE}>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={(state) => onNavigationStateChange(state, routeNameRef)}>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
