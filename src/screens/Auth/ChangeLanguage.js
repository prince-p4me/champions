import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, I18nManager } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import ModalDropdown from 'react-native-modal-dropdown';
import en from '../../translations/en.json';
import hn from '../../translations/hn.json';
import ur from '../../translations/ur.json';
import pu from '../../translations/pu.json';
import ba from '../../translations/ba.json';
import i18n from 'i18n-js';
import Colors from '../../utility/Color';
import Sizes from '../../utility/Sizes';

const languages = [
  'English',
  'Hindi',
  'Punjabi',
  'Bangla',
  'Urdu',
];

const ChangeLanguage = props => {
  const [language, setLanguage] = useState('en');
  const [langLabel, setLangLabel] = useState('English');
  const dropdownInput = useRef(null);

  i18n.locale = language;
  i18n.fallbacks = true;
  i18n.translations = { en, hn, ur, pu, ba };

  return (
    <TouchableOpacity style={styles.dropdownContainer}
      onPress={() => {
        dropdownInput.current.show();
      }}>
      <ModalDropdown
        dropdownStyle={{ width: "50%" }}
        dropdownTextStyle={{ fontSize: Sizes.medium, color: Colors.black }}
        textStyle={{ fontSize: Sizes.medium, color: Colors.black }}
        ref={dropdownInput}
        options={languages}
        style={{ width: 60 }}
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
        style={{ marginStart: 25 }}
      />
    </TouchableOpacity>
  )
}

export default ChangeLanguage;

const styles = StyleSheet.create({
  dropdownContainer: {
    height: 35,
    borderColor: Colors.black,
    borderWidth: 1,
    paddingStart: 17,
    paddingEnd: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})