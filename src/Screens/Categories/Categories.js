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
import styles from './styles';

export default class Categories extends Component {
  render() {
    return (
      <View style={styles.heading}>
        <Text>Categories</Text>
      </View>
    );
  }
}
