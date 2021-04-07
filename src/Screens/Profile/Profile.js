import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
  Image,
  Share,
  Button,
  Linking,
  Alert,
} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default class Profile extends Component {

  onSuccess = (e) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );

  };

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>

        <View style={{ marginTop: 80 }}>
          <QRCodeScanner
            onRead={this.onSuccess}
            flashMode={RNCamera.Constants.FlashMode.auto}
            topContent={
              <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            }
            fadeIn={true}
            cameraStyle={{ height: 200, width: 250, alignSelf: 'center', justifyContent: 'center' }}

            cameraProps
          />
          <Button title="Log Out" onPress={actions.logoutUsingPhone} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 0,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
