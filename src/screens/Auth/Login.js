import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, I18nManager } from 'react-native';
import Header from '../../components/Header';
import Colors from '../../utility/Color';
import styles from '../../utility/Style';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import { doLogin, setLoading } from '../../redux/action';

import globalStyles from '../../utility/Style';
import Images from '../../utility/Image';
import Constant from '../../utility/Constant';
import * as Navigation from '../../navigation/navigation';
import i18n from 'i18n-js';
import FullButton from '../../components/FullButton';
import en from '../../translations/en.json';
import hn from '../../translations/hn.json';
import ur from '../../translations/ur.json';
import pu from '../../translations/pu.json';
import ba from '../../translations/ba.json';
import { TextRegular, TextSemiBold } from '../../components/TextView';
import TextDevider from '../../components/TextDevider';
import LinkButton from './LinkButton';
import Sizes from '../../utility/Sizes';
// import DropDownPicker from 'react-native-dropdown-picker';
// import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';

const LoginScreen = () => {
  const [language, setLanguage] = useState('en');

  const [rtlLang, setRtlLang] = useState(false);
  i18n.locale = language;
  i18n.fallbacks = true;
  i18n.translations = { en, hn, ur, pu, ba };
  const childRef = useRef();
  const list = useSelector((state) => state.videos.list);
  const dispatch = useDispatch();
  // I18nManager.forceRTL(false);
  // setLanguage("en");

  return (
    <View style={[styles.container, { padding: 14, backgroundColor: Colors.white }]}>
      <View style={{
        flex: 5,
      }}></View>
      <TextDevider text={i18n.t("loginwith")}></TextDevider>
      <View style={{
        flex: 5,
        width: "100%",
        justifyContent: "flex-end"
      }}>
        <LinkButton text={i18n.t("doyouhaveac")}
          btnText={i18n.t("signup2")}
          onPress={() => Navigation.navigate("SignUp")} />
        <View style={{ height: 40 }}></View>
        <View style={{
          width: "100%",
          flexDirection: "row", justifyContent: "center",
          alignItems: "center"
        }}>
          <TextSemiBold text={i18n.t("chooselanguage")} />
          <Picker
            style={{
              height: 30, width: "50%",
              borderWidth: 1,
              borderColor: Colors.black,
              marginStart: 10
            }}
            itemStyle={{ height: 30, backgroundColor: "red" }}
            selectedValue={language}
            onValueChange={(itemValue, itemIndex) =>
              setLanguageApp(itemValue)
            }>
            <Picker.Item label="English" value="en" />
            <Picker.Item label="HIndi" value="hi" />
            <Picker.Item label="Urdu" value="ur" />
            <Picker.Item label="Punjabi" value="pu" />
            <Picker.Item label="Bangla" value="ba" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
