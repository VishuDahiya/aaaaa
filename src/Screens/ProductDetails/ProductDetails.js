import { useNavigation } from '@react-navigation/core';
import React, { Component } from 'react';
import { Text, View, Stylesheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ButtonCart from '../../Components/ButtonCart';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';

function ProductDetails(props) {
  const navigation = useNavigation();
  let item = props.route.params.data;
  let { image1, name, type, discountPrice, originalPrice, offPrice } = item;
  return (
    <>
      <View
        style={{
          marginTop: 15,
          marginBottom: 15,
          borderWidth: 0.1,
        }}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={imagePath.backButton}
              style={{ marginLeft: 10, height: 20, width: 35 }}
              title={'Go back'}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={image1}
          style={{ height: 400, width: '100%', resizeMode: 'contain' }}
        />

        <View style={{ marginLeft: 18, marginTop: 15 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{name}</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 15,
              marginBottom: 7,
              marginTop: -2,
            }}>
            {type}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginRight: 10, fontSize: 16 }}>{discountPrice}</Text>
            <Text
              style={{
                marginRight: 10,
                fontSize: 16,
              }}>
              {originalPrice}
            </Text>
            <Text style={{ fontSize: 16, color: '#E56717' }}>({offPrice})</Text>
          </View>
          <Text style={{ color: '#00C78C', fontSize: 13 }}>
            inclusive of all taxes
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 18, marginRight: 18 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 17,
          }}>
          <Text style={{ color: 'grey', fontSize: 13 }}>
            SELECT SIZE (UK SIZE)
          </Text>
          <Text style={{ color: '#318dc6', fontSize: 13, fontWeight: '700' }}>
            SIZE CHART
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                borderWidth: 1,
                padding: 5,
                paddingHorizontal: 13,
                borderRadius: 90,
                borderColor: 'black',
                marginRight: 10,
                fontSize: 20,
              }}>
              6
            </Text>
          </View>
          <View style={{ marginLeft: 4, marginRight: 4 }}>
            <Text
              style={{
                borderWidth: 1,
                padding: 5,
                paddingHorizontal: 13,
                borderRadius: 90,
                borderColor: 'black',
                marginRight: 10,
                fontSize: 20,
              }}>
              7
            </Text>
          </View>
          <View>
            <Text
              style={{
                borderWidth: 1,
                padding: 5,
                paddingHorizontal: 13,
                borderRadius: 90,
                borderColor: 'black',
                marginRight: 10,
                fontSize: 20,
              }}>
              8
            </Text>
          </View>
          <View>
            <Text
              style={{
                borderWidth: 1,
                padding: 5,
                paddingHorizontal: 13,
                borderRadius: 90,
                borderColor: 'black',
                fontSize: 20,
              }}>
              9
            </Text>
          </View>
          <View>
            <Text
              style={{
                borderWidth: 1,
                padding: 5,
                paddingHorizontal: 8,
                borderRadius: 90,
                borderColor: 'black',
                marginLeft: 10,
                fontSize: 20,
              }}>
              10
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                borderWidth: 0.2,
                borderColor: 'grey',
                fontSize: 15,
                padding: 10,
                paddingLeft: 55,
                width: '140%',
              }}>
              WISHLIST
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.HOME)}>
            <Text
              style={{
                borderWidth: 0.1,
                fontSize: 15,
                padding: 10,
                width: '89%',
                paddingLeft: 60,
                backgroundColor: '#318dc6',
                marginLeft: 60,
                color: 'white',
              }}>
              ADD TO BAG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default ProductDetails;
