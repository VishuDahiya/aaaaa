import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../constant/navigationStrings';

export default function ShoesCard(props) {
  const navigation = useNavigation();
  const {shoesList, onAdd} = props;

  let _renderItem = ({item}) => {
    const {
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
        onPress={() => navigation.navigate('ProductDetails', {data: item})}>
        <View style={{borderRightWidth: 0.2, marginLeft: 1, width: 210}}>
          <Image source={image1} style={{height: 200, width: 208}}></Image>

          <Text
            style={{
              fontWeight: '700',
              fontSize: 13,
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
              fontFamily: 'sans-serif',
            }}>
            {type}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 13,
                marginTop: 4,
                marginLeft: 8,
                fontWeight: 'bold',
              }}>
              {discountPrice}
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 4,
                marginLeft: 8,
                color: 'grey',
              }}>
              {originalPrice}
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 4,
                marginLeft: 8,
                color: '#E56717',
              }}>
              {offPrice}
            </Text>
          </View>
          <TouchableOpacity onPress={() => onAdd(item)}>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 8,
                borderWidth: 1,
                height: 35,
                paddingLeft: 12,
                fontFamily: 'sans-serif',
                paddingTop: 4,
                width: 120,
                borderRadius: 10,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: '#ff3f6c',
                color: 'white',
              }}>
              Add to cart
            </Text>
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
