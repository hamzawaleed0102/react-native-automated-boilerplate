import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const HomeScreen = (props) => {
  console.log('props in home', props);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
