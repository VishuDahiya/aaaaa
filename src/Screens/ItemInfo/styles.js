import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  header: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
  },
  scrollView: {
    height: 300,
    padding: 5,
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 350,
    width: 350,
    borderWidth: 1,
  },
  view2: {
    backgroundColor: colors.white,
    paddingBottom: 10,
  },
  view3: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  nameTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  typeTxt: {
    color: colors.lightGreyBg,
    marginLeft: 5,
  },
  view4: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
  },
  discountTxt: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  originalTxt: {
    marginLeft: 10,
    color: colors.lightGreyBg,
  },
  offTxt: {
    marginLeft: 10,
    color: colors.pink,
  },
});
