import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import ModalDropdown from 'react-native-modal-dropdown';
import i18n from '../../services/i18n';
import Colors from '../../utility/Color';
import Sizes from '../../utility/Sizes';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../../redux/action';
import RNRestart from 'react-native-restart';
const languages = ['English', 'Hindi', 'Punjabi', 'Bangla', 'Urdu'];
const langTypes = ['en', 'hn', 'pu', 'ba', 'ur'];

const ChangeLanguage = (props) => {
  const [langLabel, setLangLabel] = useState('English');
  const dropdownInput = useRef(null);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.getLanguage);

  useEffect(() => {
    console.log('language 1 is ', language);
    let index = langTypes.indexOf(language);
    console.log('language 2 is ', languages[index]);
    setLangLabel(languages[index]);
  }, [language]);

  return (
    <TouchableOpacity
      style={styles.dropdownContainer}
      onPress={() => {
        dropdownInput.current.show();
      }}>
      <ModalDropdown
        dropdownStyle={{width: '50%'}}
        dropdownTextStyle={{fontSize: Sizes.medium, color: Colors.black}}
        textStyle={{fontSize: Sizes.medium, color: Colors.black}}
        ref={dropdownInput}
        options={languages}
        style={{width: 60}}
        onSelect={(index) => {
          let langIndex = languages.findIndex(
            (lang) => lang === languages[index],
          );
          // setLanguage(langTypes[langIndex]);
          dispatch(Actions.setLanguage(langTypes[langIndex]));
          i18n.locale = langTypes[langIndex];
          console.log('language changed ', language);
          console.log('restarting');
          // RNRestart.Restart();
        }}
        defaultValue={langLabel}
      />
      <Icon
        name="chevron-down"
        size={20}
        color={Colors.black}
        style={{marginStart: 25}}
      />
    </TouchableOpacity>
  );
};

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
  },
});
