import { combineReducers } from 'redux'
import timer from './timer'
import illustration from './illustration'

const rootReducer = combineReducers({
  timer,
  illustration
});

export default rootReducer;
