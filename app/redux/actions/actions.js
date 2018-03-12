// import * as types from '../constants/ActionTypes';
import { LOAD_PLAYERS, DRAFT_PLAYER } from '../constants/ActionTypes';
import axios from 'axios';

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

const draftPlayer = (playerId) => ({
  type: DRAFT_PLAYER,
  playerId 
});

export const selectPlayer = playerId => (dispatch) => {
  dispatch(draftPlayer(playerId));
};
