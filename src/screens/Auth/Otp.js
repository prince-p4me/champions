import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import GlobalStyles from '../../utility/Style';
import * as Navigation from '../../navigation/navigation';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Color from '../../utility/Color';
import i18n from '../../services/i18n';
import Sizes from '../../utility/Sizes';
import FullButton from '../../components/FullButton';
import { TextBold, TextRegular } from '../../components/TextView';
import LinkButton from './LinkButton';
import * as Actions from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const OtpScreen = props => {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const { mobile, login: isLogin, name } = props.route.params;
  console.log("mobile", mobile);
  console.log("isLogin", isLogin);
  console.log("name", name);

  return (
    <View style={[GlobalStyles.container, { paddingVertical: 30 }]}>
      <SafeAreaView style={{ backgroundColor: Colors.theme }}></SafeAreaView>
      <TextBold
        text={i18n.t('otplongtext')}
        style={{ textAlign: 'center', fontSize: Sizes.extraDouble }}
      />

      <TextRegular
        text={i18n.t(isLogin ? 'otplongtext2' : 'otplongtext3')}
        style={{ textAlign: 'center', fontSize: Sizes.regular, marginTop: 30 }}
      />
      <OTPInputView
        style={{ width: '80%', height: 200 }}
        pinCount={4}
        autoFocusOnLoad
        placeholderCharacter="*"
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => setCode(code)}
      />
      <View style={{ width: '100%', paddingHorizontal: '10%' }}>
        <FullButton
          onPress={() => {
            // Navigation.navigate('SignUp');
            const obj = {
              mobile: isLogin ? mobile : mobile.mobile,
              name: isLogin ? name : mobile.name,
              otp: code
            };
            dispatch(Actions.verifyOtp(obj));
          }}
          text={i18n.t(isLogin ? 'login' : 'signup2')}
          textColor={Color.white}
          bgColor={Color.theme}
        />
      </View>
      <View style={{ height: 30 }}></View>
      <LinkButton
        text={i18n.t('didntrecive')}
        btnText={i18n.t('click')}
        onPress={() => {
          let obj = {
            mobile,
          };
          dispatch(Actions.resendOtp(isLogin ? obj : mobile));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Color.bgGray,
    color: Color.darkBGgray,
    fontSize: Sizes.double,
    // borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: Color.theme,
  },
});
export default OtpScreen;
