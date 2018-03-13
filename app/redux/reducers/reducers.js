import { combineReducers } from 'redux';
import {
  LOAD_PLAYERS,
  DRAFT_PLAYER
} from '../constants/ActionTypes';

const initialState = {
  allPlayers: [],
  draftedPlayers: [],
  loading: true,
}

const loadAllDraftPlayers = (state = initialState.allPlayers, action) => {
  switch (action.type) {
    case LOAD_PLAYERS:
      return [
        ...state,
        ...action.allPlayers.map((eachPlayer) => {
          eachPlayer.drafted = false;
          return eachPlayer
        })
      ]
    case DRAFT_PLAYER:
      const { player } = action
      return state.map((eachPlayer) => {
          if (eachPlayer.id === action.player.id) {
            eachPlayer.drafted = !eachPlayer.drafted
            return eachPlayer;
          }
          return eachPlayer;
        })
      
    default:
      return state
  }
}

const draftPlayer = (state = initialState.draftedPlayers, action) => {
  switch (action.type) {
    case DRAFT_PLAYER:
      const { player } = action
      return [
        ...state,
        player
      ]

    default:
      return state
  }
}

export default combineReducers({
  loadAllDraftPlayers: loadAllDraftPlayers,
  draftPlayer: draftPlayer
})


