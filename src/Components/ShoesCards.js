import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import ButtonCart from './ButtonCart';
import colors from '../styles/colors';

export default function ShoesCard(props) {
  const navigation = useNavigation();
  const { shoesList, onAdd } = props;

  let _renderItem = ({ item }) => {
    const {
      qty,
      id,
      image1,
      name,
      type,
      discountPrice,
      originalPrice,
      offPrice,
    } = item;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(navigationStrings.PRODUCTDETAILS, { data: item })
        }>
        <View
          style={{
            borderRightWidth: 0.2,
            borderBottomWidth: 0.2,
            marginLeft: 1,
            width: 210,
          }}>
          <Image source={image1} style={{ height: 208, width: 208 }}></Image>

          <Text
            style={{
              fontWeight: '700',
              fontSize: 15,
              marginTop: 4,
              marginLeft: 8,
              fontFamily: 'sans-serif',
            }}>
            {name}
          </Text>

          <Text
            style={{
              fontSize: 13,
              marginTop: -1,
              marginLeft: 8,
              color: 'grey',
            }}>
            {type}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 4,
                marginLeft: 8,
                fontWeight: 'bold',
              }}>
              {discountPrice}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 4,
                marginLeft: 8,
                color: 'grey',
              }}>
              {originalPrice}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 5,
                marginLeft: 8,
                color: '#E56717',
              }}>
              {offPrice}
            </Text>
          </View>
          <TouchableOpacity onPress={() => onAdd(item)}>
            <ButtonCart style={{ backgroundColor: colors.btnBBlue }} btnText='ADD To CART' />

          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={shoesList}
      numColumns={2}
      renderItem={_renderItem}
      keyExtractor={item => item.id}
    />
  );
}
