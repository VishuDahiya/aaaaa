import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import imagePath from '../../constant/imagePath';

export default class Explore extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Explore</Text>
        </View>
      </SafeAreaView>
    );
  }
}
