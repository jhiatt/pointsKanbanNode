import React from 'react';
import ReactDOM from 'react-dom';
//https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// main app
import App from './src/components/App';
import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('app'));