import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager } from "react-native";
import Home from '../screens/Dashboard/Home';
import Detail from '../screens/Dashboard/Detail';
import LoginScreen from '../screens/Auth/Login';
import OtpScreen from '../screens/Auth/Otp';
import SignUpOtp from '../screens/Auth/SignUpOtp';
import SignUpScreen from '../screens/Auth/SignUp';
import LandingScreen from '../screens/Auth/Landing';
import { useSelector, useDispatch } from 'react-redux';
import SplashScreen from "react-native-splash-screen";
import ScanQrCode from '../screens/ScanQrCode';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const isRtl = useSelector((state) => state.isRtl);
  const language = useSelector((state) => state.getLanguage);

  useEffect(() => {
    console.log("language is ", language);
    I18nManager.allowRTL(isRtl);
    I18nManager.forceRTL(isRtl);
    SplashScreen.hide();
    console.log("Splashscreen hidden");
  })

  console.log("rendered");
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLogin ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Scan" component={ScanQrCode} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={LoginScreen} />
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Scan" component={ScanQrCode} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="Otp2" component={SignUpOtp} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
