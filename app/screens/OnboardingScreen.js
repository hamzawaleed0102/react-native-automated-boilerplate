import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Routes from '../navigations/Routes';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-community/async-storage';
import AppTheme from '../styles/AppTheme';
const {height, width} = Dimensions.get('window');
const slides = [
  {
    title: 'Title 1',
    desc: 'React native redux boilerplate',
  },
  {
    title: 'Title 2',
    desc: 'Description here',
  },
  {
    title: 'Title 3',
    desc: 'Description here',
  },
];

const OnboardingScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const alreadyViewed = await AsyncStorage.getItem('ONBOARDING_SKIPPED');
      if (alreadyViewed) {
        return props.navigation.replace(Routes.Login);
      }
      setLoading(false);
    })();
  }, []);

  const getStarted = async () => {
    await AsyncStorage.setItem('ONBOARDING_SKIPPED', 'true');
    props.navigation.navigate(Routes.Login);
  };

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    );
  };

  if (loading) {
    return null; //TODO can add splash image here too
  }

  return (
    <View style={styles.container}>
      <View style={styles.topLogoOnboarding}>
        <View style={styles.bottomContainer}>
          <Image
            style={styles.logo}
            source={{
              uri:
                'https://f0.pngfuel.com/png/689/10/people-constructing-monitor-illustration-png-clip-art.png',
            }}
          />

          <View style={styles.carouselContainer}>
            <Carousel
              inactiveSlideScale={1}
              data={slides}
              renderItem={_renderItem}
              sliderWidth={width}
              itemWidth={width}
              onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination
              dotsLength={slides.length}
              activeDotIndex={activeSlide}
              dotStyle={styles.dot}
              containerStyle={styles.paginationContainer}
              inactiveDotStyle={styles.inactiveDot}
              inactiveDotOpacity={1}
              inactiveDotScale={1}
            />
          </View>
          <PrimaryButton
            label="Get Started"
            style={{marginTop: '5%'}}
            onPress={getStarted}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  bottomContainer: {
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
  topLogoOnboarding: {
    width: undefined,
    height: undefined,
    justifyContent: 'flex-end',
    flex: 1,
  },

  desc: {
    // fontFamily: AppTheme.fonts.light,
    textAlign: 'center',
    lineHeight: 22,
    // fontSize: rf(height < 645 ? 2 : 4),
    marginTop: '2%',
    paddingBottom: 10,
    paddingHorizontal: '10%',
  },
});
export default OnboardingScreen;
