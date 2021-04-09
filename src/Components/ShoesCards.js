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
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import ButtonCart from './ButtonCart';
import colors from '../styles/colors';

export default function ShoesCard(props) {
  const navigation = useNavigation();
  const {shoesList, onAdd} = props;

  let _renderItem = ({item}) => {
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
            <ButtonCart
              style={{backgroundColor: colors.btnBBlue}}
              btnText="ADD To CART"
            />
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

const styles = StyleSheet.create({
  body: {
    borderRightWidth: 0.2,
    borderBottomWidth: 0.2,
    marginLeft: 1,
    width: 210,
  },
  image: {
    height: 208,
    width: 208,
  },
  nameTxt: {
    fontWeight: '700',
    fontSize: 15,
    marginTop: 4,
    marginLeft: 8,
    fontFamily: 'sans-serif',
  },
  typeTxt: {
    fontSize: 13,
    marginTop: -1,
    marginLeft: 8,
    color: colors.textGrey,
  },
  discountTxt: {
    fontSize: 14,
    marginTop: 4,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  originalTxt: {
    fontSize: 14,
    marginTop: 4,
    marginLeft: 8,
    color: colors.textGrey,
  },
  offTxt: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 8,
    color: colors.orange,
  },
});
