import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Animated, {Extrapolate} from 'react-native-reanimated';
const {height, width} = Dimensions.get('window');

const Dot = ({index, scrollX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const dotWidth = scrollX.interpolate({
    inputRange,
    outputRange: [RFValue(10), RFValue(20), RFValue(10)],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.3, 1, 0.3],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[styles.dot, {width: dotWidth, opacity}]}></Animated.View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: RFValue(10),
    height: RFValue(4),
    borderRadius: 3,
    backgroundColor: 'white',
    margin: 5,
  },
});
export default Dot;
