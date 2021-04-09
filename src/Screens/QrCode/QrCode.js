import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';

const {width} = Dimensions.get('window');
export default class QrCode extends Component {
  getDataURL() {
    this.svg.toDataURL(this.callback);
  }

  callback(dataURL) {
    console.log(dataURL);
  }

  render() {
    return (
      <View style={styles.qr}>
        <Text style={styles.text}>QR Code </Text>
        <QRCode
          size={300}
          value="https://www.qrcode-monkey.com"
          getRef={c => (this.svg = c)}
        />
      </View>
    );
  }
}
