import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingNavigationStackParamsList } from './navigation.params.type';
import { onboardingNavigationStack } from './navigation.stack';

/**
 * The apps root navigation stack.
 */
export const OnboardingRootStack =
  createNativeStackNavigator<OnboardingNavigationStackParamsList>();

// TODO https://reactnavigation.org/docs/typescript/
export const OnboardingNavigationStack = () => {
  return <OnboardingRootStack.Navigator>{onboardingNavigationStack}</OnboardingRootStack.Navigator>;
};