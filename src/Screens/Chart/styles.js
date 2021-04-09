import {Stylesheet} from 'react-native';
import colors from '../../styles/colors';

export default Stylesheet.create({
  bargraph: {
    height: 300,
    width: 350,
    marginHorizontal: 30,
  },
  title: {
    textAlign: 'center',
    color: colors.selfOrange,
    fontFamily: fontFamily.mainfont,
    marginVertical: 10,
    marginTop: 20,
    fontSize: 20,
  },
});
