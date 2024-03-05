import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';

/**
 * Transactions UI.
 */
const Transactions = () => {
  const items = [
    {
      image:  require('../../../assets/images/withdraw.png'),
      title: 'Received',
      caption: 'MK KITCHENETTE',
      amount: '+25000.00 Ksh',
      date: '2 Aug, 2023',
    },
    {
      image:  require('../../../assets/images/send.png'),
      title: 'Sent',
      caption: 'BRIAN MUTISO',
      amount: '-2000.00 Ksh',
      date: '31 Jul, 2023',
    },
    {
      image:  require('../../../assets/images/buy.png'),
      title: 'Airtime',
      caption: 'MY NUMBER',
      amount: '-1000.00 Ksh',
      date: '27 Jul, 2023',
    },
    // {
    //   image:  require('../../assets/images/withdraw.png'),
    //   title: 'Sent',
    //   caption: 'MERCY KEMUMA',
    //   amount: '-5000.00 Ksh',
    //   date: '31 Jul, 2023',
    // },
    // {
    //   image:  require('../../assets/images/send.png'),
    //   title: 'Received',
    //   caption: '',
    //   amount: '+5000.00 Ksh',
    //   date: '2 Aug, 2023',
    // },
    // {
    //   image:  require('../../assets/images/send.png'),
    //   title: 'Received',
    //   caption: '',
    //   amount: '+15000.00 Ksh',
    //   date: '2 Aug, 2023',
    // },
  ];
  type ItemProps = {
    image: string;
    title: string;
    caption: string;
    amount: string;
    date: string;
  };

  const Item = ({image, title, caption, amount, date}: ItemProps) => (
    <View style={styles.item}>
      <View style={styles.row}>
        <View style={styles.row}>
        <Image source={image} style={{marginRight:5}} />
          <View style={styles.column1}>
            <Text>{title}</Text>
            <Text style={{...FONTS.body8}}>{caption}</Text>
          </View>
        </View>

        <View style={styles.column2}>
          <Text>{amount}</Text>
          <Text>{date}</Text>
        </View>
      </View>
      <Image source={require('../../../assets/images/transaction_line.png')} />

    </View>
  );
  return (
    <View>
      <View style={styles.row}>
        <Text
          style={{
            ...FONTS.body9,
            margin: 8,
            fontWeight: 'bold',
            color: AppColors.darkblue,
          }}>
          TRANSACTIONS
        </Text>
        <Text style={{...FONTS.body9, color: AppColors.light_blue, margin: 8}}>
          View All
          <Image source={require('../../../assets/images/filter.png')} />
        </Text>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        {items.map(item => (
          <View>
            <Item
              image={item.image}
              title={item.title}
              caption={item.caption}
              amount={item.amount}
              date={item.date}
            />
          </View>
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
  },
  column1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  column2: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 16,
  },
});

export default Transactions;
