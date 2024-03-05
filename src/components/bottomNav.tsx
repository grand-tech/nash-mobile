import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../utils/theme/app.colors';
import {FONTS} from '../utils/theme/fonts';

/**
 * BottomNav UI.
 */
const BottomNav = (props: Props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable onPress={() => navigation.navigate('NotificationsScreen')}>
          <Image
            source={require('../../assets/images/notifications.png')}
            style={{backgroundColor: '#0E295421'}}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
          <Image
            source={require('../../assets/images/settings.png')}
            style={{backgroundColor: '#0E295421'}}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../../assets/images/home.png')}
            style={{backgroundColor: '#0E295421'}}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
          <Image
            source={require('../../assets/images/history.png')}
            style={{backgroundColor: '#0E295421'}}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
          <Image
            source={require('../../assets/images/receipts.png')}
            style={{backgroundColor: '#0E295421'}}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.darkblue,
    position: 'absolute',
    bottom: 0,
    height: 55,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});
type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'HomeScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default BottomNav;
