import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import AppTheme from '../styles/AppTheme';
import Animated from 'react-native-reanimated';
import {RFPercentage} from 'react-native-responsive-fontsize';
const {height, width} = Dimensions.get('window');

const OnboardingSlide = ({
  size,
  scrollX,
  index,
  image,
  title,
  subtitle,
  children,
}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width,
  ];
  const scale = scrollX.interpolate({inputRange, outputRange: [0, 1, 0]});
  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });
  const translateXheading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.2, 0, -width * 0.2],
  });
  const translateXsubtitle = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.6, 0, -width * 0.6],
  });

  return (
    <Animated.View style={styles.slide}>
      <Animated.Image
        style={[styles.image, {transform: [{scale}]}]}
        source={image}
      />
      <Animated.Text
        style={[
          styles.title,
          {opacity, transform: [{translateX: translateXheading}]},
        ]}>
        {title}
      </Animated.Text>
      <Animated.Text
        style={[
          styles.subtitle,
          {opacity, transform: [{translateX: translateXsubtitle}]},
        ]}>
        {subtitle}
      </Animated.Text>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: RFPercentage(30),
    height: RFPercentage(30),
    resizeMode: 'contain',
  },
  slide: {
    width: AppTheme.metrics.deviceWidth,
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: AppTheme.fontSize.heading,
    color: 'white',
    marginTop: '10%',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: AppTheme.fontSize.subtitle,
    color: 'white',
    textAlign: 'center',
    marginTop: '5%',
  },
});
export default OnboardingSlide;
