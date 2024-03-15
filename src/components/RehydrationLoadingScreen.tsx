import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {AppColors} from '../utils/theme/app.colors';
import {RootState} from '../redux-store/store';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

/**
 *
 * @returns Component to be displayed when redux persist
 *  is rehydrating redux storage.
 */
export const RehydrationLoadingScreen = () => {
  return (
    <View style={style.container}>
      <LottieView
        source={require('../../assets/lottie/Animation1.json')}
        autoPlay
        loop={true}
        style={style.animation}
      />
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
    height: hp('100%'),
  },
  animation: {
    height: hp('100%'),
    width: hp('70%'),
  },
});
