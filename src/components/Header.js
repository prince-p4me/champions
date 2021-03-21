import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  View,
  SafeAreaView,
  Text,
  Image,
} from 'react-native';
import styles from '../utility/Style';
import Constants from '../utility/Constant';
import SideIcon from '../assets/imgs/arrow.png';
import About from '../assets/imgs/About.png';

import Logout from '../assets/imgs/Log-out.png';
import Edit from '../assets/imgs/edit.png';
import Help from '../assets/imgs/help.png';

import * as Navigation from '../navigation/navigation';
import Color from '../utility/Color';

const Header = (props) => {
  const {title, back, dashboard} = props;

  console.log('back', back);
  return (
    <View style={{width: '100%'}}>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      {!dashboard && (
        <View style={styles.header}>
          {back && (
            <TouchableOpacity
              style={styles.drawerButton}
              activeOpacity={0.7}
              onPress={() => Navigation.goBack()}>
              <Image source={SideIcon} style={styles.sideIcon}></Image>
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      {dashboard && (
        <View style={styles.headerDashboard}>
          <View style={styles.headerContainer}>
            <View style={styles.headerCol}>
              <Image source={About} style={styles.profileIcon}></Image>
            </View>

            <View style={styles.headerRightRow}>
              <Image source={Edit} style={styles.rightHeaderIcon}></Image>
              <View style={styles.helpSpacing}>
                <Image source={Help} style={styles.rightHeaderIcon}></Image>
              </View>
              <Image source={Logout} style={styles.rightHeaderIcon}></Image>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
