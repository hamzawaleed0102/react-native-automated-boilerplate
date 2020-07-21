import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {StyleSheet} from 'react-native';
import AppTheme from '../styles/AppTheme';
import {rf} from '../styles/AppStyles';

const PrimaryButton = ({
  onPress,
  icon,
  label,
  loading,
  disabled,
  style = {},
}) => {
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={[styles.btn, style, {opacity: disabled ? 0.5 : 1}]}
      onPress={onPress}
      activeOpacity={0.7}>
      {loading && <ActivityIndicator color="white" style={styles.label} />}
      <Text style={styles.label}>{!loading ? label : ' '}</Text>
      {/* {!loading && (
        <Image source={icon} style={styles.iconRight} resizeMode="contain" />
      )} */}
    </TouchableOpacity>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  iconRight: {
    width: 15,
    height: 15,
  },
  btn: {
    backgroundColor: AppTheme.colors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    // elevation: 2,
    // shadowColor: AppTheme.colors.primaryColor,
    // shadowOffset: {width: 1, height: 2},
    // shadowOpacity: 1,
  },
  label: {
    color: 'white',
    // fontFamily: AppTheme.fonts.heavy,
    marginTop: Platform.select({ios: 4, android: 0}),
    fontSize: rf(AppTheme.metrics.deviceHeight < 645 ? 2 : 4),
  },
});
