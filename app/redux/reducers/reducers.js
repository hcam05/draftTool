import { combineReducers } from 'redux';
import {
  LOAD_PLAYERS,
  DRAFT_PLAYER
} from '../constants/ActionTypes';

const initialState = {
  allPlayers: [],
  loading: true,
}

const loadAllDraftPlayers = (state = initialState.allPlayers, action) => {
  // console.log(action);
  switch (action.type) {
    case LOAD_PLAYERS:
      return [
        ...state,
        ...action.allPlayers.map((eachPlayer) => {
          eachPlayer.drafted = false;
          return eachPlayer
        })
      ]
    default:
      return state
  }
}

const draftPlayer = (state = initialState.allPlayers, action) => {
  switch (action.type) {
    case DRAFT_PLAYER:
      return state.map((eachPlayer) => {
        (eachPlayer.id === action.player.id)
          ? { ...eachPlayer, drafted: !eachPlayer.drafted }
          : eachPlayer;
      })
    default:
      return state
  }
}

export default combineReducers({
  loadAllDraftPlayers,
  draftPlayer
})
