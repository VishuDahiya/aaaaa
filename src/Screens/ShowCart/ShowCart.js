import {useNavigation} from '@react-navigation/core';
import React, {Component} from 'react';
import {
  Text,
  View,
  Stylesheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import imagePath from '../../constants/imagePath';
import {deleteCart, editCart} from '../../redux/actions/action';
import styles from './styles';
import ShowCartList from '../ShowCartList/ShowCartList';

function ShowCart(props) {
  // let {data} = props;
  // let {image1, name, type, discountPrice, originalPrice, offPrice} = data;
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={imagePath.backButton} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.shoppingTxt}>Shopping List</Text>
      </View>
      <FlatList
        data={props.cardList}
        keyExtractor={item => item.id}
        renderItem={(item, index) => (
          <ShowCartList
            data={item}
            nam={index}
            remove={props.deleteCart}
            quantity={props.quantity}
          />
        )}
      />
    </>
  );
}
const mapStateToProps = state => {
  return {
    cardList: state.cartReducer.cardList,
    quantity: state.cartReducer.quantity,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteCart: index => {
      dispatch(deleteCart(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowCart);
