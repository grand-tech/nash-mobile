import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {RootState} from '../app-redux-store/store';
import {AppColors} from '../utils/theme/app.colors';

let ScreenHeight = Dimensions.get('window').height;

/**
 *
 * @returns Component to be displayed when redux persist
 *  is rehydrating redux storage.
 */
export const RehydrationLoadingScreen = () => {
  return (
    <View style={style.container}>
      <Text>Nash</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  // onboarded: state.user_profile,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RehydrationLoadingScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: AppColors.darkblue,
    height: ScreenHeight,
  },
  animation: {
    height: 200,
  },
});
