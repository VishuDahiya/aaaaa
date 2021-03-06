import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';
import {
  moderateVerticalScale,
  moderateScale,
} from '../../styles/responsiveSize';
import strings from '../../constants/lang/index';
import GradientButton from '../../Components/GradientButton';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';

export default function OuterScreen({navigation}) {
  const moveToNewScreen = (screenName, data = {}) => () => {
    navigation.navigate(screenName, {data});
  };
  return (
    <WrapperContainer>
      <View style={{marginTop: moderateVerticalScale(100), flex: 1}}>
        <Text style={styles.header}>{strings.CREATE_YOUR_ACCOUNT}</Text>
        <View style={{marginHorizontal: moderateScale(24)}}>
          <Text style={styles.txtSmall}>{strings.JOIN_US_FOR_EMERGENCY}</Text>
          <GradientButton
            containerStyle={{marginTop: moderateVerticalScale(50)}}
            btnText={strings.CREATE_AN_ACCOUNT}
            onPress={moveToNewScreen(navigationStrings.SIGN_UP)}
          />
          <ButtonWithLoader
            btnStyle={styles.guestBtn}
            btnTextStyle={{color: colors.textBlue}}
            onPress={moveToNewScreen(navigationStrings.SIGN_UP)}
            btnText={strings.GUEST_LOGIN}
          />
          <View style={{marginTop: moderateVerticalScale(50)}}>
            <View style={styles.socialRow}>
              <View style={styles.hyphen} />
              <Text style={styles.orText}>{strings.OR_SIGNUP_WITH}</Text>
              <View style={styles.hyphen} />
            </View>
            <View style={styles.socialRowBtn}>
              <TouchableOpacity>
                <Image source={imagePath.google} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={imagePath.fb} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={imagePath.insta} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={imagePath.apple} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[styles.txtSmall, styles.alreadyText]}>
              {strings.ALREADY_HAVE_AN_ACCOUNT}
            </Text>
            <TouchableOpacity
              hitSlop={hitSlopProp}
              onPress={moveToNewScreen(navigationStrings.LOGIN)}>
              <Text style={styles.login}> {strings.LOGIN}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
}
