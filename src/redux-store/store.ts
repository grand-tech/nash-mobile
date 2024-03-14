import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './root.saga';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import FSStorage from 'redux-persist-fs-storage';
import {rootReducer} from './root.reducer';

const persistConfig = {
  key: 'root',
  keyPrefix: '',
  storage: FSStorage(),
  // figure out what best to do with wallet.
  blacklist: ['ui_state', 'wallet_balance', 'ramp'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

export const persister = persistStore(store);

// then run the saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
