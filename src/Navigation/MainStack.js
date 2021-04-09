import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {ChatDetails, ProductDetails, ShowCart} from '../Screens';
import LeftDrawer from './Drawer';

import BottomTabNavigator from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={LeftDrawer}
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
      <Stack.Screen
        name={navigationStrings.CHAT_DETAILS}
        component={ChatDetails}
        options={{headerShown: false}}
      />
    </>
  );
}
