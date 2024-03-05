import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../onboarding/navigation/navigation.params.type';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import React from 'react';

/**
 *InsertPin UI.
 */
const InsertPinScreen = (props: Props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.row1}>
          <Image source={require('../../../assets/images/back.png')} />
          
        </View>

        <View style={{flexDirection: 'column'}}>
          <Pressable onPress={() => navigation.navigate('SendMoneyScreen')}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../../assets/images/close.png')}
            />
          </Pressable>
        </View>
      </View>

      <View>
     
      </View>
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
    justifyContent: 'space-between',
    margin: 20,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'InsertPinScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default InsertPinScreen;
