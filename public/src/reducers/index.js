import { combineReducers } from 'redux';
import newCardReducer from './reducer_new_card';

const rootReducer = combineReducers({
  newCard: newCardReducer
});

export default rootReducer;