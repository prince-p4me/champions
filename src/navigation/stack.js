import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Dashboard/Home';
import Detail from '../screens/Dashboard/Detail';
import LoginScreen from '../screens/Auth/Login';
import OtpScreen from '../screens/Auth/Otp';
import SignUpScreen from '../screens/Auth/SignUp';
import { useSelector, useDispatch } from "react-redux";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const isLogin = useSelector(state => state.isLogin);

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
          <Stack.Screen name="SignIn" component={LoginScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}

    </Stack.Navigator>
  );
};

export default StackNavigator;
