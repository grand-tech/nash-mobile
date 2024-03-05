import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../onboarding/navigation/navigation.params.type';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import BottomNav from '../../components/bottomNav';
import Notification from '../../components/notifications/notification';

/**
 * NotificationsScreen UI.
 */
const Notifications = (props: Props) => {
  const navigation = props.navigation;
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.row2}>
          <Image source={require('../../../assets/images/back.png')} />
          <Text
            style={{
              marginLeft: 10,
              ...FONTS.body12,
              color: AppColors.darkblue
            }}>
            Notifications
          </Text>
        </View>
        <Image source={require('../../../assets/images/filter2.png')} style={{marginRight:20}} />


      </View>
      <View>
      <Text style={{...FONTS.s5, color: '#0E2954'}}>
        You have <Text style={{color: '#59D6F1'}}>3</Text> Notifications
      </Text>
      </View>

      <Notification {...props} />

      <BottomNav {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:20
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
  'NotificationsScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default Notifications;
