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
import styles from './styles';

export default class Order extends Component {
  // share a custom message

  render() {
    return (
      <>
        <View style={styles.heading}>
          <View style={styles.heading1}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={imagePath.backButton}
                style={styles.headingImage}
                title={'Go back'}
              />
            </TouchableOpacity>
            <Text style={styles.confirmTxt}>CONFIRM ORDER</Text>
          </View>
        </View>

        <View style={style.container}>
          <View style={style.summary}>
            <Text style={{color: 'green'}}>--------------------</Text>
            <View>
              <Text style={styles.bagTxt}>Bag</Text>
            </View>
            <Text style={{color: 'green', marginLeft: -100}}>
              --------------------
            </Text>
            <View style={style.summaryContainer}>
              <Text style={styles.paymentTxt}>Payment</Text>
            </View>
          </View>

          <View style={style.body}>
            <Text>Abc </Text>
            <Text>CodeBrew-Labs, Sector 28 B</Text>
            <Text>Chandigarh - 160019</Text>
            <Text>9846846846</Text>
            <TouchableOpacity style={changeTxt}>
              <Text style={styles.addressTxt}>CHANGE OR ADD ADDRESS</Text>
            </TouchableOpacity>
          </View>

          <View style={style.body}>
            <Text style={style.header}>Price Detail</Text>

            <View style={style.detail}>
              <Text>Price</Text>
              <Text>1599</Text>
            </View>
            <View style={style.detail}>
              <Text>Discount</Text>
              <Text style={style.pink}>1000</Text>
            </View>
            <View style={style.detail}>
              <Text>Delivery Charges</Text>
              <Text>Free</Text>
            </View>
            <View style={[style.detail, {paddingVertical: 20}]}>
              <Text>Amount Payable</Text>
              <Text>599</Text>
            </View>
            <TouchableOpacity style={styles.continueTouch}>
              <Text style={styles.continueTxt}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
