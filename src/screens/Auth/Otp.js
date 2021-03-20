import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import styles from '../../utility/Style';
import * as Navigation from '../../navigation/navigation';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Color from '../../utility/Color';
import i18n from 'i18n-js';
import Sizes from '../../utility/Sizes';
import Fonts from '../../utility/Font';
import FullButton from '../../components/FullButton';

import {TextBold, TextLite, TextThin} from '../../components/TextView';
const OtpScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <View style={styleLocal.headerText}>
        <TextBold text={i18n.t('otplongtext')} ellipsizeMode={'middle'} />
      </View>
      <View style={styleLocal.otpSecondText}>
        <TextBold text={i18n.t('otplongtext2')} ellipsizeMode={'middle'} />
      </View>
      <OTPInputView
        style={{width: '80%', height: 200}}
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
      <FullButton
        onPress={() => Navigation.navigate('SignUp')}
        text={i18n.t('login')}
        textColor={Color.white}
        bgColor={Color.theme}></FullButton>
      <View style={styleLocal.footer}>
        <TextLite
          style={{
            color: Color.black,
            fontSize: Sizes.large,
            fontWeight: '200',
          }}
          text={i18n.t('didntrecive')}
        />

        <TextThin
          style={{
            color: Color.green,
            fontSize: Sizes.large,
            fontWeight: '600',
          }}
          text={i18n.t('click')}
        />
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  headerText: {
    flexDirection: 'row',
    textAlignVertical: 'center',
  },
  otpSecondText: {
    flexDirection: 'row',
    textAlignVertical: 'center',
  },
  footer: {
    flexDirection: 'row',
    textAlignVertical: 'center',
  },
});
export default OtpScreen;
