import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import {Categories, Explore, Home, Profile} from '../Screens';
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
        name={navigationStrings.CATEGORIES}
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.EXPLORE}
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',

          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home" color="black" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
