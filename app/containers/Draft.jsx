import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux'

import PlayerCell from '../components/PlayerCell.jsx';
import DraftedPlayers from '../containers/DraftedPlayers.jsx';

import { selectPlayer } from '../redux/actions/actions';

const Draft = ({ players, selectPlayer }) => {
  // console.log('selectPlayer from Draft container:',selectPlayer)
  let avaliablePlayers = players.map((x) => {
    return <PlayerCell
      key={x.id}
      player={x}
      onSinglePlayerClicked={() => selectPlayer(x.id)}
    />
  })

  return (

    <div players={players}>
      Avaliable Players
      {(players.length > 0) ? avaliablePlayers : "Loading"}
      <DraftedPlayers />
    </div>
  )
}

const mapStateToProps = (state) => ({
  players: state.loadAllDraftPlayers
});

export default connect(
  mapStateToProps,
  { selectPlayer }
)(Draft);