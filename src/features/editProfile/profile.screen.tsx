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
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';
import App from '../../../App';

/**
 * EditProfile UI.
 */

const EditProfile = (props: Props) => {
  const navigation = props.navigation;

  return (
    <View>
      <View style={styles.row}>
        <View style={styles.row1}>
          <Image source={require('../../../assets/images/back.png')} />
          <Text
            style={{
              marginLeft: 10,
              ...FONTS.body12,
              color: AppColors.darkblue,
            }}>
            Account
          </Text>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Pressable onPress={() => navigation.navigate('QrCodeScreen')}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../../assets/images/qr.png')}
            />
          </Pressable>
        </View>
      </View>

      <View>
        <Image source={require('../../../assets/images/avatar7.png')} />
        <TextInput style={styles.inputText} defaultValue="John Kimani" />
        <TextInput style={styles.inputText} defaultValue="0727899378" />
        <TextInput
          style={styles.inputText}
          defaultValue="johnkimani@gmail.com"
        />
        <TextInput style={styles.inputText} defaultValue="................." />

        <Pressable
          style={styles.saveBtn}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={{color: AppColors.grey, ...FONTS.body1}}>
            Save Changes
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  saveBtn: {
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 6,
    paddingHorizontal: 13,
    borderRadius: 10,
    backgroundColor: AppColors.light_grey,
    width: 120,
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'EditProfileScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default EditProfile;
