/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import AppTheme from '../styles/AppTheme';
import * as Animatable from 'react-native-animatable';

const PrimaryInputField = ({
  touched,
  error,
  onChangeText,
  onBlur,
  value,
  secureTextEntry,
  placeholder,
  icon,
}) => {
  const [focused, setFocused] = useState(false);
  const {backgroundsLightestGray, colorsAccentMainColor} = AppTheme.colors;
  return (
    <>
      <View
        style={{
          ...styles.container,
          borderColor: focused
            ? colorsAccentMainColor
            : backgroundsLightestGray,
          borderWidth: 1,
          backgroundColor: focused ? 'white' : backgroundsLightestGray,
        }}>
        <Image source={icon} style={styles.icon} />
        <TextInput
          value={value}
          onFocus={() => setFocused(true)}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onBlur={() => {
            onBlur();
            setFocused(false);
          }}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </View>

      {touched && error && (
        <Animatable.Text animation="bounceIn" style={styles.error}>
          {error}
        </Animatable.Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginTop: RFValue(10),
    alignItems: 'center',
  },
  icon: {
    width: RFValue(23),
    height: RFValue(23),
  },
  input: {
    fontSize: RFValue(14),
    marginLeft: '5%',
    color: AppTheme.colors.scrimsDarker60,
    paddingVertical: RFValue(10),
    flex: 1,
  },
  error: {
    color: 'darkred',
    marginTop: '2%',
    marginLeft: '2%',
    fontSize: RFValue(12),
  },
});
export default PrimaryInputField;
