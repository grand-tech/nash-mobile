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
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';

/**
 * Favorites UI.
 */
const Favorites = (props: Props) => {
  const navigation = props.navigation;
  const items = [
    {
      avatar: require('../../../assets/images/avatar1.png'),
      name: 'Beatrice Kimani',
      contact: '0700000000',
    },
    {
      avatar: require('../../../assets/images/avatar2.png'),
      name: 'Peter Kimani',
      contact: '0700000000',
    },
    {
      avatar: require('../../../assets/images/avatar3.png'),
      name: 'Mercy Cheptoo',
      contact: '0700000000',
    },
    {
      avatar: require('../../../assets/images/avatar4.png'),
      name: 'Winnie Mwangi',
      contact: '0700000000',
    },
  ];
  return (
    <View>
      <Text
        style={{
          ...FONTS.h7,
          textAlign: 'center',
          color: AppColors.darkblue,
          marginTop: 15,
        }}>
        FAVORITES
      </Text>

      <View style={styles.row}>
        {items.map(item => (
          <View
            style={{
              flexDirection: 'column',
              padding: 10,
              borderRadius: 15,
              height: 70,
              width: 80,
              marginHorizontal: 4,
            }}>
            <Image
              source={item.avatar}
              style={{alignSelf: 'center', width: 40, height: 40}}
            />
            <Text
              style={{
                marginTop: 10,
                marginLeft: 10,
                ...FONTS.body14,
                color: AppColors.darkblue,
              }}>
              {item.name}
            </Text>

            <Text
              style={{
                marginTop: 0,
                marginLeft: 10,
                ...FONTS.body15,
                color: '#1B6B93',
              }}>
              {item.contact}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.row}>
        <Image source={require('../../../assets/images/or_line.png')} />

        <Text style={{...FONTS.body13}}>or</Text>
        <Image source={require('../../../assets/images/or_line.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'SendMoneyScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default Favorites;
