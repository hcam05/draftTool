// import * as types from '../constants/ActionTypes';
import { LOAD_PLAYERS } from '../constants/ActionTypes';
import axios from 'axios';
// LOAD PLAYERS //

const loadPlayers = (players) => ({
  type: LOAD_PLAYERS,
  players
})

export const loadAllPlayers = () => dispatch => {
  axios.get('/nfldata')
    .then((resp) => {
      dispatch(loadPlayers(resp.data))
    });
}