import {useNavigation} from '@react-navigation/core';
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
import {ShowCart} from '..';
import navigationStrings from '../../constant/navigationStrings';
import imagePath from '../../constants/imagePath';

class Cart extends Component {
  render() {
    let item = this.props.route.params.data;

    return (
      <>
        <View
          style={{
            marginTop: 40,
            borderWidth: 0.1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 1,
              backgroundColor: 'white',
              padding: 20,
            }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={imagePath.backButton}
                style={{marginLeft: 10, height: 20, width: 35}}
                title={'Go back'}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: -2,
                marginLeft: 20,
                fontWeight: 'bold',
                color: 'grey',
                fontSize: 18,
              }}>
              SHOPPING BAG
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 50}}>
            {item.map((value, index) => {
              return <ShowCart data={value} />;
            })}
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                borderWidth: 0.1,
                fontSize: 15,
                padding: 13,
                textAlign: 'center',
                backgroundColor: '#ff3f6c',
                marginHorizontal: 20,
                color: 'white',
                bottom: 10,
              }}>
              PLACE ORDER
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
export default Cart;
