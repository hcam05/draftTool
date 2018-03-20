import axios from 'axios';
import {
  LOAD_PLAYERS,
  DRAFT_PLAYER,
  UNDO_DRAFT,
  SET_TEAMS,
  SET_PLAYER_SLOTS,
  SET_TEAMNAMES
} from '../constants/ActionTypes';

// LOAD PLAYERS //

const loadPlayers = (allPlayers) => ({
  type: LOAD_PLAYERS,
  allPlayers
});

export const loadAllPlayers = () => (dispatch) => {
  axios.get('/nfldata')
    .then((resp) => {
      dispatch(loadPlayers(resp.data))
    });
};

const draftPlayer = (player) => ({
  type: DRAFT_PLAYER,
  player
});

export const selectPlayer = player => (dispatch) => {
  dispatch(draftPlayer(player));
};

const undraftPlayer = (undraftedPlayer) => ({
  type: UNDO_DRAFT,
  undraftedPlayer
});

export const undoDraft = (undraftedPlayer) => (dispatch) => {
  dispatch(undraftPlayer(undraftedPlayer));
};

const setTeams = (numTeams) => ({
  type: SET_TEAMS,
  numTeams
});

export const setNumTeams = (numTeams) => (dispatch) => {
  dispatch(setTeams(numTeams));
};

const setPlayerSlots = (playerSlots) => ({
  type: SET_PLAYER_SLOTS,
  playerSlots
});

export const setNumPlayerSlots = (playerSlots) => (dispatch) => {
  dispatch(setPlayerSlots(playerSlots));
};

const setTeamNames = (teamNames) => ({
  type: SET_TEAMSNAMES,
  teamNames
});

export const setAllTeamNames = (teamNames) => (dispatch) => {
  dispatch(setTeamNames(teamNames));
};
