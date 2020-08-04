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
import TextStyles from '../styles/TextStyles';

const PrimaryButton = ({
  onPress,
  icon,
  label,
  loading,
  disabled,
  mt = 0,
  style = {},
}) => {
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={[styles.btn, style, {opacity: disabled ? 0.5 : 1, marginTop: mt}]}
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
    backgroundColor: AppTheme.colors.colorsAccentMainColor,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    ...TextStyles.calloutWhiteCenter,
    paddingVertical: 1,
  },
});
