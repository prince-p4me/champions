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
import Loader from '../../components/Loader';
import * as Actions from '../../redux/action';

import Images from '../../utility/Image';
import Constant from '../../utility/Constant';
import * as Navigation from '../../navigation/navigation';
import I18n from '../../services/i18n';
import i18n from '../../services/i18n';
import FullButton from '../../components/FullButton';

import {TextRegular, TextBold, TextSemiBold} from '../../components/TextView';
import TextDevider from '../../components/TextDevider';
import LinkButton from './LinkButton';
import Sizes from '../../utility/Sizes';
import ChangeLanguage from './ChangeLanguage';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';

const SignupScreen = () => {
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  let language = useSelector((state) => state.getLanguage);

  const forceUpdate = React.useReducer((bool) => !bool)[1];

  useEffect(() => {
    setTimeout(() => {
      I18n.locale = language;
      forceUpdate();
    }, 10);
  }, [language]);

  const signUp = () => {
    if (!mobile || mobile.length < 10) {
      Toast.showWithGravity(
        'Enter valid mobile number',
        Toast.SHORT,
        Toast.BOTTOM,
      );
      return;
    }
    if (!name) {
      Toast.showWithGravity('Enter your name', Toast.SHORT, Toast.BOTTOM);
      return;
    }
    dispatch(Actions.signUp({name, mobile, type: 'mobile'}));
  };

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
          text={I18n.t('signup2')}
          style={{textAlign: 'center', fontSize: Sizes.extraDouble}}
        />

        <TextRegular
          text={I18n.t('Signuplongtext')}
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
            value={name}
            onChangeText={(name) => setName(name)}
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
            returnKeyLabel="Done"
            returnKeyType="done"
            onSubmitEditing={signUp}
            onChangeText={(mobile) => setMobile(mobile)}
            maxLength={10}></TextInput>
        </View>
        <FullButton
          btnStyle={{width: Constant.width - 64, marginTop: 50}}
          onPress={signUp}
          text={i18n.t('Sendotp')}
          textColor={Colors.white}
          bgColor={Colors.theme}
        />
      </KeyboardAvoidingView>

      {/* <TextDevider text={I18n.t('signupwith')}></TextDevider> */}

      <View
        style={{
          flex: 3,
          // backgroundColor: "red",
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <LinkButton
          text={I18n.t('alreay')}
          btnText={I18n.t('login')}
          onPress={() => Navigation.goBack()}
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
