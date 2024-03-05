import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../../features/home/home.screen';
import SendMoneyScreen from '../../features/sendMoney/send.screen';
import RequestMoneyScreen from '../../features/requestMoney/request.screen';
import WithdrawMoneyScreen from '../../features/withdrawMoney/withdraw.screen';
import BuyAirtimeScreen from '../../features/buyAirtime/buy.screen';
import { ToggleDrawer } from './navBar';
import MenuDrawer from 'react-native-side-drawer';

/**
 * Drawer UI.
 */

const Drawer = () => {

  

  const drawerContent = () => {
    return (
      <TouchableOpacity onPress={ToggleDrawer} style={styles.animatedBox}>
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <MenuDrawer
        open={false}   
        drawerContent={drawerContent()}
        drawerPercentage={45}
        animationTime={250}
        overlay={true}
        opacity={0.4}
        position={'left'}>
      </MenuDrawer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    zIndex: 0,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#38C8EC',
    padding: 10,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F04812',
  },
});

export default Drawer;
