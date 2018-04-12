import { combineReducers } from 'redux';
import newCardReducer from './reducer_new_card';
import cardsReducer from './reducer_cards';

const rootReducer = combineReducers({
  newCard: newCardReducer,
  cards: cardsReducer
});

export default rootReducer;