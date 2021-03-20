import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, I18nManager } from 'react-native';
import Header from '../../components/Header';
import Colors from '../../utility/Color';
import styles from '../../utility/Style';
import { doLogin, setLoading } from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';

import globalStyles from '../../utility/Style';
import Images from '../../utility/Image';
import Constant from '../../utility/Constant';
import * as Navigation from '../../navigation/navigation';
import i18n from 'i18n-js';
import FullButton from '../../components/FullButton';
import en from '../../translations/en.json';
import hn from '../../translations/hn.json';
import ur from '../../translations/ur.json';
import { TextRegular } from '../../components/TextView';
import TextDevider from '../../components/TextDevider';

const LoginScreen = () => {
  const [language, setLanguage] = useState('en');
  i18n.locale = language;
  i18n.fallbacks = true;
  i18n.translations = { en, hn, ur };
  const childRef = useRef();
  const list = useSelector((state) => state.videos.list);
  const dispatch = useDispatch();

  const setLanguageApp = (language) => {
    I18nManager.forceRTL(false);
    if (language == 'ur') {
      I18nManager.forceRTL(true);
    }
    setLanguage(language);
  };

  return (
    <View style={[styles.container, { padding: 14, backgroundColor: Colors.white }]}>
      <View style={{
        flex: 5,
      }}></View>
      <TextDevider text={i18n.t("loginwith")}></TextDevider>
      <View style={{
        flex: 5,
        // backgroundColor: "red",
        width: "100%",
        justifyContent: "flex-end"
      }}>
        <TouchableOpacity style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}></TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
