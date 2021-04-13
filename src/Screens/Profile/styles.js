import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateVerticalScale,
} from '../../styles/responsiveSize';

export default StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 0,
    color: colors.textGrey,
  },
  textBold: {
    fontWeight: '500',
    color: colors.black,
  },
  buttonText: {
    fontSize: 21,
    color: colors.lightSky,
  },
  buttonTouchable: {
    padding: 16,
  },
  cameraStyling: {
    width: moderateScale(50),
    height: moderateVerticalScale(300),
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
