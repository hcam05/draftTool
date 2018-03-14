import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import 'babel-polyfill';
import configureStore from './redux/store/configureStore';

import Draft from './containers/Draft.jsx'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Draft />
  </Provider>,
  document.getElementById('mount'));