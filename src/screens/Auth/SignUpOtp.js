import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import GlobalStyles from '../../utility/Style';
import * as Navigation from '../../navigation/navigation';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Color from '../../utility/Color';
import i18n from 'i18n-js';
import Sizes from '../../utility/Sizes';
import Fonts from '../../utility/Font';
import FullButton from '../../components/FullButton';

import { TextBold, TextLite, TextRegular, TextThin } from '../../components/TextView';
import LinkButton from './LinkButton';

const SignUpOtp = ({ route }) => {
  return (
    <View style={[GlobalStyles.container, { paddingVertical: 30 }]}>
      <TextBold text={i18n.t('otplongtext')}
        style={{ textAlign: "center", fontSize: Sizes.extraDouble }} />

      <TextRegular text={i18n.t('otplongtext2')}
        style={{ textAlign: "center", fontSize: Sizes.regular, marginTop: 30 }} />
      <OTPInputView
        style={{ width: '80%', height: 200 }}
        pinCount={4}
        autoFocusOnLoad
        placeholderCharacter="*"
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
      <View style={{ width: "100%", paddingHorizontal: "10%" }}>
        <FullButton
          onPress={() => Navigation.navigate('SignUp')}
          text={i18n.t('signup2')}
          textColor={Color.white}
          bgColor={Color.theme} />
      </View>
      <View style={{ height: 30 }}></View>
      <LinkButton text={i18n.t("didntrecive")}
        btnText={i18n.t("click")}
        onPress={() => alert("sending you shortly")} />
    </View>
  );
};

const styles = StyleSheet.create({
  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Color.bgGray,
    color: Color.darkBGgray,
    fontSize: Sizes.double
    // borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: Color.theme,
  },
});
export default SignUpOtp;
