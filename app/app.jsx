import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import 'babel-polyfill';
import configureStore from './redux/store/configureStore';

import DraftTool from './containers/DraftTool.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
  <Provider store={configureStore()}>
    <DraftTool />
  </Provider>,
  document.getElementById('mount'));