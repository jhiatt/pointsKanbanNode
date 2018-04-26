import {PULL_CARD_DATA} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case PULL_CARD_DATA:
    return action.payload.data;
    // return [ action.payload.data, ...state ];
  }
  return state;
}