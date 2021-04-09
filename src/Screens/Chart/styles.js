import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

export default StyleSheet.create({
  bargraph: {
    height: 300,
    width: 350,
    marginHorizontal: 30,
  },
  title: {
    textAlign: 'center',
    color: colors.selfOrange,
    fontFamily: fontFamily.mainfont,
    marginVertical: 10,
    marginTop: 20,
    fontSize: 20,
  },
});
