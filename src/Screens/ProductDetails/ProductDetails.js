import {useNavigation} from '@react-navigation/core';
import React, {Component} from 'react';
import {Text, View, Stylesheet, TouchableOpacity, Image} from 'react-native';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

function ProductDetails(props) {
  const navigation = useNavigation();
  let item = props.route.params.data;
  let {image1, name, type, discountPrice, originalPrice, offPrice} = item;
  return (
    <>
      <View style={styles.header}>
        <View style={styles.view1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={imagePath.backButton}
              style={styles.backImage}
              title={'Go back'}
            />
          </TouchableOpacity>
        </View>
        <Image source={image1} style={styles.image} />

        <View style={styles.detailsHeader}>
          <Text style={styles.nameTxt}>{name}</Text>
          <Text style={styles.typeTxt}>{type}</Text>
          <View style={styles.detailsInner}>
            <Text style={styles.discountTxt}>{discountPrice}</Text>
            <Text style={styles.originalTxt}>{originalPrice}</Text>
            <Text style={styles.offTxt}>({offPrice})</Text>
          </View>
          <Text style={styles.inclusiveTxt}>inclusive of all taxes</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerInside}>
          <Text style={styles.sizeTxt}>SELECT SIZE (UK SIZE)</Text>
          <Text style={styles.sizeChartTxt}>SIZE CHART</Text>
        </View>
        <View style={styles.sizeDisplay}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.sizeDisplayTxt}>6</Text>
          </View>
          <View style={{marginLeft: 4, marginRight: 4}}>
            <Text style={styles.sizeDisplayTxt2}>7</Text>
          </View>
          <View>
            <Text style={styles.sizeDisplayTxt3}>8</Text>
          </View>
          <View>
            <Text style={styles.sizeDisplayTxt4}>9</Text>
          </View>
          <View>
            <Text style={styles.sizeDisplayTxt5}>10</Text>
          </View>
        </View>

        <View style={styles.lowerButton}>
          <TouchableOpacity>
            <Text style={styles.wishlist}>WISHLIST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.HOME)}>
            <Text style={styles.addToBag}>ADD TO BAG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default ProductDetails;
