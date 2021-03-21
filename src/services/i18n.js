import i18n from 'i18n-js';
import en from '../translations/en.json';
import hn from '../translations/hn.json';
import ur from '../translations/ur.json';
import pu from '../translations/pu.json';
import ba from '../translations/ba.json';
import {store} from '../redux/store';

const state = store.getState();
i18n.locale = state.getLanguage;
i18n.fallbacks = true;
i18n.translations = {en, hn, ur, pu, ba};

export default i18n;
