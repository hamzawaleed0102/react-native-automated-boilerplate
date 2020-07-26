/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import AppTheme from '../styles/AppTheme';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AniamtedNextButton = ({
  btnTxtScale,
  btnWidth,
  btnIconScale,
  BTN_ICON_SIZE,
  getStarted,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} disabled={disabled}>
      <Animated.View
        style={[
          styles.arrowBtn,
          {
            width: btnWidth,
          },
        ]}>
        <Animated.Image
          source={require('../assets/arrowRightBlk.png')}
          style={{
            width: btnIconScale,
            height: BTN_ICON_SIZE,
            resizeMode: 'contain',
          }}
        />
        <Animated.Text
          style={{
            color: AppTheme.colors.red,
            fontSize: btnTxtScale,
            // paddingLeft: 10,
          }}
          numberOfLines={1}>
          Get Started
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrowBtn: {
    backgroundColor: 'white',
    height: RFValue(45),
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(10),
    alignSelf: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
});
export default AniamtedNextButton;
