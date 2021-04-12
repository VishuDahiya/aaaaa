import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {
  moderateScale,
  moderateVerticalScale,
  textScale,
} from '../../styles/responsiveSize';

export default StyleSheet.create({
  header: {
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
  txt: {
    fontSize: textScale(18),
    color: colors.white,
    marginRight: 10,
  },
  profileImage: {
    height: moderateVerticalScale(40),
    width: moderateScale(40),
    borderRadius: 50,
    marginRight: 10,
  },
});
