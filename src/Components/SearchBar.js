import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {moderateScale, moderateVerticalScale} from '../styles/responsiveSize';

export default function SearchBar({
  containerStyle = {},
  placeholder = 'Search',
}) {
  return (
    <View style={styles.body}>
      <Image style={{opacity: 0.7}} source={imagePath.search} />
      <View style={styles.placeholderContent}>
        <TextInput style={styles.textInputContent} placeholder={placeholder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
    height: moderateVerticalScale(48),
    backgroundColor: colors.white,
    alignItems: 'center',
    ...containerStyle,
  },
  placeholderContent: {
    flex: 1,
    marginLeft: 10,
  },
  textInputContent: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: fontFamily.medium,
    color: colors.textGrey,
    color: colors.textGreyOpcaity7,
  },
});
