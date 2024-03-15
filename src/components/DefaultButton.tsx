import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {FONTS} from '../utils/theme/fonts';
import {AppColors} from '../utils/theme/app.colors';

/**
 * Screen component properties.
 * @typedef {Object} AppButtonProps properties expected by the button.
 * @property { {} } buttonStyle
 * @property { {} } titleStyle
 * @property { string } title the text to appear on the button.
 * @property { any } onPress the function to execute on pressing the button.
 */
interface NashButtonProps {
  buttonStyle?: {};
  titleStyle?: {};
  title: string;
  onPress: any;
}

/**
 * Creates a custom button.
 * @param props the properties expected for the component.
 * @returns custom button.
 */
export const NashButton: React.FC<NashButtonProps> = props => {
  return (
    <Pressable
      style={[styles.button, props.buttonStyle]}
      onTouchStart={() => {
        props.onPress();
      }}>
      <Text style={[styles.text, props.titleStyle]}>{props.title}</Text>
    </Pressable>
  );
};

/**
 * App button default props.
 */
NashButton.defaultProps = {
  title: 'Test button',
  titleStyle: {},
  buttonStyle: {},
  onPress: () => {
    console.log('Test button pressed');
  },
};

/**
 * App button styling.
 */
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: AppColors.white,
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: AppColors.darkblue,
    ...FONTS.h4,
  },
});
