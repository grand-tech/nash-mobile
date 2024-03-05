import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import BottomNav from '../../components/bottomNav';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';

/**
 * AccountSettings UI.
 */
const AccountSettings = (props: Props) => {
  const navigation = props.navigation;
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require('../../../assets/images/account.png')} />
        <Text
          style={{
            marginLeft: 10,
            ...FONTS.body12,
            color: AppColors.darkblue,
          }}>
          Account
        </Text>
      </View>

      <Pressable onPress={() => navigation.navigate('EditProfileScreen')}>
      <View style={styles.row2}>
        <Text
          style={{
            marginLeft: 10,
            ...FONTS.s1,
            color: AppColors.darkblue,
          }}>
          Edit Profile
        </Text>
        <Image source={require('../../../assets/images/next.png')} />
      </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('ChangePasswordScreen')}>
        <View style={styles.row2}>
          <Text
            style={{
              marginLeft: 10,
              ...FONTS.s1,
              color: AppColors.darkblue,
            }}>
            Change Password
          </Text>
          <Image source={require('../../../assets/images/next.png')} />
        </View>
      </Pressable>

      <View style={styles.row2}>
        <Text
          style={{
            marginLeft: 10,
            ...FONTS.s1,
            color: AppColors.darkblue,
          }}>
          Change Currency
        </Text>
        <Image source={require('../../../assets/images/next.png')} />
      </View>

      <View style={styles.row2}>
        <Text
          style={{
            marginLeft: 10,
            ...FONTS.s1,
            color: AppColors.darkblue,
          }}>
          Privacy and Security
        </Text>
        <Image source={require('../../../assets/images/next.png')} />
      </View>

      <View style={styles.row2}>
        <Text
          style={{
            marginLeft: 10,
            ...FONTS.s1,
            color: AppColors.darkblue,
          }}>
          QR Code
        </Text>
        <Image source={require('../../../assets/images/next.png')} />
      </View>
      <Image
        style={{marginBottom: 10}}
        source={require('../../../assets/images/transaction_line.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'SettingsScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default AccountSettings;
