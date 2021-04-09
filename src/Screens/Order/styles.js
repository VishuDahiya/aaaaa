import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  heading: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    borderColor: colors.black,
  },
  heading1: {
    flexDirection: 'row',
    marginBottom: 0,
    backgroundColor: colors.white,
    padding: 20,
    width: '100%',
  },
  headingImage: {
    marginLeft: 10,
    height: 20,
    width: 35,
  },
  confirmTxt: {
    marginTop: -2,
    marginLeft: 20,
    fontWeight: 'bold',
    color: colors.lightGreyBg,
    fontSize: 18,
  },
  bagTxt: {
    marginLeft: -76,
    marginTop: 5,
    fontSize: 10,
    color: colors.green,
  },
  paymentTxt: {
    marginLeft: -110,
    marginTop: -18,
    fontSize: 10,
    color: colors.green,
  },
  changeTxt: {
    borderWidth: 1,
    marginBottom: 8,
    height: 40,
  },
  addressTxt: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.black,
    justifyContent: 'center',
    padding: 10,
  },
  continueTouch: {
    backgroundColor: colors.pink,
    marginBottom: 8,
    height: 40,
    marginHorizontal: 25,
    borderRadius: 5,
  },
  continueTxt: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.white,
    justifyContent: 'center',
    padding: 5,
  },
  container: {
    padding: 0,
    margin: 0,
    marginTop: -9,
    backgroundColor: colors.lightGreyBg,
    justifyContent: 'space-evenly',
  },

  body: {
    padding: 20,
    backgroundColor: colors.white,
    marginVertical: 5,
  },
  header: {
    color: colors.textGrey,
    fontWeight: 'bold',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.whiteOpacity22,
  },
  detail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  pink: {
    fontWeight: 'bold',
    color: colors.pink,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    // height: '50%'
  },
  contactContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.lightSky,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
