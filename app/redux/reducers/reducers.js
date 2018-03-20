import { combineReducers } from 'redux';
import {
  LOAD_PLAYERS,
  DRAFT_PLAYER,
  UNDO_DRAFT,
  SET_TEAMS,
  SET_PLAYER_SLOTS,
  SET_TEAMNAMES,
} from '../constants/ActionTypes';

const initialState = {
  allPlayers: [],
  draftedPlayers: [],
  loading: true,
  numTeams: 0,
  playerSlots: 0,
  teamNames: [],
}

export const allPlayers = (state = initialState.allPlayers, action) => {
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
          if (eachPlayer.id === player.id) {
            eachPlayer.drafted = !eachPlayer.drafted
            return eachPlayer;
          }
          return eachPlayer;
        })
    case UNDO_DRAFT:
      const { undraftedPlayer } = action
      return state.map((eachPlayer) => {
          if (eachPlayer.id === undraftedPlayer.id) {
            eachPlayer.drafted = !eachPlayer.drafted
            return eachPlayer;
          }
          return eachPlayer;
        })
    default:
      return state
  }
}

export const draftPlayer = (state = initialState.draftedPlayers, action) => {
  switch (action.type) {
    case DRAFT_PLAYER:
      const { player } = action
      return [
        ...state,
        player
      ]
    case UNDO_DRAFT:
      return [
        ...state.slice(0, state.length-1)
      ]
    default:
      return state
  }
}

export const numTeams = (state = initialState.numTeams, action) => {
  switch (action.type) {
    case SET_TEAMS:
      return state + action.numTeams
    default:
      return state
  }
}

export const playerSlots = (state = initialState.playerSlots, action) => {
  switch (action.type) {
    case SET_PLAYER_SLOTS:
      return state + action.playerSlots
    default:
      return state
  }
}

export const teamNames = (state = initialState.teamNames, action) => {
  switch (action.type) {
    case SET_PLAYER_SLOTS:
      return [
        ...state,
        ...action.teamNames
      ]
    default:
      return state
  }
}

export default combineReducers({
  allPlayers: allPlayers,
  draftPlayer: draftPlayer,
  numTeams: numTeams,
  playerSlots: playerSlots,
  teamNames: teamNames,
})


