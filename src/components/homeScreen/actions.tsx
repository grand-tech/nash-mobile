import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';
import { OnboardingNavigationStack } from '../../features/onboarding/navigation/onboarding.navigation.stack';

/**
 * Actions UI.
 */
const Actions = (props: Props) => {
  const navigation = props.navigation;
  
  const items = [
    {
      icon: require('../../../assets/images/send.png'),
      title: 'Send Money',
      color: AppColors.darkblue,
      navigate: () =>navigation.navigate('SendMoneyScreen')
    },
    {
      icon: require('../../../assets/images/request.png'),
      title: 'Request Money',
      color: '#0E295421',
      navigate: () =>navigation.navigate('RequestMoneyScreen')
    },
    {
      icon: require('../../../assets/images/withdraw.png'),
      title: 'Withdraw',
      color: '#0E295421',
      navigate: () =>navigation.navigate('WithdrawMoneyScreen')

    },
    {
      icon: require('../../../assets/images/buy.png'),
      title: 'Buy Airtime',
      color: '#0E295421',
      navigate: () =>navigation.navigate('BuyAirtimeScreen')

    },
  ];
  return (
    <View>
      <View style={styles.row}>
        {items.map(item => (
          <Pressable onPress={item.navigate }>
            <View
              style={{
                flexDirection: 'column',
                padding: 10,
                borderRadius: 15,
                backgroundColor: item.color,
                height: 60,
                width: 80,
                marginHorizontal: 4,
                marginBottom:10
              }}>
              <Image source={item.icon} style={{alignSelf: 'center',width:20,height:20}}  />
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                  ...FONTS.body8,
                  color: '#ffffff',
                }}>
                {item.title}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'HomeScreen'
>;
type Props = StackProps;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Actions;
