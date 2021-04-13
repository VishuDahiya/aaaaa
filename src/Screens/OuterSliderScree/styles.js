import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateVerticalScale,
} from '../../styles/responsiveSize';

export default StyleSheet.create({
  background: {
    backgroundColor: colors.themeColor,
    height: moderateVerticalScale(791),
    width: moderateScale(400),
  },
});
