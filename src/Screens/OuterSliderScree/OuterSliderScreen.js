import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OuterScreenSlider from '../../Components/OuterScreenSlider';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

class OuterSliderScreen extends Component {
  _onDone = () => {
    this.props.navigation.navigate(navigationStrings.LOGIN);
  };
  render() {
    return (
      <>
        <OuterScreenSlider _onDone={this._onDone} />
      </>
    );
  }
}
export default OuterSliderScreen;
