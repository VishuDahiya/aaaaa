import React from 'react';
import {View, Text, Stylesheet} from 'react-native';
import styles from '../Screens/Login/styles';
export default function ButtonCart() {
  return (
    <>
      <Text
        style={{
          borderWidth: 0,
          textAlign: 'center',
          paddingVertical: 5,
          alignItems: 'center',
          marginHorizontal: 5,
          marginRight: 60,
          marginBottom: 8,
          fontSize: 15,
          marginTop: 8,
          backgroundColor: '#318dc6',
          borderRadius: 3,
        }}>
        Add to cart
      </Text>
    </>
  );
}
