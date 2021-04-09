import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  body: {
    borderRightWidth: 0.2,
    borderBottomWidth: 0.2,
    marginLeft: 1,
    width: 210,
  },
  image: {
    height: 208,
    width: 208,
  },
  nameTxt: {
    fontWeight: '700',
    fontSize: 15,
    marginTop: 4,
    marginLeft: 8,
    fontFamily: 'sans-serif',
  },
  typeTxt: {
    fontSize: 13,
    marginTop: -1,
    marginLeft: 8,
    color: colors.textGrey,
  },
  discountTxt: {
    fontSize: 14,
    marginTop: 4,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  originalTxt: {
    fontSize: 14,
    marginTop: 4,
    marginLeft: 8,
    color: colors.textGrey,
  },
  offTxt: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 8,
    color: colors.orange,
  },
});
