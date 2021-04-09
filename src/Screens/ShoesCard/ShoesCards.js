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
import navigationStrings from '../constants/navigationStrings';
import ButtonCart from './ButtonCart';
import styles from './styles';

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
        onPress={() =>
          navigation.navigate(navigationStrings.PRODUCTDETAILS, {data: item})
        }>
        <View style={styles.body}>
          <Image source={image1} style={styles.image}></Image>

          <Text style={styles.nameTxt}>{name}</Text>
          <Text style={styles.typeTxt}>{type}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.discountTxt}>{discountPrice}</Text>
            <Text style={styles.originalTxt}>{originalPrice}</Text>
            <Text style={styles.offTxt}>{offPrice}</Text>
          </View>
          <TouchableOpacity onPress={() => onAdd(item)}>
            <ButtonCart />
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
