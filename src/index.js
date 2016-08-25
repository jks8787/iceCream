import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers';
import App from './App';
import './index.css';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

render(
  <Provider store={createStoreWithMiddleware(appReducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
