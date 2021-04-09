import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {GiftedChat, Bubble, Composer, Send} from 'react-native-gifted-chat';
import styles from './styles';

export default class ChatDetails extends Component {
  render() {
    const {chats} = this.props.route.params;
    let {fullName} = chats;
    console.log(chats);
    return (
      <>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={imagePath.backButton} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.txt}>Image</Text>
          <Text style={styles.txt}>Name</Text>
        </View>
        <View>
          <Text>{fullName}</Text>
        </View>
      </>
    );
  }
}
