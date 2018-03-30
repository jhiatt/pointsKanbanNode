import { combineReducers } from 'redux';
import newCardReducer from './reducer_cards';

const rootReducer = combineReducers({
  newCard: newCardReducer
});

export default rootReducer;