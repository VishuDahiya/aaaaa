import {Stylesheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';

export default Stylesheet.create({
  header: {
    marginTop: 40,
    borderWidth: 0.1,
  },
  heading: {
    flexDirection: 'row',
    marginBottom: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backImage: {
    marginLeft: 10,
    height: 20,
    width: 35,
  },
  headingText: {
    marginTop: -2,
    marginLeft: 20,
    fontWeight: 'bold',
    color: colors.lightGreyBg,
    fontSize: 18,
  },
  headingText1: {
    borderWidth: 0.1,
    fontSize: 15,
    padding: 13,
    textAlign: 'center',
    backgroundColor: colors.pink,
    marginHorizontal: 20,
    color: colors.white,
    bottom: 10,
  },
});
