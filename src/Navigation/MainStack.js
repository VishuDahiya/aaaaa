import React from 'react';

import navigationStrings from '../constants/navigationStrings';
import {Home} from '../Screens';

import BottomTabNavigator from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </>
  );
}
