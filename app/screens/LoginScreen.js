import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {login, reLogin} from '../store/actions/ProfileActions';
import Routes from '../navigations/Routes';

const LoginScreen = (props) => {
  const handleLogin = () => {
    props.reLogin({name: 'Hamza Waleed', token: 'testToken'});
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'khaki',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Forgot Password"
        onPress={() => props.navigation.navigate(Routes.ForgetPassword)}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
  app: state.appReducer,
});

const mapDispatchToProps = {
  login,
  reLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
