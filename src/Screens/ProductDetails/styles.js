import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  header: {
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 0.1,
  },
  view1: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  backImage: {
    marginLeft: 10,
    height: 20,
    width: 35,
  },
  image: {
    height: 400,
    width: '100%',
    resizeMode: 'contain',
  },
  detailsHeader: {
    marginLeft: 18,
    marginTop: 15,
  },
  nameTxt: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  typeTxt: {
    color: colors.textGrey,
    fontSize: 15,
    marginBottom: 7,
    marginTop: -2,
  },
  detailsInner: {
    flexDirection: 'row',
  },
  detailsTxt: {
    marginRight: 10,
    fontSize: 16,
  },
  originalTxt: {
    marginRight: 10,
    fontSize: 16,
  },
  offTxt: {
    fontSize: 16,
    color: colors.orange,
  },
  inclusiveTxt: {
    color: colors.green,
    fontSize: 13,
  },
  footer: {
    marginLeft: 18,
    marginRight: 18,
  },
  footerInside: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 17,
  },
  sizeTxt: {
    color: colors.textGrey,
    fontSize: 13,
  },
  sizeChartTxt: {
    color: colors.lightSky,
    fontSize: 13,
    fontWeight: '700',
  },
  sizeDisplay: {
    flexDirection: 'row',
  },
  sizeDisplayTxt: {
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 13,
    borderRadius: 90,
    borderColor: colors.black,
    marginRight: 10,
    fontSize: 20,
  },
  sizeDisplayTxt2: {
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 13,
    borderRadius: 90,
    borderColor: colors.black,
    marginRight: 10,
    fontSize: 20,
  },
  sizeDisplayTxt3: {
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 13,
    borderRadius: 90,
    borderColor: colors.black,
    marginRight: 10,
    fontSize: 20,
  },
  sizeDisplayTxt4: {
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 13,
    borderRadius: 90,
    borderColor: colors.black,
    fontSize: 20,
  },
  sizeDisplayTxt5: {
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 90,
    borderColor: colors.black,
    marginLeft: 10,
    fontSize: 20,
  },
  lowerButton: {
    flexDirection: 'row',
    marginTop: 20,
  },
  wishlist: {
    borderWidth: 0.2,
    borderColor: colors.textGrey,
    fontSize: 15,
    padding: 10,
    paddingLeft: 55,
    width: '140%',
  },
  addToBag: {
    borderWidth: 0.1,
    fontSize: 15,
    padding: 10,
    width: '89%',
    paddingLeft: 60,
    backgroundColor: colors.lightSky,
    marginLeft: 60,
    color: colors.white,
  },
});
