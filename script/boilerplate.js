const screenBoilerplate = `import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ___ = () => {
  return (
    <View>
      <Text>___</Text>
    </View>
  );
};

export default ___;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
`;

const componentBoilerplate = `import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const ___ = () => {
  return (
    <View>
      <Text>___</Text>
    </View>
  );
};

export default ___;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
`;

const actionBoilerplate = `const ACTION_NAME = (formData) => async (dispatch) => {
  dispatch({type: types._TYPE_ + PENDING});
  try {
    const response = await REQUESTS.postRequest(API._API_, formData);
    console.log('response in ACTION_NAME', response);
    dispatch({
      type: types._TYPE_ + FULFILLED,
      payload: {
        ACTION_NAME: response._KEY_,
      },
    });
  } catch (err) {
    console.log('err in ACTION_NAME', err);
    dispatch({
      type: types._TYPE_ + REJECTED,
      payload: {err},
    });
  }
};

export {
  ACTION_NAME,`;

const stackScreenBoilerplate = {
  '--app': `  <AppStack.Screen name={Routes.__} component={__} />
    </AppStack.Navigator>`,
  '--auth': `  <AuthStack.Screen name={Routes.__} component={__} />
    </AuthStack.Navigator>`,
};

const newAppNavImports = {
  find: '// DONOT_REMOVE: NEW_IMPORTS',
  replace: `
// DONOT_REMOVE: NEW_IMPORTS`,
};

module.exports = {
  actionBoilerplate,
  componentBoilerplate,
  screenBoilerplate,
  stackScreenBoilerplate,
  newAppNavImports,
};
