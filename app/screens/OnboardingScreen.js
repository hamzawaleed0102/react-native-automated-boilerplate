import React, {useState, useRef} from 'react';
import {Dimensions, StyleSheet, Platform} from 'react-native';
import Routes from '../navigations/Routes';
import AsyncStorage from '@react-native-community/async-storage';
import AppTheme from '../styles/AppTheme';
import OnboardingSlide from '../components/OnboardingSlide';
import Animated, {interpolate} from 'react-native-reanimated';
import {useValue, onScrollEvent, interpolateColor} from 'react-native-redash';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import Dot from '../components/Dot';
import AniamtedNextButton from '../components/AniamtedNextButton';
const BTN_ICON_SIZE = RFValue(25);
const BTN_INIT_WIDTH = RFValue(45);
const BTN_FULL_WIDTH = RFPercentage(40);
const {width} = Dimensions.get('window');

const SLIDES = [
  {
    image: require('../assets/ob1.png'),
    title: 'Memorease helping you',
    subtitle: 'To remember the moments that matter most.',
  },
  {
    image: require('../assets/ob2.png'),
    title: 'Memorease helping you',
    subtitle: 'To remember the moments that matter most.',
  },
  {
    image: require('../assets/ob3.png'),
    title: 'Memorease helping you',
    subtitle: 'To remember the moments that matter most.',
  },
];

const OnboardingScreen = (props) => {
  const [nextBtnDisabled, disableNextBtn] = useState(false);
  const [activeSlideIndex, setActiveSlide] = useState(0);
  const scrollX = useValue(0);
  const SV = useRef();
  const onScroll = onScrollEvent({x: scrollX});
  const {primaryColor, purple, red} = AppTheme.colors;
  const backgroundColors = interpolateColor(scrollX, {
    inputRange: [0, width, width * 2],
    outputRange: [primaryColor, red, purple],
  });

  const btnWidth = interpolate(scrollX, {
    inputRange: [0, width, width * 2],
    outputRange: [BTN_INIT_WIDTH, BTN_INIT_WIDTH, BTN_FULL_WIDTH],
  });
  const btnTxtScale = interpolate(scrollX, {
    inputRange: [1, width + 100, width * 2],
    outputRange: [0.1, 0.1, RFValue(16)],
  });
  const btnIconScale = interpolate(scrollX, {
    inputRange: [0, width, width * 1.5],
    outputRange: [BTN_ICON_SIZE, BTN_ICON_SIZE, 0],
  });

  const getStarted = async () => {
    if (activeSlideIndex === SLIDES.length - 1) {
      //GET_STARTED
      await AsyncStorage.setItem('ONBOARDING_SKIPPED', 'true');
      props.navigation.navigate(Routes.Login);
    } else {
      //NEXT_SLIDE
      if (Platform.OS === 'android') {
        //manuall setting this because onMomentunEnd not triggring on android
        setActiveSlide(activeSlideIndex + 1);
      }
      SV.current
        .getNode()
        .scrollTo({x: (activeSlideIndex + 1) * width, y: 0, animated: true});
    }
  };

  const onScrollEnd = (e) => {
    const curretPos = e.nativeEvent.contentOffset.x;
    const currentIndex = curretPos / width;
    setActiveSlide(currentIndex);
    disableNextBtn(false);
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColors,
        },
      ]}>
      <Animated.ScrollView
        ref={SV}
        pagingEnabled={true}
        bounces={false}
        onMomentumScrollEnd={onScrollEnd}
        onMomentumScrollBegin={() => disableNextBtn(true)}
        overScrollMode="never"
        onScroll={onScroll}
        snapToInterval={AppTheme.metrics.deviceWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1}
        horizontal>
        {SLIDES.map((slide, index) => (
          <OnboardingSlide
            scrollX={scrollX}
            index={index}
            {...slide}
            key={index}
          />
        ))}
      </Animated.ScrollView>
      <Animated.View style={styles.paginationContainer}>
        {SLIDES.map((i, index) => (
          <Dot index={index} scrollX={scrollX} key={index} />
        ))}
      </Animated.View>
      <AniamtedNextButton
        onPress={getStarted}
        disabled={nextBtnDisabled}
        {...{btnTxtScale, btnWidth, btnIconScale, BTN_ICON_SIZE}}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingVertical: '10%',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
  },
  slideTitle: {
    // fontSize: rf(height < 645 ? 4 : 6),
    // fontFamily: AppTheme.fonts.medium,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: width / 3,
    height: width / 3,
    resizeMode: 'contain',
  },

  desc: {
    // fontFamily: AppTheme.fonts.light,
    textAlign: 'center',
    // lineHeight: 22,
    // fontSize: rf(height < 645 ? 2 : 4),
    // marginTop: '2%',
    paddingBottom: 10,
    paddingHorizontal: '10%',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default OnboardingScreen;
