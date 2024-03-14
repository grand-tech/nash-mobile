/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RehydrationLoadingScreen from './src/components/RehydrationLoadingScreen';
import {persister, store} from './src/redux-store/store';

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <PersistGate loading={<RehydrationLoadingScreen />} persistor={persister}>
      <App />
    </PersistGate>
  </Provider>
));
