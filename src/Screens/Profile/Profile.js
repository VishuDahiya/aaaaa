import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button, Linking} from 'react-native';
import actions from '../../redux/actions';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './styles';

export default class Profile extends Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  render() {
    return (
      <View style={styles.body}>
        <View>
          <QRCodeScanner
            onRead={this.onSuccess}
            flashMode={RNCamera.Constants.FlashMode.auto}
            topContent={
              <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
                on your computer and scan the QR code.
              </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            }
            fadeIn={true}
            cameraStyle={styles.cameraStyling}
            cameraProps
          />
          <Button title="Log Out" onPress={actions.logoutUsingPhone} />
        </View>
      </View>
    );
  }
}
