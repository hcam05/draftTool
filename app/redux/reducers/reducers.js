import { combineReducers } from 'redux';
import {
  LOAD_PLAYERS,
  DRAFT_PLAYER,
  UNDO_DRAFT,
  INC_TEAMS,
  DEC_TEAMS,
  INC_PLAYERS,
  DEC_PLAYERS,
  SET_TEAMNAMES,
  CREATE_BOARD,
} from '../constants/ActionTypes';

const initialState = {
  allPlayers: [],
  draftedPlayers: [],
  loading: true,
  numTeams: 12,
  playerSlots: 15,
  teamNames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  draftBoard: {},
}

export const iniitalizeDraftBoard = (state = initialState.draftBoard, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        ...action.teamNames.map((x) => {
          let emptySlots = []
          for (let i = 0; i < action.playerSlots; i++) {
            emptySlots.push('');
          }
          x = [...emptySlots]
          return x;
        })
      }
    default:
      return state;
  }
}

export const allPlayers = (state = initialState.allPlayers, action) => {
  switch (action.type) {
    case LOAD_PLAYERS:
      return [
        ...state,
        ...action.allPlayers.map((eachPlayer) => {
          eachPlayer.drafted = false;
          eachPlayer.owner = null;
          eachPlayer.pickNumber = null;
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
        ...state.slice(0, state.length - 1)
      ]
    default:
      return state
  }
}

export const numTeams = (state = initialState.numTeams, action) => {
  switch (action.type) {
    case INC_TEAMS:
      return (state < 14) ? state + 1 : state
    case DEC_TEAMS:
      return (state > 0) ? state - 1 : state
    default:
      return state
  }
}

export const playerSlots = (state = initialState.playerSlots, action) => {
  switch (action.type) {
    case INC_PLAYERS:
      return (state < 20) ? state + 1 : state
    case DEC_PLAYERS:
      return (state > 0) ? state - 1 : state
    default:
      return state
  }
}

export const teamNames = (state = initialState.teamNames, action) => {
  switch (action.type) {
    case SET_TEAMNAMES:
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
  draftBoard: iniitalizeDraftBoard,
})


