import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';

/**
 * Balance UI.
 */
const Balance = () => {
  return (
    <View>
      <View style={styles.column1}>
        <Image
          style={styles.home_bg}
          source={require('../../../assets/images/home_bg.png')}
        />

        <View style={styles.textContainer}>
          <Text style={styles.accBalance}>Account Balance</Text>
        </View>

        <View style={styles.textContainer2}>
          <Text style={styles.balance}>Ksh 1,500,456.00</Text>
        </View>

        <View style={styles.textContainer3}>
          <Text style={styles.usdc}>USDc 10511.08</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    column1: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        height:150
      },
      home_bg: {
        borderRadius: 20,
        marginTop:10,
        width:300,
        height:160
      },
      textContainer: {
        position: 'absolute',
        top: 30,
        backgroundColor: 'transparent',
      },
      textContainer2: {
        position: 'absolute',
        top: 60,
        backgroundColor: 'transparent',
      },
      textContainer3: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'transparent',
      },
      accBalance: {
        ...FONTS.body6,
        color: 'white', // set the text color
      },
      balance: {
        ...FONTS.body10,
        color: 'white',
      },
      usdc: {
        ...FONTS.body9,
        color: 'white',
      },
});

export default Balance;
