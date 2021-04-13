import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OuterScreenSlider from '../../Components/OuterScreenSlider';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

class OuterSliderScreen extends Component {
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate(navigationStrings.OUTER_SCREEN);
  };
  render() {
    return (
      <WrapperContainer>
        <OuterScreenSlider _onDone={this._onDone} />
      </WrapperContainer>
    );
  }
}
export default OuterSliderScreen;
