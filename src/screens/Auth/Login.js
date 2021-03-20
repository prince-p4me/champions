import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, I18nManager} from 'react-native';
import Header from '../../components/Header';
import Colors from '../../utility/Color';
import styles from '../../utility/Style';
import {doLogin, setLoading} from '../../redux/action';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../components/Loader';
import * as Navigation from '../../navigation/navigation';

import i18n from 'i18n-js';
import en from '../../translations/en.json';
import hn from '../../translations/hn.json';
import ur from '../../translations/ur.json';

const LoginScreen = () => {
  const setLanguageApp = (language) => {
    I18nManager.forceRTL(false);
    if (language == 'ur') {
      I18nManager.forceRTL(true);
    }
    setLanguage(language);
  };
  const childRef = useRef();
  const [language, setLanguage] = useState('en');
  i18n.locale = language;
  i18n.fallbacks = true;
  i18n.translations = {en, hn, ur};
  const list = useSelector((state) => state.videos.list);
  const dispatch = useDispatch();

  console.log(i18n.t('getstarttedtext'));
  return (
    <View style={styles.container}>
      <Header title={i18n.t('login')} />
      <View style={[styles.center, {justifyContent: 'center'}]}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.theme,
            padding: 10,
          }}
          onPress={() => dispatch(doLogin())}>
          <Text style={{color: 'white'}}>{i18n.t('login')}</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>{i18n.t('getstarttedtext')}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.theme,
              padding: 10,
              marginRight: 10,
            }}
            onPress={() => setLanguageApp('hn')}>
            <Text style={{color: 'white'}}>Hindi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.theme,
              padding: 10,
              marginRight: 10,
            }}
            onPress={() => setLanguageApp('en')}>
            <Text style={{color: 'white'}}>English</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.theme,
              padding: 10,
            }}
            onPress={() => setLanguageApp('ur')}>
            <Text style={{color: 'white'}}>URDU</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
