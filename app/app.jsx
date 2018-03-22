import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import 'babel-polyfill';
import configureStore from './redux/store/configureStore';

import DraftTool from './containers/DraftTool.jsx';
import DraftBoard from './containers/DraftBoard.jsx';
import DraftSetup from './components/DraftSetup.jsx';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

const history = createHistory();

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'


ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={DraftTool} />
        <Route path="/board" component={DraftBoard} />
        <Route path="/setup" component={DraftSetup} />
      </div>
    </ConnectedRouter>
    {/* <DraftTool /> */}
  </Provider>,
  document.getElementById('mount'));