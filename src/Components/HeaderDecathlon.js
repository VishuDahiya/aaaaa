import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';

function HeaderDecathlon(props) {
  const navigation = useNavigation();
  let data = {data};
  const {onAddCount} = props;

  return (
    <>
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.leftContent}>
            <Image
              source={imagePath.headTop1}
              style={styles.leftContentImage}
            />
            <View style={styles.leftContentTxt}>
              <Text style={styles.deliveringTxt}>Delivering to 160028</Text>
              <Text style={styles.changeTxt}>CHANGE</Text>
            </View>
          </View>
          <Image source={imagePath.headTop} style={styles.rightContentImage} />
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Image
              source={imagePath.headSearch}
              style={styles.footerContentImage}
            />
            <TextInput
              placeholder="Search 70 Sports 5000 Products"
              style={styles.searchInputTxt}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationStrings.SHOWCART);
            }}>
            <View style={styles.cartContent}>
              <Image
                source={imagePath.headCart}
                style={styles.cartContentImage}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.addCountTxt}>{onAddCount}</Text>
        </View>
      </View>
    </>
  );
}

export default HeaderDecathlon;

const styles = StyleSheet.create({
  body: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 15,
  },
  header: {
    flexDirection: 'row',
    marginTop: -10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.1,
    backgroundColor: 'white',
  },
  leftContent: {
    flexDirection: 'row',
  },
  leftContentImage: {
    height: 38,
    width: 25,
  },
  leftContentTxt: {
    marginLeft: 5,
  },
  deliveringTxt: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  changeTxt: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  rightContentImage: {
    height: 90,
    width: 100,
    marginTop: -4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    backgroundColor: colors.white,
    paddingBottom: 15,
    marginTop: -10,
  },
  footerContent: {
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: colors.textGreyLight,
    alignItems: 'center',
    marginHorizontal: 18,
    backgroundColor: colors.textGreyLight,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  footerContentImage: {
    height: 30,
    width: 25,
    marginHorizontal: 15,
  },
  searchInputTxt: {
    paddingRight: 49,
  },
  cartContent: {
    borderWidth: 0.2,
    borderColor: colors.textGreyLight,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 0,
  },
  cartContentImage: {
    height: 49,
    width: 50,
    backgroundColor: colors.textGreyLight,
  },
  addCountTxt: {
    top: -25,
    left: -10,
    position: 'relative',
  },
});
