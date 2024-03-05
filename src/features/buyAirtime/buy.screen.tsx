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
import {OnboardingNavigationStackParamsList} from '../onboarding/navigation/navigation.params.type';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import Favorites from '../../components/buyAirtimeScreen/favorites';
import BottomNav from '../../components/bottomNav';
import Checkbox from '../../components/buyAirtimeScreen/checkboxes';

/**
 * Buy Airtime UI.
 */
const BuyAirtime = (props: Props) => {
  const navigation = props.navigation;
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
 <View style={styles.row}>
        <Image source={require('../../../assets/images/back.png')} />
        <Text style={{margin: 20, ...FONTS.body12, color: AppColors.darkblue}}>
          Buy Airtime
        </Text>
      </View>
            <Text style={{...FONTS.body8, textAlign: 'center', marginTop: 10}}>
        Acc Balance:1,500,456.00Ksh
      </Text>
      <View style={{marginTop: 30}}>
        <Checkbox />
        <Favorites {...props} />
        <View style={styles.sectionStyle}>
          <TextInput
            style={{padding: 10, ...FONTS.body7}}
            defaultValue="Phone Number"
          />
          <Image
            style={{padding: 10, marginRight: 10}}
            source={require('../../../assets/images/search.png')}
          />
        </View>
        <TextInput style={styles.inputText} defaultValue="Amount" />
      </View>

      <Pressable
        style={styles.sendButton}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={{color: '#ffffff', ...FONTS.body1}}>Buy Airtime</Text>
      </Pressable>
      <BottomNav {...props} />
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
    justifyContent: 'flex-start',
    marginLeft: 26,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 23,
    borderRadius: 10,
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 26,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    ...FONTS.body7,
  },
  sendButton: {
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 10,
    backgroundColor: AppColors.darkblue,
    width: 140,
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'BuyAirtimeScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default BuyAirtime;
