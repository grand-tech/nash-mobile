/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import analytics from '@react-native-firebase/analytics';
import React from 'react';
import {RootState} from './src/redux-store/store';
import {ConnectedProps, connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/navigation.service';
import {OnboardingNavigationStack} from './src/features/onboarding/navigation/onboarding.navigation.stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: React.FC<Props> = (props: Props) => {
  const routeNameRef = React.useRef<String>();

  /**
   * On navigation container ready.
   */
  const onNavContainerReady = () => {
    routeNameRef.current = routeNameRef.current =
      typeof navigationRef?.current?.getCurrentRoute()?.name === 'undefined'
        ? ''
        : navigationRef?.current?.getCurrentRoute()?.name;
  };

  /**
   * On navigation container state change.
   */
  const onNavContainerStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }
    routeNameRef.current =
      typeof currentRouteName === 'undefined' ? '' : currentRouteName;
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer
        ref={navigationRef}
        onReady={onNavContainerReady}
        onStateChange={onNavContainerStateChange}>
        <OnboardingNavigationStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

interface Props extends ReduxProps {}

export default connect(mapStateToProps, mapDispatchToProps)(App);
