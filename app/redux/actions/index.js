import axios from 'axios';
import {
  LOAD_PLAYERS,
  DRAFT_PLAYER,
  UNDO_DRAFT
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
