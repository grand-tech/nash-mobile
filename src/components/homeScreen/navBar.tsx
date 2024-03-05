import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';

/**
 * NavBar UI.
 */
const [drawerState, setDrawerState] = React.useState(false);

const ToggleDrawer = () => {
  setDrawerState(current => !current);
};
const NavBar = (props: Props) => {
  const navigation = props.navigation;

  return (
    <View>
      <View style={styles.row1}>
        <View style={styles.row2}>
          <Pressable onPress={ToggleDrawer}>
            <Image
              style={styles.jam}
              source={require('../../../assets/images/jam_menu.png')}
            />
          </Pressable>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 10,
              ...FONTS.body4,
              color: AppColors.darkblue,
            }}>
            Welcome John
          </Text>
        </View>

        <Pressable onPress={() => navigation.navigate('QrCodeScreen')}>
          <Image
            style={styles.qr}
            source={require('../../../assets/images/qr.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jam: {
    marginLeft: 15,
    marginTop: 5,
  },
  qr: {
    marginRight: 15,
    marginTop: 5,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'HomeScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export {NavBar, ToggleDrawer};
