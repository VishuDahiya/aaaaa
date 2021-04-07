import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import BorderTextInput from '../../Components/BorderTextInput';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import GradientButton from '../../Components/GradientButton';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import styles from './styles';
import { otpTimerCounter } from '../../utils/helperFunctions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import { otpVerificationLogin } from '../../redux/actions/auth';
import Loader from '../../Components/Loader';
import { getUserData } from '../../utils/utils';
import types from '../../redux/types';
import store from '../../redux/store';

const CELL_COUNT = 5;
export default function OtpVerification({ navigation }) {
  const [state, setState] = useState({
    timer: 100,
    otp: '',
  });

  let { dispatch } = store;

  const updateState = data => setState(state => ({ ...state, ...data }));
  //TO SHOW THE TIMER SO THAT USER HAS TO WAIT FOR A WHILE BEFORE REQUSTING A NEW OTP AND HE DON'T KEEP ON REQUESTING OTP AGAIN AND AGAIN
  useEffect(() => {
    let timerId;
    if (timer > 0) {
      timerId = setTimeout(() => {
        updateState({ timer: timer - 1 });
      }, 1000);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [state.timer]);

  //RESTING THE TIMER AND REQUEST FOR NEW OTP
  const _onResend = () => {
    updateState({ timer: 200 });
  };

  const onChangeOtp = otp => {
    updateState({ otp });
  };
  //THIS ARE DEFAULT METHOD REQUIRED BY OTP MODULE TO WORK PROPERLY INCASE MOVE FROM ON BOX TO ANOTHER OR INCASE OF BLUR
  const ref = useBlurOnFulfill({ otp: state.otp, cellCount: CELL_COUNT });
  const [propsOtp = props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: state.otp,
    setValue: onChangeOtp,
  });

  const onVerifyOtp = () => {

    otpVerificationLogin(
      {
        "userId": "6059e3ca8429b3638d2e9e58",
        "otp": "12345",
        "deviceToken": "123",
        "registerFrom": "ANDROID"
      }
    ).then((res) => {
      console.log(res)
      // navigation.navigate(navigationStrings.HOME);
      getUserData().then(res => {
        dispatch({
          type: types.LOGIN,
          payload: res,
        });
      })
    }).catch((error) => {
      console.log(error)
    }
    )

  };

  const { timer } = state;
  return (
    <WrapperContainer>
      <View
        style={{
          flex: 1,
          marginHorizontal: moderateScale(5),
          marginTop: 80,
        }}>
        <Text style={styles.header}>{strings.OTP_VERIFICATION}</Text>
        <Text style={styles.txtSmall}>{strings.ENTER_OTP_SENT}</Text>
        <View style={{ height: moderateScaleVertical(50) }} />
        <CodeField
          ref={ref}
          {...propsOtp}
          value={state.otp}
          onChangeText={onChangeOtp}
          cellCount={CELL_COUNT}
          rootStyle={styles.root}
          blurOnSubmit
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          selectionColor={colors.themeColor}
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <GradientButton
          onPress={onVerifyOtp}
          containerStyle={{ marginTop: moderateScaleVertical(10) }}
          btnText={strings.VERIFY_ACCOUNT}
        />
        {timer > 0 ? (
          <View style={styles.bottomContainer}>
            <Text style={{ ...styles.txtSmall, color: colors.textGreyLight }}>
              {strings.RESEND_CODE_IN}
              <Text
                style={{
                  color: colors.themeColor,
                  fontFamily: fontFamily.futuraBtHeavy,
                }}>
                {`${otpTimerCounter(timer)} min`}
              </Text>
            </Text>
          </View>
        ) : (
          <View style={styles.bottomContainer}>
            <Text style={{ ...styles.txtSmall, color: colors.textGreyLight }}>
              {strings.DIDNT_GET_OTP}
              <Text
                onPress={_onResend}
                style={{
                  color: colors.themeColor,
                  fontFamily: fontFamily.futuraBtHeavy,
                }}>
                {' '}
                {strings.RESEND_CODE}
              </Text>
            </Text>
          </View>
        )}
      </View>
    </WrapperContainer>
  );
}
