import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {cos} from 'react-native-reanimated';
import imagePath from '../../constants/imagePath';

class ProductDetails extends Component {
  render() {
    let item = this.props.route.params.data;

    let {id, image1, name, type, discountPrice, originalPrice, offPrice} = item;
    return (
      <>
        <View
          style={{
            marginTop: 40,
            marginBottom: 15,
            borderWidth: 0.1,
          }}>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
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
                fontSize: 18,
              }}>
              Roadster
            </Text>
          </View>
          <Image
            source={image1}
            style={{height: 400, width: '100%', resizeMode: 'contain'}}
          />

          <View style={{marginLeft: 18, marginTop: 15}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{name}</Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
                marginBottom: 7,
                marginTop: -2,
              }}>
              {type}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: 10, fontSize: 16}}>
                {discountPrice}
              </Text>
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 16,
                }}>
                {originalPrice}
              </Text>
              <Text style={{fontSize: 16, color: '#E56717'}}>({offPrice})</Text>
            </View>
            <Text style={{color: '#00C78C', fontSize: 13}}>
              inclusive of all taxes
            </Text>
          </View>
        </View>

        <View style={{marginLeft: 18, marginRight: 18}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 17,
            }}>
            <Text style={{color: 'grey', fontSize: 13}}>
              SELECT SIZE (UK SIZE)
            </Text>
            <Text style={{color: '#ff3f6c', fontSize: 13, fontWeight: '700'}}>
              SIZE CHART
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  borderWidth: 1,
                  padding: 5,
                  paddingHorizontal: 13,
                  borderRadius: 90,
                  borderColor: 'black',
                  marginRight: 10,
                  fontSize: 20,
                }}>
                6
              </Text>
              <Text
                style={{
                  marginTop: 8,
                  borderColor: '#E56717',
                  color: '#E56717',
                  borderWidth: 1,
                  fontSize: 10,
                  borderRadius: 3,
                }}>
                5 Left
              </Text>
            </View>
            <View style={{marginLeft: 4, marginRight: 4}}>
              <Text
                style={{
                  borderWidth: 1,
                  padding: 5,
                  paddingHorizontal: 13,
                  borderRadius: 90,
                  borderColor: 'black',
                  marginRight: 10,
                  fontSize: 20,
                }}>
                7
              </Text>
              <Text
                style={{
                  marginTop: 8,
                  borderColor: '#E56717',
                  color: '#E56717',
                  borderWidth: 1,
                  fontSize: 10,
                  borderRadius: 3,
                }}>
                1 Left
              </Text>
            </View>
            <View>
              <Text
                style={{
                  borderWidth: 1,
                  padding: 5,
                  paddingHorizontal: 13,
                  borderRadius: 90,
                  borderColor: 'black',
                  marginRight: 10,
                  fontSize: 20,
                }}>
                8
              </Text>
              <Text
                style={{
                  marginTop: 8,
                  borderColor: '#E56717',
                  color: '#E56717',
                  borderWidth: 1,
                  fontSize: 10,
                  borderRadius: 3,
                  marginLeft: 5,
                }}>
                6 Left
              </Text>
            </View>
            <View>
              <Text
                style={{
                  borderWidth: 1,
                  padding: 5,
                  paddingHorizontal: 13,
                  borderRadius: 90,
                  borderColor: 'black',
                  fontSize: 20,
                }}>
                9
              </Text>
            </View>
            <View>
              <Text
                style={{
                  borderWidth: 1,
                  padding: 5,
                  paddingHorizontal: 8,
                  borderRadius: 90,
                  borderColor: 'black',
                  marginLeft: 10,
                  fontSize: 20,
                }}>
                10
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  borderWidth: 0.2,
                  borderColor: 'grey',
                  fontSize: 15,
                  padding: 10,
                  paddingLeft: 55,
                  width: '140%',
                }}>
                WISHLIST
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Home', {add: item})
              }>
              <Text
                style={{
                  borderWidth: 0.1,
                  fontSize: 15,
                  padding: 10,
                  width: '89%',
                  paddingLeft: 60,
                  backgroundColor: '#ff3f6c',
                  marginLeft: 60,
                  color: 'white',
                }}>
                ADD TO BAG
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
export default ProductDetails;

// componentDidMount() {
//   alert("hello");
//   this.focusListner = this.props.navigation.addListener("focus", () => {
//     if (this.props.route.params && this.props.navigation.params.add) {
//       this.props.navigation.setParams({ add: undefined });
//       this.setState({ counter: this.state.counter + 1 });
//     }
//   });
// }
