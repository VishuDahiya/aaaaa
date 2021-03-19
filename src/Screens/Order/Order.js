import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  Share,
  SafeAreaView,
} from 'react-native';
import imagePath from '../../constants/imagePath';

export default class Order extends Component {
  // share a custom message

  render() {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 10,
            borderColor: 'black',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 0,
              backgroundColor: 'white',
              padding: 20,
              width: '100%',
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
              CONFIRM ORDER
            </Text>
          </View>
        </View>

        <View style={style.container}>
          <View style={style.summary}>
            <Text style={{color: 'green'}}>--------------------</Text>
            <View>
              <Text
                style={{
                  marginLeft: -76,
                  marginTop: 5,
                  fontSize: 10,
                  color: 'green',
                }}>
                Bag
              </Text>
            </View>
            <Text style={{color: 'green', marginLeft: -100}}>
              --------------------
            </Text>
            <View style={style.summaryContainer}>
              <Text
                style={{
                  marginLeft: -110,
                  marginTop: -18,
                  fontSize: 10,
                  color: 'green',
                }}>
                Payment
              </Text>
            </View>
          </View>

          <View style={style.body}>
            <Text style={{fontSize: 17, marginBottom: 1}}>Vishal Dahiya</Text>
            <Text>CodeBrew-Labs, Sector 28 B</Text>
            <Text>Chandigarh - 160019</Text>
            <Text style={{marginVertical: 10, marginTop: 0}}>9779967444</Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                marginBottom: 8,
                height: 40,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  color: 'black',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                CHANGE OR ADD ADDRESS
              </Text>
            </TouchableOpacity>
          </View>

          <View style={style.body}>
            <Text style={style.header}>Price Detail</Text>

            <View style={style.detail}>
              <Text>Price</Text>
              <Text style={{fontWeight: 'bold'}}>1599</Text>
            </View>
            <View style={style.detail}>
              <Text>Discount</Text>
              <Text style={style.pink}>1000</Text>
            </View>
            <View style={style.detail}>
              <Text>Delivery Charges</Text>
              <Text style={{fontWeight: 'bold'}}>Free</Text>
            </View>
            <View style={[style.detail, {paddingVertical: 20}]}>
              <Text style={{fontWeight: 'bold'}}>Amount Payable</Text>
              <Text style={{fontWeight: 'bold', color: '#ff3f6c'}}>599</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#ff3f6c',
                marginBottom: 8,
                height: 40,
                marginHorizontal: 25,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'white',
                  justifyContent: 'center',
                  padding: 5,
                }}>
                CONTINUE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    marginTop: -9,
    backgroundColor: 'lightgrey',
    justifyContent: 'space-evenly',
  },

  body: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  header: {
    color: 'grey',
    fontWeight: 'bold',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'whitesmoke',
  },
  detail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  pink: {
    fontWeight: 'bold',
    color: '#ff3f6c',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    // height: '50%'
  },
  contactContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
