import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

const AppTheme = {
  colors: {
    primaryColor: 'rgb(56,118,174)',
    purple: 'rgb(88,86,214)',
    red: 'rgb(203,67,104)',
    gray: 'rgb(209,209,214)',
    darkGray: 'rgb(207,207,207)',
  },
  fonts: {
    heavy: 'AvenirLTStd-Heavy',
    medium: 'AvenirLTStd-Medium',
    light: 'AvenirLTStd-Light',
    book: 'AvenirLTStd-Book',
  },
  fontSize: {
    heading: RFValue(20),
    title: RFValue(18),
    subtitle: RFValue(14),
  },
  metrics: {
    deviceWidth: width,
    deviceHeight: height,
  },
  borderRadius: {
    xs: 2,
    sm: 4,
    lg: 8,
    xl: 12,
  },
};
export default AppTheme;
