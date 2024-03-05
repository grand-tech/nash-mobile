import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../onboarding/navigation/navigation.params.type';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import BottomNav from '../../components/bottomNav';
import AccountSettings from '../../components/settings/account_settings';
import NotificationsSettings from '../../components/settings/notifications_settings';
import MoreSettings from '../../components/settings/more_settings';

/**
 * SettingsScreen UI.
 */
const Settings = (props: Props) => {
  const navigation = props.navigation;
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
        <View style={styles.row}>
          <Image source={require('../../../assets/images/back.png')} />
          <Text
            style={{
              marginLeft: 10,
              ...FONTS.body12,
              color: AppColors.darkblue
            }}>
            Settings
          </Text>
        </View>
        <AccountSettings {...props}/>
        <NotificationsSettings {...props}/>
        <MoreSettings {...props}/>
        <View style={styles.row}>
          <Image source={require('../../../assets/images/logout.png')} />
          <Text
            style={{
              marginLeft: 10,
              ...FONTS.body12,
              color: AppColors.darkblue
            }}>
            Logout
          </Text>
        </View>
        <BottomNav {...props}/>
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
    margin:20
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft:15
  },
 
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'SettingsScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default Settings;
