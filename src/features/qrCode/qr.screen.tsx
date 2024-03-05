import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../onboarding/navigation/navigation.params.type';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import BottomNav from '../../components/bottomNav';

/**
 * QrScreen UI.
 */
const QrCode = (props: Props) => {
  const navigation = props.navigation;
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.row3}>
        <Image source={require('../../../assets/images/back.png')} />
        <Text
          style={{margin: 20, ...FONTS.body12, color: AppColors.darkblue}}>
          Account
        </Text>
      </View>
      <Text style={{...FONTS.body12, textAlign: 'center', color: '#0E2954'}}>
        My QR Code
      </Text>

      <View style={styles.column}>
        <View style={styles.row}>
          <Image
            source={require('../../../assets/images/avatar6.png')}
            style={{marginLeft: 25, marginRight: 15}}
          />
          <View style={styles.column1}>
            <Text style={{...FONTS.h4, color: '#ffffff'}}>John Kimani</Text>
            <Text style={{...FONTS.body8, color: '#ffffff'}}>0727899378</Text>
          </View>
        </View>
        <Image
          source={require('../../../assets/images/qr_code.png')}
          style={{marginLeft: 25}}
        />
      </View>
      <Pressable
        style={styles.shareButton}
        onPress={() => navigation.navigate('HomeScreen')}>
        <View style={styles.row2}>
          <Text style={{color: '#ffffff', ...FONTS.body1}}>Share QR Code</Text>
          <Image
            source={require('../../../assets/images/share.png')}
            style={{marginHorizontal: 10}}
          />
        </View>
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
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 40,
    marginBottom: 30,
    height: 400,
    borderRadius: 20,
    backgroundColor: AppColors.darkblue,
  },
  column1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  row: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 26,
    marginTop: 10,
  },
  shareButton: {
    marginHorizontal: 10,
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
  'QrCodeScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default QrCode;
