import React from 'react';
import {
  Login,
  OtpVerification,
  OuterScreen,
  Signup,
  OuterSliderScreen,
} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.OUTER_SLIDER_SCREEN}
        component={OuterSliderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.OUTER_SCREEN}
        component={OuterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{headerShown: false}}
      />
    </>
  );
}
