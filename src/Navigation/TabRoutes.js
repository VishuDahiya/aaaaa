import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import {
  Chart,
  Chat,
  Explore,
  Home,
  Profile,
  Search,
  ShowCart,
} from '../Screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      activeColor="#ff3f6c"
      barStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          textAlign: 'center',
        },
        activeTintColor: 'skyblue',
      }}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={navigationStrings.CHAT}
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
        }}
      />
      <Tab.Screen
        name={navigationStrings.EXPLORE}
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
        }}
      />
      <Tab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name={navigationStrings.CHART}
        component={Chart}
        options={{
          tabBarLabel: 'Chart',
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
