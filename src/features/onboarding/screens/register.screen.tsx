import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../../../redux-store/store';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Screen from '../../../components/screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnboardingNavigationStackParamsList} from '../navigation/navigation.params.type';
import {NashButton} from '../../../components/DefaultButton';
import {TextInput} from 'react-native-gesture-handler';
import {AppColors} from '../../../utils/theme/app.colors';
import {FONTS} from '../../../utils/theme/fonts';

/**
 * Register screen.
 * @returns Component to be displayed when redux persist
 *  is rehydrating redux storage.
 */
const RegisterScreen: React.FC<Props> = (props: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /**
   * Log in on press handler.
   */
  const login = () => {
    console.log('Log in');
  };

  /**
   * Register on press handler.
   */
  const register = () => {
    console.log('Register');
  };

  return (
    <Screen style={style.container}>
      <View style={style.screenContent}>
        <View style={style.headerContainer}>
          <Text style={style.screenTittle}>Hello,</Text>
          <Text style={style.screenSubtitle}>Register to continue...</Text>
        </View>

        <TextInput
          style={style.input}
          value={phoneNumber}
          placeholder="Phone Number"
          onChangeText={setPhoneNumber}
          placeholderTextColor={AppColors.darkblue}
        />

        <TextInput
          style={style.input}
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          placeholderTextColor={AppColors.darkblue}
        />

        <TextInput
          style={style.input}
          value={confirmPassword}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          placeholderTextColor={AppColors.darkblue}
        />

        <NashButton
          title="Register"
          onPress={register}
          buttonStyle={style.registerBtnStyle}
          titleStyle={style.registerBtnTextStyle}
        />
        <Text style={style.loginText}>
          Already have an account?
          <Text style={style.loginButtonStyle} onPress={login}>
            {' '}
            Log in
          </Text>
          .
        </Text>
      </View>
    </Screen>
  );
};

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'RegisterScreen'
>;

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

type Props = ReduxProps & StackProps;

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: heightPercentageToDP('100%'),
    width: widthPercentageToDP('100%'),
  },
  headerContainer: {
    width: widthPercentageToDP('70%'),
  },
  screenSubtitle: {
    ...FONTS.sh2,
    color: AppColors.darkblue,
  },
  input: {
    color: AppColors.darkblue,
    borderColor: AppColors.darkblue,
    borderWidth: 1,
    borderRadius: 7,
    width: widthPercentageToDP('70%'),
    paddingLeft: 20,
    ...FONTS.body1,
  },
  screenTittle: {
    color: AppColors.darkblue,
    ...FONTS.displayBold,
    textAlign: 'left',
  },
  screenBody: {
    color: AppColors.darkblue,
  },
  loginText: {
    color: AppColors.darkblue,
  },
  loginButtonStyle: {
    color: AppColors.light_blue,
  },
  registerBtnStyle: {
    backgroundColor: AppColors.darkblue,
    borderRadius: 10,
    width: widthPercentageToDP('50%'),
  },
  registerBtnTextStyle: {
    color: AppColors.white,
  },
  screenContent: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: heightPercentageToDP('100%'),
    width: widthPercentageToDP('100%'),
  },
});
