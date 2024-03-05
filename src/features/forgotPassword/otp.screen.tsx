import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../onboarding/navigation/navigation.params.type';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import BottomNav from '../../components/bottomNav';
import {OtpInput} from 'react-native-otp-entry';

/**
 *OTP UI.
 */
const OTP = (props: Props) => {
  const navigation = props.navigation;
  let pin = '';
  return (
    <View>
      <View style={styles.row}>
        <Image source={require('../../../assets/images/back.png')} />
        <Text
          style={{
            marginLeft: 10,
            ...FONTS.body12,
            color: AppColors.darkblue,
          }}>
          Change Password
        </Text>
      </View>

      <Text style={styles.title}>Enter 6 Digit Code</Text>
      <Text style={styles.body}>
        Please enter the 6 digit code sent to your number.
      </Text>

      <View style={{marginHorizontal: 20, marginTop: 10}}>
        <OtpInput numberOfDigits={6} onTextChange={text => (pin = text)} />
      </View>

      <Text
          style={{
            alignSelf: 'center',  
            marginTop:30,
            ...FONTS.body4,
            color:'#1B6B93'
          }}>
          Resend OTP
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    color: AppColors.darkblue,
    marginTop: 20,
    marginLeft: 23,
    textAlign: 'left',
    ...FONTS.displayBold,
  },
  body: {
    color: AppColors.darkblue,
    marginTop: 4,
    marginLeft: 23,
    textAlign: 'left',
    ...FONTS.body1,
  },
  borderedView: {
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 26,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    ...FONTS.body7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'OTPScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default OTP;
