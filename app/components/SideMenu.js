import React from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import {DrawerItemList} from '@react-navigation/drawer';
import AppTheme from '../styles/AppTheme';
import Routes from '../navigations/Routes';
import {logout} from '../store/actions/ProfileActions';
import {connect} from 'react-redux';
import {RFPercentage} from 'react-native-responsive-fontsize';

const SideMenu = (props) => {
  const {user} = props.profile;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.leftCol}>
          <View style={styles.roundedImg}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}
            />
          </View>
        </View>
        <View style={styles.rightCol}>
          <Text style={styles.hi} numberOfLines={1}>
            Hi {user.UserName?.split(' ')[0]}!
          </Text>
          <Text style={styles.number}>{user.loginName}</Text>
        </View>
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
      <TouchableOpacity style={styles.logoutBtn} onPress={() => props.logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer,
});

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftCol: {},
  rightCol: {
    paddingLeft: 15,
    flex: 1,
  },
  avatar: {
    width: 70,
    height: 70,
  },
  roundedImg: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  hi: {
    // fontFamily: AppTheme.fonts.medium,
    fontSize: RFPercentage(2.5),
  },
  number: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: RFPercentage(AppTheme.metrics.deviceHeight < 645 ? -1 : 1),
  },
  labelStyle: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    // paddingTop: Platform.select({ios: 3, android: 0}),
    width: '100%',
  },
  logoutLabel: {
    // fontFamily: AppTheme.fonts.light,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  logoutBtn: {
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingRight: 5,
  },
});
