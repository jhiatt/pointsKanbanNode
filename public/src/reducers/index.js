import { combineReducers } from 'redux';
import cardReducer from './reducer_cards';

const rootReducer = combineReducers({
  cards: cardReducer
});

export default rootReducer;