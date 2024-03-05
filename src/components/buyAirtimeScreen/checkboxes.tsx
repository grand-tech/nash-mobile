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
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';
import CheckBox from '@react-native-community/checkbox';

/**
 * Checkbox UI.
 */
const Checkbox = () => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  return (
    <View>
      <View style={{flexDirection: 'row',justifyContent:'space-between',paddingHorizontal:20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            style={
              toggleCheckBox ? styles.checkBoxUnchecked : styles.checkBoxChecked
            }
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />

          <Text>My Number</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            style={
              toggleCheckBox ? styles.checkBoxUnchecked : styles.checkBoxChecked
            }
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />

          <Text>Other Number</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxUnchecked: {
    marginLeft: 26,
    marginVertical: 10,
    color: '#51C1F94D',
  },
  checkBoxChecked: {
    marginLeft: 26,
    marginVertical: 10,
    color: '#51C1F94D',
  },
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'BuyAirtimeScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default Checkbox;
