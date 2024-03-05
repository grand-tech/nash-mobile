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
import { useState } from 'react';

/**
 * Template UI.
 */
const Register = (props: Props) => {
  const navigation = props.navigation;
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  return (
    <View style={styles.container}>
    

      <View style={{flex: 1}}>
        <Text style={styles.title}>Hello,</Text>
        <Text style={styles.body}>Register to continue...</Text>
       
        <TextInput style={styles.inputText} defaultValue="Phone Number" />
        <TextInput style={styles.inputText} defaultValue="Password" />
        <TextInput style={styles.inputText} defaultValue="Confirm Password" />


        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{color: '#ffffff', ...FONTS.body1}}>Register</Text>
        </Pressable>

        <Text
          style={{
            alignSelf: 'center',  
            marginTop:30,
            ...FONTS.body4,
          }}>
          Already Have an Account? <Text style={{color: '#51C1F945'}}>Register</Text>
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
 title: {
    color: AppColors.darkblue,
    marginTop: 60,
    marginLeft: 23,
    textAlign: 'left',
    ...FONTS.displayBold,
  },
  body:{
    color: AppColors.darkblue,
    marginTop: 4,
    marginLeft: 23,
    textAlign: 'left',
    ...FONTS.body1,
  },
  logo: {
    marginTop: 104,
    width: 117,
    height: 146,
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
  'RegisterScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default Register;
