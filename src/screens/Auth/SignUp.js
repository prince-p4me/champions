import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  I18nManager,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/Header';
import Colors from '../../utility/Color';
import styles from '../../utility/Style';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../components/Loader';
import {doLogin, setLoading} from '../../redux/action';

import Images from '../../utility/Image';
import Constant from '../../utility/Constant';
import * as Navigation from '../../navigation/navigation';
import i18n from '../../services/i18n';
import FullButton from '../../components/FullButton';

import {TextRegular, TextBold, TextSemiBold} from '../../components/TextView';
import TextDevider from '../../components/TextDevider';
import LinkButton from './LinkButton';
import Sizes from '../../utility/Sizes';
import ChangeLanguage from './ChangeLanguage';

const SignupScreen = () => {
  const [mobile, setMobile] = useState('');
  let language = useSelector((state) => state.getLanguage);

  useEffect(() => {}, [language]);
  return (
    <View
      style={[styles.container, {padding: 14, backgroundColor: Colors.white}]}>
      <SafeAreaView style={{backgroundColor: Colors.theme}}></SafeAreaView>
      <KeyboardAvoidingView
        behavior="position"
        style={{
          flex: 8,
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingTop: 30,
          // backgroundColor: "red"
        }}>
        <TextBold
          text={i18n.t('signup2')}
          style={{textAlign: 'center', fontSize: Sizes.extraDouble}}
        />

        <TextRegular
          text={i18n.t('Signuplongtext')}
          style={{textAlign: 'center', fontSize: Sizes.regular, marginTop: 30}}
        />
        <View style={[styles.inputBox, {paddingStart: 20}]}>
          {/* <View style={styles.dialCode}>
                        <TextSemiBold text="+91-" />
                    </View> */}
          <TextInput
            style={{flex: 1, padding: 7}}
            placeholder="Name"
            keyboardType="default"
            value={mobile}
            onChangeText={(mobile) => setMobile(mobile)}
            maxLength={10}
            returnKeyType="next"></TextInput>
        </View>
        <View style={[styles.inputBox, {marginTop: 15}]}>
          <View style={styles.dialCode}>
            <TextSemiBold text="+91-" />
          </View>
          <TextInput
            style={{flex: 1, padding: 7}}
            placeholder="Enter your 10 digits mobile number"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={(mobile) => setMobile(mobile)}
            maxLength={10}></TextInput>
        </View>
        <FullButton
          btnStyle={{width: Constant.width - 64, marginTop: 50}}
          onPress={() => {
            // Navigation.navigate('SignUp')
            alert('sending otp');
          }}
          text={i18n.t('Sendotp')}
          textColor={Colors.white}
          bgColor={Colors.theme}
        />
      </KeyboardAvoidingView>

      {/* <TextDevider text={i18n.t('signupwith')}></TextDevider> */}

      <View
        style={{
          flex: 3,
          // backgroundColor: "red",
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <LinkButton
          text={i18n.t('alreay')}
          btnText={i18n.t('login')}
          onPress={() => Navigation.navigate('SignUp')}
        />
        <View style={{height: 40}}></View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TextSemiBold
            text={i18n.t('chooselanguage')}
            style={{marginEnd: 7}}
          />
          <ChangeLanguage />
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
