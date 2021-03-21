import React, {Component} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Image} from 'react-native';
import {TextBold, TextSemiBold, TextThin} from './TextView';
import i18n from 'i18n-js';

import scan from '../assets/imgs/scan.png';
import styles from '../utility/Style';
import {TouchableHighlight} from 'react-native-gesture-handler';
import * as Navigation from '../navigation/navigation';

const QRCodeContainer = () => {
  return (
    <View>
      <View style={styles.qrContainer}>
        <TouchableHighlight
          onPress={() => {
            Navigation.navigate('Scan');
          }}>
          <Image source={scan} style={styles.qrIcon}></Image>
        </TouchableHighlight>

        <TextBold
          text={i18n.t('scanfor')}
          style={{textAlign: 'center', fontSize: Sizes.extraDouble}}
        />
        <TextThin
          text={i18n.t('myreward')}
          style={{textAlign: 'center', fontSize: Sizes.extraDouble}}
        />
      </View>
    </View>
  );
};

export default QRCodeContainer;
