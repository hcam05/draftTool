import * as types from '../constants/ActionTypes';

// LOAD PLAYERS //

const loadPlayers = (players) => ({
  type: types.RECEIVE_PRODUCTS,
  players
})

export const getAllProducts = () => dispatch => {
    dispatch(loadPlayers(players))
}
