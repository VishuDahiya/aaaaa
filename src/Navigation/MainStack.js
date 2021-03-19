import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {ProductDetails, ShowCart} from '../Screens';

import BottomTabNavigator from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.PRODUCTDETAILS}
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SHOWCART}
        component={ShowCart}
        options={{headerShown: false}}
      />
    </>
  );
}
