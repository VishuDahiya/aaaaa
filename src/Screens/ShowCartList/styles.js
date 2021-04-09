import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    marginBottom: 4,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  image: {
    height: 110,
    width: 100,
    marginRight: 15,
  },
  contentTxt: {
    paddingVertical: 8,
  },
  nameTxt: {
    fontSize: 19,
    fontWeight: '800',
  },
  typeTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textGrey,
  },
  discountOriginalTxt: {
    flexDirection: 'row',
  },
  discountTxt: {
    fontSize: 16,
    marginRight: 10,
  },
  originalTxt: {
    fontSize: 16,
  },
  offTxt: {
    fontSize: 14,
    color: colors.orange,
  },
  plusMinusStyling: {
    flexDirection: 'row',
    marginTop: 5,
  },
  plusTxt: {
    borderWidth: 1,
    paddingHorizontal: 5,
    fontSize: 20,
    marginRight: 5,
    textAlign: 'center',
  },
  qtyTxt: {
    fontSize: 17,
    marginRight: 5,
  },
  minuTxt: {
    borderWidth: 1,
    paddingHorizontal: 7,
    fontSize: 20,
    textAlign: 'center',
  },
  buttonStyling: {
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  wishlistTxt: {
    borderWidth: 0.2,
    borderColor: colors.lightGreyBorder,
    fontSize: 15,
    padding: 10,
    paddingLeft: 55,
    width: '140%',
  },
  removeTxt: {
    borderWidth: 0.1,
    fontSize: 15,
    padding: 10,
    width: '97%',
    paddingLeft: 60,
    backgroundColor: colors.lightSky,
    marginLeft: 60,
    color: colors.white,
  },
});
