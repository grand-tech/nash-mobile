import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import Favorites from '../../components/requestMoneyScreen/favorites';
import BottomNav from '../../components/bottomNav';

/**
 * RequestScreen UI.
 */
const RequestMoney = (props: Props) => {
  const navigation = props.navigation;
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.row2}>
        <Image source={require('../../../assets/images/back.png')} />
        <Text
          style={{marginTop: 20,marginLeft:20, ...FONTS.body12, color: AppColors.darkblue}}>
          Request Money
        </Text>
      </View>
      <Favorites {...props} />
      <View style={{marginTop: 30}}>
        <View style={styles.sectionStyle}>
          <TextInput
            style={{padding: 10, ...FONTS.body7}}
            defaultValue="Phone Number"
          />
          <Image
            style={{padding: 10,marginRight:10}}
            source={require('../../../assets/images/search.png')}
          />
        </View>
        <TextInput style={styles.inputText} defaultValue="Amount" />
      </View>

      <Pressable
        style={styles.sendButton}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={{color: '#ffffff', ...FONTS.body1}}>Request Money</Text>
      </Pressable>

      <View style={styles.row}>
        <Image source={require('../../../assets/images/or_line.png')} />

        <Text style={{...FONTS.body13}}>or</Text>
        <Image source={require('../../../assets/images/or_line.png')} />
      </View>

      <Pressable
        style={styles.sendButton}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={{color: '#ffffff', ...FONTS.body1}}>Scan QR Code</Text>
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
  row: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 26,
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
    width: 160,
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'RequestMoneyScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default RequestMoney;
