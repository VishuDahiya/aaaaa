import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';

export default class ItemInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.route.params.productDetails.item)
    let item = this.props.route.params.productDetails.item;
    console.log(item);

    let {id, image1, name, type, discountPrice, originalPrice, offPrice} = item;
    return (
      <View style={{flex: 1, display: 'flex', marginTop: 30}}>
        <ScrollView style={{height: 300, padding: 5}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{height: 350, width: 350, borderWidth: 1}}
              source={{image1}}
            />
          </View>
          <View style={{backgroundColor: 'white', paddingBottom: 10}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 10,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
              <Text style={{color: 'grey', marginLeft: 5}}>{type}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                Rs.{discountPrice}
              </Text>
              <Text style={{marginLeft: 10, color: 'gray'}}>
                Rs.{originalPrice}
              </Text>
              <Text style={{marginLeft: 10, color: '#e0436c'}}>
                ({offPrice})
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
