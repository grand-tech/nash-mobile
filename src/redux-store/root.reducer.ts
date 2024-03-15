import {combineReducers} from 'redux';
import counterSlice from '../features/counter/counterSlice';

/**
 * Construct the root reducer from
 */
export const rootReducer = combineReducers({
  counter: counterSlice,
});
