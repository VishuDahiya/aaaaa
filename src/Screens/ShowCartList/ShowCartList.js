import React from 'react';
import {Text, View, Stylesheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {editCart} from '../../redux/actions/action';
import styles from './styles';

function ShowCartList(props) {
  let {remove, quantity, nam} = props;
  //  alert(nam)
  let {
    id,
    name,
    image1,
    type,
    discountPrice,
    offPrice,
    originalPrice,
    qty,
  } = props.data.item.value;
  console.log(props.data.item.value);
  //  alert(id)
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image source={image1} style={styles.image} />
        <View style={styles.contentTxt}>
          <Text style={styles.nameTxt}>{name}</Text>
          <Text style={styles.typeTxt}>{type}</Text>
          <View style={styles.discountOriginalTxt}>
            <Text style={styles.discountTxt}>{discountPrice}</Text>
            <Text style={styles.originalTxt}>{originalPrice}</Text>
          </View>
          <Text style={styles.offTxt}>{offPrice}</Text>
          <View style={styles.plusMinusStyling}>
            <TouchableOpacity onPress={() => props.editCart(id)}>
              <Text style={styles.plusTxt}>+</Text>
            </TouchableOpacity>
            <Text style={styles.qtyTxt}>Qty :{qty}</Text>
            <TouchableOpacity>
              <Text style={styles.minusTxt}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttonStyling}>
        <TouchableOpacity>
          <Text style={styles.wishlistTxt}>WISHLIST</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => remove(id)}>
          <Text style={styles.removeTxt}>REMOVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    editCart: index => {
      dispatch(editCart(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCartList);
