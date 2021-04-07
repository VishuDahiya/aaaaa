import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import colors from '../styles/colors';

export default function ButtonCart(props) {
  const {style, btnText} = props
  return (
    <>
    <TouchableOpacity style={{...styles.btnStyle, ...style}}>
      <Text>
       {btnText}
       
      </Text>
      
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
          borderWidth: 0,
          textAlign: 'center',
          paddingVertical: 5,
          alignItems: 'center',
          marginHorizontal: 5,
          marginRight: 60,
          marginBottom: 8,
          fontSize: 15,
          marginTop: 8,
          borderRadius: 3,
          backgroundColor:colors.black,
  }
})