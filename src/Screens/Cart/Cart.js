import {useNavigation} from '@react-navigation/core';
import {HeaderHeightContext} from '@react-navigation/stack';
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {cos} from 'react-native-reanimated';
import imagePath from '../../constants/imagePath';
import ShowCart from '../ShowCart/ShowCart';
import styles from './styles';

class Cart extends Component {
  render() {
    let item = this.props.route.params.data;

    return (
      <>
        <View style={styles.header}>
          <View style={styles.heading}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={imagePath.backButton}
                style={backImage}
                title={'Go back'}
              />
            </TouchableOpacity>
            <Text style={styles.headingText}>SHOPPING BAG</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {item.map((value, index) => {
              return <ShowCart data={value} />;
            })}
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity>
            <Text style={styles.headingText1}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
export default Cart;
