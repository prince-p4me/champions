import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Dashboard/Home';
import Detail from '../screens/Dashboard/Detail';
import LoginScreen from '../screens/Auth/Login';
import OtpScreen from '../screens/Auth/Otp';
import SignUpOtp from '../screens/Auth/SignUpOtp';
import SignUpScreen from '../screens/Auth/SignUp';
import LandingScreen from '../screens/Auth/Landing';
import { useSelector, useDispatch } from 'react-redux';

import i18n from 'i18n-js';
import en from '../translations/en.json';
import hn from '../translations/hn.json';
import ur from '../translations/ur.json';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const [language, setLanguage] = useState('en');
  i18n.locale = language;
  i18n.fallbacks = true;
  i18n.translations = { en, hn, ur };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLogin ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </>
      ) : (
        <>
          {/* <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="SignIn" component={LoginScreen} /> */}
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="Otp2" component={SignUpOtp} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
