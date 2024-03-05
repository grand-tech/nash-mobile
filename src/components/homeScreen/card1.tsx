import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';

/**
 * Card1 UI.
 */
const Card1 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.row}>
            <Image
              source={require('../../../assets/images/gf.png')}
              style={{marginRight: 5,height:40,width:40}}
            />
            <View style={styles.column1}>
              <Text style={{color:'#ffffff',marginBottom:5,marginTop:10}}>Girlfriend Allowance</Text>
              <Text style={{...FONTS.body8,color:AppColors.light_blue}}>Ksh 10,000.00</Text>
              <Text style={{...FONTS.body8,color:'#ffffff'}}>Nashipae Nailantei</Text>

            </View>
          </View>

          <View style={styles.column2}>
            <Image
              source={require('../../../assets/images/request_blue.png')}
              style={{marginRight: 5}}
            />
              <Text style={{...FONTS.body8,color:AppColors.light_blue}}>Money Request</Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft:5
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
    marginRight:10
  },
  container: {
    borderRadius: 20,
    backgroundColor: AppColors.darkblue,
    height: 80,
    marginHorizontal: 30,
    marginBottom: 0,
  },
});

export default Card1;
