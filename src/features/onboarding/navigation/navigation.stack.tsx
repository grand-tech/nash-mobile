import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React from 'react';
import {BackButton, DeleteButton} from '../../../navigation/navigation.utils';
import {OnboardingRootStack} from './onboarding.navigation.stack';
import {WelcomeScreen} from './welcome.screen';

/**
 * Hides the header.
 */
const RootStackScreenHideHeader = {
  headerShown: false,
};

/**
 * Allows users to define header of a screen with a back button.
 * @param onPress
 * @param title
 * @returns
 */
export function RootStackScreenHideHeaderTitle(
  onPress: any,
  title?: string,
): NativeStackNavigationOptions {
  return {
    title: title ?? '',
    headerTransparent: true,
    headerLeft: () => <BackButton onPress={onPress} />,
  };
}

/**
 * Handles pages with headers that have delete batons.
 * @param onPressBack
 * @param onPressDelete
 * @param title
 * @returns
 */
export function headerWithDeleteButton(
  onPressBack: any,
  onPressDelete: any,
  title?: string,
): NativeStackNavigationOptions {
  return {
    title: title ?? '',
    headerTransparent: true,
    headerLeft: () => <BackButton onPress={onPressBack} />,
    headerRight: () => <DeleteButton onPress={onPressDelete} />,
  };
}

// SetUpRecoveryPhrase
export const onboardingNavigationStack = (
  <>
    {/* <OnboardingRootStack.Navigator initialRouteName="WelcomeScreen"> */}
    <OnboardingRootStack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={RootStackScreenHideHeader}
    />

    {/* </OnboardingRootStack.Navigator> */}
  </>
);
