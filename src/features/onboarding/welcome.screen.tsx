import * as React from 'react';

import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppColors} from '../../utils/theme/app.colors';
import {OnboardingNavigationStackParamsList} from './navigation/navigation.params.type';
import Screen from '../screen';
import {FONTS} from '../../utils/theme/fonts';
import {RootState} from '../../app-redux-store/store';
import {useDispatch, connect, ConnectedProps} from 'react-redux';
import {actionSetLanguage} from '../user.profile/action.generators';

/**
 * Welcome screen UI.
 */

const Welcome = (props: Props) => {
  const navigation = props.navigation;
  return (
    <Screen>
      <LinearGradient
        colors={[AppColors.turquoise, AppColors.darkblue]}
        locations={[0.2, 0.4]}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={{justifyContent: 'center'}}>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/logo_white.png')}
            />
          </View>

          <View style={{flex: 1}}>
            <Text style={styles.welcomeTitle}>Welcome</Text>
            <Text style={styles.welcomeText}>
              Easily access your money from anywhere, at any time!
            </Text>
          </View>

          <View style={{flex: 1, justifyContent: 'center'}}>
            <Pressable
              style={styles.regButton}
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.regText}>Register</Text>
            </Pressable>

            <Pressable
              style={styles.loginButton}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={{color: '#ffffff', ...FONTS.body1}}>Login</Text>
            </Pressable>

            <Text
              style={{
                alignSelf: 'center',
                color: '#51C1F945',
                marginTop: 10,
                ...FONTS.body4,
              }}>
              Terms of Services
            </Text>
          </View>
        </View>
      </LinearGradient>
    </Screen>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  logo: {
    marginTop: 104,
    width: 117,
    height: 146,
    alignSelf: 'center',
  },

  welcomeTitle: {
    color: '#ffffff',
    marginTop: 100,
    marginLeft: 23,
    textAlign: 'left',
    ...FONTS.displayBold,
  },

  welcomeText: {
    marginTop: 10,
    marginLeft: 23,
    ...FONTS.body1,
    color: '#ffffff',
    marginRight: 23,
  },

  regButton: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    width: 270,
  },

  regText: {
    color: '#000000',
    ...FONTS.body1,
  },

  loginButton: {
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#0E2954C9',
    width: 270,
  },
});

// const mapStateToProps = (state: RootState) => ({
//   language: state.user_profile.language,
//   publicAddress: state.user_profile.public_address,
// });

// const mapDispatchToProps = {
//   dispatchSetLanguage: actionSetLanguage,
// };

// const connector = connect(mapStateToProps, mapDispatchToProps)

// type ReduxProps = ConnectedProps<typeof connector>;

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'WelcomeScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default Welcome;
