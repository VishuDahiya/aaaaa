import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import { ChatDetails, ImageZoom1, Profile, QrCode, Search } from '../Screens';
import BottomTabNavigator from './TabRoutes';
import colors from '../styles/colors';

const Drawer = createDrawerNavigator();

export default function LeftDrawer() {

    return (

        <Drawer.Navigator drawerStyle={{
            backgroundColor: colors.lightGreyBg,
            width: 195,

        }}
        >
            <Drawer.Screen name={navigationStrings.HOME}
                component={BottomTabNavigator} />
            <Drawer.Screen name={navigationStrings.SEARCH}
                component={Search} />
            <Drawer.Screen name={navigationStrings.PROFILE}
                component={Profile} />
            <Drawer.Screen name={navigationStrings.QR_CODE}
                component={QrCode} />
            <Drawer.Screen name={navigationStrings.IMAGE_ZOOM}
                component={ImageZoom1} />

        </Drawer.Navigator>

    )
}