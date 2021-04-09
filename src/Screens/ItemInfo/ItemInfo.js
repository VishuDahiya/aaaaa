import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

export default class ItemInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.route.params.productDetails.item)
    let item = this.props.route.params.ProductDetails.item;
    console.log(item);

    let {id, image1, name, type, discountPrice, originalPrice, offPrice} = item;
    return (
      <View style={styles.header}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.view1}>
            <Image style={styles.image} source={{image1}} />
          </View>
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.nameTxt}>{name}</Text>
              <Text style={styles.type.Txt}>{type}</Text>
            </View>
            <View style={styles.view4}>
              <Text style={styles.discountTxt}>Rs.{discountPrice}</Text>
              <Text style={styles.originalTxt}>Rs.{originalPrice}</Text>
              <Text style={styles.offTxt}>({offPrice})</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
