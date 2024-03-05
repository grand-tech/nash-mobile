import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {OnboardingNavigationStackParamsList} from './navigation/navigation.params.type';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import CheckBox from '@react-native-community/checkbox';

/**
 * Template UI.
 */
const Login = (props: Props) => {
  const navigation = props.navigation;
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo_blue.png')}
        />
      </View>

      <View style={{flex: 1}}>
        <Text style={styles.welcomeTitle}>Welcome Back</Text>
        <TextInput style={styles.inputText} defaultValue="Phone Number" />
        <TextInput style={styles.inputText} defaultValue="Password" />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              style={
                toggleCheckBox
                  ? styles.checkBoxUnchecked
                  : styles.checkBoxChecked
              }
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />

            <Text>Remember me</Text>
          </View>

          <View style={{marginLeft: 60}}>
            <Text>Forgot Password?</Text>
          </View>
        </View>

        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={{color: '#ffffff', ...FONTS.body1}}>Login</Text>
        </Pressable>

        <Text
          style={{
            alignSelf: 'center',  
            position:'absolute',
            bottom:5,
            ...FONTS.body4,
          }}>
          Don't Have an Account? <Text style={{color: '#51C1F945'}}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcomeTitle: {
    color: AppColors.darkblue,
    marginTop: 60,
    marginLeft: 23,
    textAlign: 'left',
    ...FONTS.displayBold,
  },
  logo: {
    marginTop: 104,
    width: 600,
    height: 200,
    alignSelf: 'center',
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 26,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    ...FONTS.body7,
  },
  checkBoxUnchecked: {
    marginLeft: 26,
    marginVertical: 10,
    color: '#51C1F94D',
  },
  checkBoxChecked: {
    marginLeft: 26,
    marginVertical: 10,
    color: '#51C1F94D',
  },
  loginButton: {
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 10,
    backgroundColor: AppColors.darkblue,
    width: 280,
  },
});
type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'LoginScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default Login;
