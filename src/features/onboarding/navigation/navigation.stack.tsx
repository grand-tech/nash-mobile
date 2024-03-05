import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { BackButton, DeleteButton } from '../../../navigation/navigation.utils';
import WelcomeScreen from '../welcome.screen';
import { OnboardingRootStack } from './onboarding.navigation.stack';
import LoginScreen from '../login.screen';
import RegisterScreen from '../register.screen';
import HomeScreen from '../../home/home.screen';
import SendMoneyScreen from '../../sendMoney/send.screen'
import InsertPinScreen from '../../sendMoney/insertPin.screen'
import RequestMoneyScreen from '../../requestMoney/request.screen'
import WithdrawMoneyScreen from '../../withdrawMoney/withdraw.screen'
import BuyAirtimeScreen from '../../buyAirtime/buy.screen'
import QrCodeScreen from '../../qrCode/qr.screen'
import NotificationsScreen from '../../notifications/notifications.screen'
import SettingsScreen from '../../settings/settings.screen'
import ChangePasswordScreen from '../../forgotPassword/changePassword.screen'
import OTPScreen from '../../forgotPassword/otp.screen'
import EditProfileScreen from '../../editProfile/profile.screen'



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
     <OnboardingRootStack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={RootStackScreenHideHeader}
    />
    <OnboardingRootStack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={RootStackScreenHideHeader}
    /> 
    <OnboardingRootStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={RootStackScreenHideHeader}
    />
     <OnboardingRootStack.Screen
      name="SendMoneyScreen"
      component={SendMoneyScreen}
      options={RootStackScreenHideHeader}
    />
    <OnboardingRootStack.Screen
      name="InsertPinScreen"
      component={InsertPinScreen}
      options={RootStackScreenHideHeader}
    />
     <OnboardingRootStack.Screen
      name="RequestMoneyScreen"
      component={RequestMoneyScreen}
      options={RootStackScreenHideHeader}
    />
    <OnboardingRootStack.Screen
      name="WithdrawMoneyScreen"
      component={WithdrawMoneyScreen}
      options={RootStackScreenHideHeader}
    />
     <OnboardingRootStack.Screen
      name="BuyAirtimeScreen"
      component={BuyAirtimeScreen}
      options={RootStackScreenHideHeader}
    />
     <OnboardingRootStack.Screen
      name="QrCodeScreen"
      component={QrCodeScreen}
      options={RootStackScreenHideHeader}
    />
    <OnboardingRootStack.Screen
      name="NotificationsScreen"
      component={NotificationsScreen}
      options={RootStackScreenHideHeader}
    />
     <OnboardingRootStack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={RootStackScreenHideHeader}
    />

<OnboardingRootStack.Screen
      name="ChangePasswordScreen"
      component={ChangePasswordScreen}
      options={RootStackScreenHideHeader}
    />

<OnboardingRootStack.Screen
      name="EditProfileScreen"
      component={EditProfileScreen}
      options={RootStackScreenHideHeader}
    />

<OnboardingRootStack.Screen
      name="OTPScreen"
      component={OTPScreen}
      options={RootStackScreenHideHeader}
    />
    {/* </OnboardingRootStack.Navigator> */}
  </>
);