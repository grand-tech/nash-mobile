import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';

/**
 * Notification UI.
 */
const Notification = (props: Props) => {
  const navigation = props.navigation;
  const items = [
    {
      avatar: require('../../../assets/images/gf.png'),
      image: require('../../../assets/images/request_blue.png'),
      username: 'Nashipae Nailantei',
      contact: '0712838078',
      seen: false,
    },
    {
      avatar: require('../../../assets/images/gf.png'),
      image: require('../../../assets/images/request_blue.png'),
      username: 'Nashipae Nailantei',
      contact: '0712838078',
      seen: false,
    },
    {
      avatar: require('../../../assets/images/gf.png'),
      image: require('../../../assets/images/request_blue.png'),
      username: 'Nashipae Nailantei',
      contact: '0712838078',
      seen: false,
    },
  ];

  const items2 = [
    {
      avatar: require('../../../assets/images/avatar6.png'),
      image: require('../../../assets/images/withdraw_grey.png'),
      username: 'John Kimani',
      contact: '0712838078',
      seen: false,
    },
    {
      avatar: require('../../../assets/images/avatar6.png'),
      image: require('../../../assets/images/withdraw_grey.png'),
      username: 'John Kimani',
      contact: '0712838078',
      seen: false,
    },
    {
      avatar: require('../../../assets/images/gf.png'),
      image: require('../../../assets/images/request_grey.png'),
      username: 'Nashipae Nailantei',
      contact: '0712838078',
      seen: false,
    },
    {
      avatar: require('../../../assets/images/avatar6.png'),
      image: require('../../../assets/images/withdraw_grey.png'),
      username: 'John Kimani',
      contact: '0712838078',
      seen: false,
    },
    {
      avatar: require('../../../assets/images/avatar6.png'),
      image: require('../../../assets/images/withdraw_grey.png'),
      username: 'John Kimani',
      contact: '0712838078',
      seen: false,
    },
  ];
  return (
    <View>
      <Text
        style={{
          marginLeft: 15,
          ...FONTS.h5,
          color: AppColors.darkblue,
          marginTop: 10,
        }}>
        Today
      </Text>
      <ScrollView nestedScrollEnabled={true}>
        {items.map(item => (
          <>
            <View style={styles.row}>
              <View style={styles.row1}>
                {item.seen == false ? (
                  <Image
                    source={require('../../../assets/images/elipse.png')}
                    style={{marginRight: 10}}
                  />
                ) : null}
                <Image source={item.avatar} style={{marginRight: 5,width:40,height:40}} />
                <View style={styles.column1}>
                  <Text style={{...FONTS.h5, color: AppColors.darkblue}}>
                    {item.username}
                  </Text>
                  <Text style={{...FONTS.body8, color: AppColors.darkblue}}>
                    {item.contact}
                  </Text>
                </View>
              </View>

              <View style={styles.column2}>
                <Image
                  source={item.image}
                  style={{marginRight: 5}}
                />
                <Text style={{...FONTS.body8, color: AppColors.light_blue}}>
                  Money Request
                </Text>
              </View>
            </View>
            <Image
              style={{marginBottom: 10}}
              source={require('../../../assets/images/transaction_line.png')}
            />
          </>
        ))}
      </ScrollView>

      <Text
        style={{
          marginLeft: 15,
          ...FONTS.h5,
          color: AppColors.darkblue,
          marginTop: 10,
        }}>
        This week
      </Text>
      <ScrollView nestedScrollEnabled={true}>
        {items2.map(item => (
          <>
            <View style={styles.row}>
              <View style={styles.row1}>
                {item.seen == false ? (
                  <Image
                    source={require('../../../assets/images/elipse.png')}
                    style={{marginRight: 10}}
                  />
                ) : null}
                <Image source={item.avatar} style={{marginRight: 5,width:40,height:40}} />
                <View style={styles.column1}>
                  <Text style={{...FONTS.h5, color: AppColors.grey}}>
                    {item.username}
                  </Text>
                  <Text style={{...FONTS.body8, color: AppColors.grey}}>
                    {item.contact}
                  </Text>
                </View>
              </View>

              <View style={styles.column2}>
                <Image
                  source={item.image}
                  style={{marginRight: 5}}
                />
                <Text style={{...FONTS.body8, color: AppColors.grey}}>
                  Money Request
                </Text>
              </View>
            </View>
            <Image
              style={{marginBottom: 10}}
              source={require('../../../assets/images/transaction_line.png')}
            />
          </>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  column1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 15,
  },

  column2: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 10,
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'NotificationsScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default Notification;
