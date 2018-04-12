//this page will hold all the actions so if any actions are called they will find them by name

import axios from 'axios';

const TEST_ROOT_URL = 'http://localhost:3000/api/test/';
const CARD_ROOT_URL = 'http://localhost:3000/api/card/';
// const username = 'jhiatt';

export const PULL_TEST_DATA = 'PULL_TEST_DATA';
export const PULL_CARD_DATA = 'PULL_CARD_DATA';
export const NEW_CARD_DATA = 'NEW_CARD_DATA';

export function pullTestData(username) {
  const url = TEST_ROOT_URL + username;
  const request = axios.get(url);

  return {
    type: PULL_TEST_DATA,
    payload: request
  };
}

export function pullCardData(username) {
  const url = CARD_ROOT_URL + username;
  const request = axios.get(url);

  return {
    type: PULL_CARD_DATA,
    payload: request
  };
}

export function newCardData(newCard) {

  return {
    type: NEW_CARD_DATA,
    payload: newCard
  };
}
