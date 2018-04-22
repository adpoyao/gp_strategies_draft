import { combineReducers } from 'redux';
import searchReducer from './search';
import sampleDataReducer from './sampleData';

const rootReducer = combineReducers({
  search: searchReducer,
  sampleData: sampleDataReducer
});

export default rootReducer;