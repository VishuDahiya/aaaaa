import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaViewBase,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import imagePath from '../../constant/imagePath';
imagePath;

export default class Categories extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Categories</Text>
        </View>
      </SafeAreaView>
    );
  }
}
