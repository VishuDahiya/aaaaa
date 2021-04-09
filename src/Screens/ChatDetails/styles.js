import {Stylesheet} from 'react-native';
import colors from '../../styles/colors';

export default Stylesheet.create({
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
    color: colors.white,
    fontSize: 19,
    marginRight: 10,
  },
});
