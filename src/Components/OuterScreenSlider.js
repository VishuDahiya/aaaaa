import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import navigationStrings from '../constants/navigationStrings';

const slides = [
  {
    key: 'one',
    title: 'Screen1',
    text: 'Description.\nSay something cool',
    image: require('../assets/images/background1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Screen 2',
    text: 'Other cool stuff',
    image: require('../assets/images/background1.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/images/background1.jpg'),
    backgroundColor: '#22bcb5',
  },
];

export default class OuterScreenSlider extends Component {
  state = {
    showRealApp: false,
  };

  _renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Image source={item.image} />
        <Text>{item.text}</Text>
      </View>
    );
  };

  render() {
    console.log(this.props);
    if (this.state.showRealApp) {
      return <OuterScreenSlider />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this.props._onDone}
        />
      );
    }
  }
}
