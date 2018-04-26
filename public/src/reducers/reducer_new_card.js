import { NEW_CARD_DATA } from '../actions/index';

//if it doesn't apply it will take in state and pass it right through unchanged.  If it does then it will return whatever the payload was for action, which so happens to be whatever was taken into the action.
export default function(state = [], action) {
  switch(action.type) {
  case NEW_CARD_DATA:
    return state.concat( action.payload.data );
  }
  return state;
}