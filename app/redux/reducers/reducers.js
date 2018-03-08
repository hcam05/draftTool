import { combineReducers } from 'redux';
import {
  LOAD_PLAYERS
} from '../constants/ActionTypes';

const initialState = {
  players: [],
  loading: true,
}

const allDraftPlayers = (state = initialState.players, action) => {
  // console.log(action);
  switch (action.type) {
    case LOAD_PLAYERS:
      return action.players
    default:
      return state
  }
}

export default combineReducers({
  allDraftPlayers,
})
