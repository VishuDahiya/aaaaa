import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
function HeaderCategoryDecathlon(props) {
  let {data} = props;
  return (
    <View style={styles.body}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.scrollContent}>
              <Image source={imagePath.scrollSale} style={styles.scrollImage} />
              <Text style={styles.scrollTxt}>OFFERS</Text>
            </View>
            <View style={styles.scrollContent}>
              <Image source={imagePath.scrollMen} style={styles.scrollImage} />
              <Text style={styles.scrollTxt}>MEN</Text>
            </View>
            <View style={styles.scrollContent}>
              <Image
                source={imagePath.scrollWomen}
                style={styles.scrollImage}
              />
              <Text style={styles.scrollTxt}>WOMEN</Text>
            </View>
            <View style={styles.scrollContent}>
              <Image source={imagePath.scrollkid} style={styles.scrollImage} />
              <Text style={styles.scrollTxt}>KIDS</Text>
            </View>
            <View style={styles.scrollContent}>
              <Image
                source={imagePath.scrollBeauty}
                style={styles.scrollImage}
              />
              <Text style={styles.scrollTxt}>BEAUTY</Text>
            </View>
            <View style={styles.scrollContent}>
              <Image source={imagePath.scrollHome} style={styles.scrollImage} />
              <Text style={styles.scrollTxt}>HOME</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
export default HeaderCategoryDecathlon;

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  scrollContent: {
    flexDirection: 'column',
  },
  scrollImage: {
    height: 70,
    width: 70,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 7,
  },
  scrollTxt: {
    marginLeft: 10,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    color: colors.textGrey,
    fontSize: 12,
    width: 70,
  },
});
