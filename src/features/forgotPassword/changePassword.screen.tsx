import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../onboarding/navigation/navigation.params.type';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import BottomNav from '../../components/bottomNav';

/**
 *ChangePasswordScreen UI.
 */
const ChangePassword = (props: Props) => {
  const navigation = props.navigation;

  return (
    <View style={styles.container}>
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

      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.body}>Choose your recovery method</Text>

      <Pressable onPress={() => navigation.navigate('OTPScreen')}>
        <View style={styles.borderedView}>
          <View style={styles.column}>
            <View style={styles.row1}>
              <Image source={require('../../../assets/images/phone.png')} />
              <Text style={{color: AppColors.darkblue, marginLeft: 5}}>
                SMS
              </Text>
            </View>
            <Text>......378</Text>
          </View>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('OTPScreen')}>
        <View style={styles.borderedView}>
          <View style={styles.column}>
            <View style={styles.row1}>
              <Image source={require('../../../assets/images/email.png')} />
              <Text style={{color: AppColors.darkblue, marginLeft: 5}}>
                Email
              </Text>
            </View>
            <Text>......ni@gmail.com</Text>
          </View>
        </View>
      </Pressable>
      <BottomNav {...props} />
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
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'ChangePasswordScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default ChangePassword;
