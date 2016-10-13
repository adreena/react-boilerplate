import { combineReducers } from 'redux';
import allReducers from './all_reducers';

const rootReducer = combineReducers({
  allReducers: allReducers
});

export default rootReducer;