import {StyleSheet, Dimensions, Platform} from 'react-native';
import AppTheme from './AppTheme';
const {width, height} = Dimensions.get('window');

// response font
export const rf = (size) => {
  return height / 90 + width / 90 + size;
};

const AppStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  topLogo: {
    width: width,
    height: width,
    flex: 1,
    justifyContent: 'flex-end',
  },
  topLogoOnboarding: {
    width: undefined,
    height: undefined,
    justifyContent: 'flex-end',
    flex: 1,
  },
  onboardingTopLeftLogo: {
    width: height / 3.4,
    height: height / 3.5,
    resizeMode: 'contain',
  },
  engLogo: {
    alignSelf: 'center',
    width: width / 3,
    height: width / 3,
    resizeMode: 'contain',
  },
  loginLogo: {
    width: AppTheme.metrics.deviceHeight / 4,
    height: AppTheme.metrics.deviceHeight / 5,
    marginTop: '2%',
  },
  heading: {
    fontSize: rf(AppTheme.metrics.deviceHeight < 645 ? 5 : 10),
    // fontFamily: AppTheme.fonts.heavy,
    textAlign: 'center',
    marginTop: '2%',
  },
  text1: {
    fontSize: rf(height < 645 ? 0 : 4),
    textAlign: 'center',
    // fontFamily: AppTheme.fonts.light,
  },
  footer: {
    textAlign: 'center',
    lineHeight: rf(height < 645 ? 3 : 8),
    // fontFamily: AppTheme.fonts.light,
    fontSize: rf(height < 645 ? 0 : 4),
    marginTop: '3%',
  },
  footerBold: {
    // fontFamily: AppTheme.fonts.medium,
    textAlign: 'center',
    fontSize: rf(height < 645 ? 0 : 4),
  },
  bottomContainer: {
    // backgroundColor: 'white',
    // justifyContent: 'space-between',
    paddingVertical: '7%',
    paddingHorizontal: 40,
    paddingBottom: height < 700 ? 10 : '7%',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: -10,
    backgroundColor: AppTheme.colors.primaryColor,
  },
  inactiveDot: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: AppTheme.colors.primaryColor,
    width: 10,
    height: 10,
  },
  carouselContainer: {
    marginTop: '3%',
    marginBottom: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideTitle: {
    fontSize: rf(height < 645 ? 4 : 6),
    // fontFamily: AppTheme.fonts.medium,
    textAlign: 'center',
  },

  desc: {
    // fontFamily: AppTheme.fonts.light,
    textAlign: 'center',
    lineHeight: 22,
    fontSize: rf(height < 645 ? 2 : 4),
    marginTop: '2%',
    paddingBottom: 10,
    paddingHorizontal: '10%',
  },
  center: {
    justifyContent: 'center',
    paddingHorizontal: '10%',
    paddingVertical: height < 645 ? '1%' : '5%',
    flex: height < 645 ? undefined : 1,
  },
  top: {
    alignItems: 'center',
  },
  loginContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    flex: 1,
  },
  bottom: {
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 20,
  },
  dontHaveAccount: {
    marginBottom: 15,
  },
  bottomLogo: {
    alignSelf: 'center',
    width: height / 6,
    height: height / 10,
    resizeMode: 'contain',
  },
  dropdownItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: AppTheme.colors.darkGray,
    paddingLeft: 10,
    marginTop: 20,
  },
  roundedContainer: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  simpleText: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: rf(AppTheme.metrics.deviceHeight < 645 ? 1 : 4),
    paddingTop: Platform.select({ios: 6, android: 0}),
    marginLeft: 6,
  },
  simpleTextLeft: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: rf(AppTheme.metrics.deviceHeight < 645 ? 1 : 5),
    paddingTop: 3,
  },
  headerMenuIcon: {
    width: 30,
    resizeMode: 'contain',
  },
  twoColRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    // resizeMode: 'contain',
  },
  criminalAvatar: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  subHeading: {
    // fontFamily: AppTheme.fonts.medium,
    fontSize: 20,
  },
  slogan: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: rf(3),
    color: AppTheme.colors.primaryColor,
    marginTop: 20,
  },
  version: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: rf(height < 645 ? -2 : 2),
    color: 'gray',
    textAlign: 'center',
  },
  roundedImage: {
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cell: {
    width: width / 2.3,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: AppTheme.colors.gray,
    borderRadius: 10,
    paddingVertical: '5%',
  },
  cellNoPadder: {
    width: width / 2.3,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: AppTheme.colors.gray,
    borderRadius: 10,
  },
  complaintCount: {
    fontSize: rf(height < 645 ? 14 : 25),
    // fontFamily: AppTheme.fonts.heavy,
    color: AppTheme.colors.primaryColor,
  },
  cellTitle: {
    // fontFamily: AppTheme.fonts.medium,
    fontSize: rf(height < 645 ? 5 : 10),
    color: 'rgb(51,51,51)',
    lineHeight: rf(height < 645 ? 8 : 16),
  },
  floatTopRight: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
  floatTopRightSmall: {
    position: 'absolute',
    top: 0,
    right: 0,
    resizeMode: 'contain',
    width: AppTheme.metrics.deviceWidth * 0.22,
    height: AppTheme.metrics.deviceWidth * 0.22,
    borderTopRightRadius: 10,
  },
  seeAllLabel: {
    // fontFamily: AppTheme.fonts.heavy,
    textDecorationLine: 'underline',
    color: AppTheme.colors.primaryColor,
    fontSize: 17,
  },
  row: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
    flex: 1,
  },
  leftCol: {
    paddingVertical: 10,
    justifyContent: 'center',
  },
  block: {
    backgroundColor: AppTheme.colors.primaryColor,
    width: '83%',
    position: 'absolute',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    top: 0,
    bottom: 0,
  },
  rightCol: {
    paddingLeft: '5%',
    paddingRight: '2%',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: '3%',
  },
  homeImg: {
    marginLeft: 10,
  },
  borderedContainer: {
    borderWidth: 1,
    borderColor: AppTheme.colors.darkGray,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  paddingContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  simpleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenterMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingLeft: {
    fontSize: rf(AppTheme.metrics.deviceHeight < 645 ? 5 : 18),
    // fontFamily: AppTheme.fonts.medium,
  },
  boldText: {
    // fontFamily: AppTheme.fonts.medium,
    fontSize: rf(AppTheme.metrics.deviceHeight < 645 ? 2 : 7),
  },
  smallBoldText: {
    // fontFamily: AppTheme.fonts.medium,
    fontSize: rf(height < 645 ? 1 : 5),
  },
  transparentBtnLabel: {
    // fontFamily: AppTheme.fonts.medium,
    fontSize: rf(AppTheme.metrics.deviceHeight < 645 ? 0 : 5),
  },
  separator: {
    backgroundColor: AppTheme.colors.gray,
    height: 2,
    marginVertical: 10,
  },
  transparentBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerContainer: {
    borderWidth: 1,
    borderColor: AppTheme.colors.darkGray,
    borderRadius: 10,
    marginTop: 15,
  },
  timestamp: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: rf(AppTheme.metrics.deviceHeight < 645 ? -2 : 2),
    paddingTop: 3,
    color: 'gray',
    marginBottom: Platform.select({ios: 0, android: 3}),
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  listLeftBorder: {
    borderLeftWidth: 2,
    borderColor: AppTheme.colors.primaryColor,
    // paddingLeft: 20,
    marginTop: 10,
  },
  fixedCircle: {
    position: 'absolute',
    left: -11,
    top: -4,
    borderWidth: 6,
    borderColor: 'white',
  },
  headerLabelSmall: {
    color: 'black',
    paddingBottom: 3,
    // fontFamily: AppTheme.fonts.medium,
    marginTop: 6,
    fontSize: 15,
  },
  listItemTitle: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: rf(height < 645 ? 2 : 7),
  },
  subtitle: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: 15,
    color: 'rgb(129,129,129)',
    marginVertical: 20,
  },
  listBtn: {
    marginTop: 15,
  },
  inputStyleView: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppTheme.colors.darkGray,
    marginTop: 20,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  inputText: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: rf(height < 645 ? 2 : 4),
    color: 'black',
    marginTop: Platform.select({ios: 4, android: 0}),
  },
  rowBottom: {
    flexDirection: 'row',
  },
  circleContainer: {
    position: 'absolute',
    backgroundColor: 'red',
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: AppTheme.colors.primaryColor,
  },
  innerCircle: {
    backgroundColor: AppTheme.colors.primaryColor,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  formError: {
    // fontFamily: AppTheme.fonts.medium,
    color: 'darkred',
    margin: 10,
    marginTop: Platform.select({ios: '4%'}),
    fontSize: rf(height < 645 ? 2 : 4),
  },
});
export default AppStyles;
