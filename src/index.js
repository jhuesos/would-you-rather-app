import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-connect';
import middlewares from './middlewares';

const store = createStore(
  reducers,
  middlewares,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

