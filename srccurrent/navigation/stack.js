import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {I18nManager} from 'react-native';
import Home from '../screens/Dashboard/Home';
import LoginScreen from '../screens/Auth/Login';
import OtpScreen from '../screens/Auth/Otp';
import SignUpScreen from '../screens/Auth/SignUp';
import LandingScreen from '../screens/Auth/Landing';
import {useSelector, useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import ScanQrCode from '../screens/Dashboard/ScanQrCode';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const user = useSelector((state) => state.getUser);
  const isRtl = useSelector((state) => state.isRtl);
  const language = useSelector((state) => state.getLanguage);
  // const isRtl = true;

  useEffect(() => {
    console.log('language is ', language);
    // I18n.locale = language;
    I18nManager.allowRTL(isRtl);
    I18nManager.forceRTL(isRtl);
    SplashScreen.hide();
    console.log('Splashscreen hidden');
  }, [language]);

  console.log('rendered');
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user && user.id ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Scan" component={ScanQrCode} />
        </>
      ) : (
        <>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="SignIn" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
