import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 15,
  },
  image: {
    marginLeft: 10,
    height: 20,
    width: 35,
  },
  shoppingTxt: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});
