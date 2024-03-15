import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import {AppColors} from '../../../utils/theme/app.colors';
import LinearGradient from 'react-native-linear-gradient';
import {RootState} from '../../../redux-store/store';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Screen from '../../../components/screen';
import {whiteLogo} from '../../../utils/images';
import {NashButton} from '../../../components/DefaultButton';
import {FONTS} from '../../../utils/theme/fonts';

/**
 *
 * @returns Component to be displayed when redux persist
 *  is rehydrating redux storage.
 */
const WelcomeScreen: React.FC<Props> = (props: Props) => {
  /**
   * Navigate to terms and conditions.
   */
  const navigateToTermsAndConditions = () => {
    console.log('Terms and conditions');
  };

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
      <View>
        <LinearGradient
          colors={[AppColors.turquoise, AppColors.darkblue]}
          style={style.container}>
          <Image source={whiteLogo} style={style.whiteLogo} />

          <View>
            <Text style={style.screen_header}>Welcome</Text>

            <Text style={style.screen_text}>
              Easily Access your money from anywhere, at any time!
            </Text>
          </View>

          <NashButton
            title="Login"
            onPress={login}
            buttonStyle={style.login_btn}
            titleStyle={style.login_txt}
          />

          <NashButton
            title="Register"
            onPress={register}
            buttonStyle={style.register_btn}
            titleStyle={style.register_txt}
          />

          <NashButton
            title="Terms of Services"
            onPress={navigateToTermsAndConditions}
            buttonStyle={style.terms_and_conditions_btn}
            titleStyle={style.terms_and_conditions_text}
          />
        </LinearGradient>
      </View>
    </Screen>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

interface Props extends ReduxProps {}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: heightPercentageToDP('100%'),
    width: widthPercentageToDP('100%'),
  },
  whiteLogo: {
    width: widthPercentageToDP('35%'),
    height: heightPercentageToDP('20%'),
  },
  terms_and_conditions_btn: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  terms_and_conditions_text: {
    color: AppColors.sky_blue,
    ...FONTS.body2,
  },
  login_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: widthPercentageToDP('50%'),
  },
  register_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: widthPercentageToDP('50%'),
    borderWidth: 1,
    borderColor: AppColors.white,
    backgroundColor: 'transparent',
  },
  register_txt: {
    ...FONTS.h4,
    color: AppColors.white,
  },
  login_txt: {},
  screen_header: {
    ...FONTS.h1,
  },
  screen_text: {
    ...FONTS.h4,
  },
});
