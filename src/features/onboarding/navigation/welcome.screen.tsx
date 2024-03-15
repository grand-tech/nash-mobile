import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {RootState} from '../../../app-redux-store/store';
import {AppColors} from '../../../utils/theme/app.colors';
import LinearGradient from 'react-native-linear-gradient';

let ScreenHeight = Dimensions.get('window').height;

/**
 *
 * @returns Component to be displayed when redux persist
 *  is rehydrating redux storage.
 */
export const WelcomeScreen = () => {
  return (
    <View>
      <LinearGradient
        colors={[AppColors.darkblue, AppColors.turquoise]}
        style={style.container}>
        <Text>Welcome</Text>
      </LinearGradient>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  // onboarded: state.user_profile,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: ScreenHeight,
  },
  animation: {
    height: 200,
  },
});
