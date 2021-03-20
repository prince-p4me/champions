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
import pu from '../../translations/pu.json';
import ba from '../../translations/ba.json';
import {TextRegular, TextSemiBold} from '../../components/TextView';
import TextDevider from '../../components/TextDevider';
import LinkButton from './LinkButton';
import Sizes from '../../utility/Sizes';
// import DropDownPicker from 'react-native-dropdown-picker';
// import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import ModalDropdown from 'react-native-modal-dropdown';

const languages = [
  // {
  //   label: 'English',
  //   value: 'en',
  // },
  // {
  //   label: 'Hindi',
  //   value: 'hi',
  // },
  // {
  //   label: 'Punjabi',
  //   value: 'pu',
  // },
  // {
  //   label: 'Bangla',
  //   value: 'ba',
  // },
  // {
  //   label: 'Urdu',
  //   value: 'ur',
  // },
  'English',
  'Hindi',
  'Punjabi',
  'Bangla',
  'Urdu',
];
const LoginScreen = () => {
  const [language, setLanguage] = useState('en');
  const [langLabel, setLangLabel] = useState('English');

  const [rtlLang, setRtlLang] = useState(false);
  const dropdownInput = useRef(null);

  i18n.locale = language;
  i18n.fallbacks = true;
  i18n.translations = {en, hn, ur, pu, ba};

  return (
    <View
      style={[styles.container, {padding: 14, backgroundColor: Colors.white}]}>
      <View
        style={{
          flex: 5,
        }}></View>
      <TextDevider text={i18n.t('loginwith')}></TextDevider>

      {/* <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextSemiBold text={i18n.t('chooselanguage')} />
        <ModalDropdown options={['option 1', 'option 2']} /> */}

      {/* <DropDownPicker
          items={[
            {
              label: 'English',
              value: 'en',
            },
            {
              label: 'Hindi',
              value: 'hi',
            },
            {
              label: 'Punjabi',
              value: 'pu',
            },
            {
              label: 'Bangla',
              value: 'ba',
            },
            {
              label: 'Urdu',
              value: 'ur',
            },
          ]}
          dropDownMaxHeight={300}
          defaultValue={language}
          // containerStyle={{height: 50, width: 90}}
          containerStyle={{width: 140, zIndex: 60, height: 50}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={
            {
              // justifyContent: 'flex-start',
            }
          }
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(item) => setLanguage(item.value)}
        /> */}
      {/* </View> */}
      <View
        style={{
          flex: 5,
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <LinkButton
          text={i18n.t('doyouhaveac')}
          btnText={i18n.t('signup2')}
          onPress={() => Navigation.navigate('SignUp')}
        />
        <View style={{height: 40}}></View>

        {/* <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TextSemiBold text={i18n.t('chooselanguage')} />
          <ModalDropdown options={['option 1', 'option 2']} />
        </View> */}

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

          <TouchableOpacity
            onPress={() => {
              // this.refs.dropdown.select(0);
              // dropdownInput.dropdown.select(1);
            }}>
            <View
              style={{
                borderColor: Colors.bgGray,
                borderWidth: 2,
                paddingStart: 17,
                paddingEnd: 17,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ModalDropdown
                ref={dropdownInput}
                options={languages}
                style={{width: 60}}
                onSelect={(index) => {
                  let langTypes = ['en', 'hn', 'pu', 'ba', 'ur'];
                  let langIndex = languages.findIndex(
                    (lang) => lang === languages[index],
                  );
                  setLanguage(langTypes[langIndex]);
                  setLangLabel(languages[index]);
                }}
                defaultValue={langLabel}
              />
              <Icon
                name="chevron-down"
                size={20}
                color={Colors.black}
                style={{marginStart: 25}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
