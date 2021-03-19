import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import {Account, Home, Scan, Sports} from '../Screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      activeColor="#ff3f6c"
      barStyle={{
        backgroundColor: 'white',
      }}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.ACCOUNT}
        component={Account}
        options={{
          tabBarLabel: 'Sports',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.SCAN}
        component={Scan}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.ACCOUNT}
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home" color="black" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
