import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import navigationStrings from '../constants/navigationStrings';

const slides = [
  {
    key: 'one',
    text: 'Description.\nSay something cool',
    image: require('../assets/images/slider.png'),
  },
  {
    key: 'two',
    text: 'Other cool stuff',
    image: require('../assets/images/slider1.jpg'),
  },
  {
    key: 'three',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/images/slider.png'),
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
