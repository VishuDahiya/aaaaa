import React from 'react';
import {Login, OtpVerification, Signup} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

export default function (Stack) {
  return (
    <>
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