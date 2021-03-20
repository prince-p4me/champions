import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, I18nManager} from 'react-native';
import Header from '../../components/Header';
import Colors from '../../utility/Color';
import styles from '../../utility/Style';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../components/Loader';
import {doLogin, setLoading} from '../../redux/action';

import globalStyles from '../../utility/Style';
import Images from '../../utility/Image';
import Constant from '../../utility/Constant';
import * as Navigation from '../../navigation/navigation';
import i18n from 'i18n-js';
import FullButton from '../../components/FullButton';
import en from '../../translations/en.json';
import hn from '../../translations/hn.json';
import ur from '../../translations/ur.json';

const LoginScreen = () => {
  const childRef = useRef();
  const [language, setLanguage] = useState('en');

  const [rtlLang, setRtlLang] = useState(false);
  i18n.locale = language;
  i18n.fallbacks = true;
  i18n.translations = {en, hn, ur};
  I18nManager.forceRTL(rtlLang);
  const list = useSelector((state) => state.videos.list);
  const dispatch = useDispatch();

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
            onPress={() => {
              setLanguage('hn');
              setRtlLang(false);
            }}>
            <Text style={{color: 'white'}}>Hindi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.theme,
              padding: 10,
              marginRight: 10,
            }}
            onPress={() => {
              setLanguage('en');
              setRtlLang(false);
            }}>
            <Text style={{color: 'white'}}>English</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.theme,
              padding: 10,
            }}
            onPress={() => {
              setLanguage('ur');
              setRtlLang(true);
            }}>
            <Text style={{color: 'white'}}>URDU</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
