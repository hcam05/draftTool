import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducers';
import { createLogger } from 'redux-logger';
import { loadAllPlayers } from '../actions/actions';

const configureStore = () => {

  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
  );

  store.dispatch(loadAllPlayers());
  
  return store;
}


export default configureStore;
