import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux'

import PlayerCell from '../components/PlayerCell.jsx';
import DraftedPlayers from '../containers/DraftedPlayers.jsx';

import { selectPlayer } from '../redux/actions/index';

const Draft = ({ players, draftedPlayers, selectPlayer }) => {
  // console.log('selectPlayer from Draft container:',selectPlayer)
  let avaliablePlayers = players.map((x) => {
    // console.log('x: ',x);
    if (x.drafted === false) {
      return <PlayerCell
        key={x.id}
        player={x}
        onSinglePlayerClicked={() => selectPlayer(x)}
      />
    }
  })

  let playersDrafted = draftedPlayers.map((x) => {
    if (x.drafted === true) {
      return <PlayerCell
        key={x.id}
        player={x}
        onSinglePlayerClicked={() => selectPlayer(x)}
      />
    }
  });

  return (

    <div players={players}>
      Avaliable Players
      {(players.length > 0) ? avaliablePlayers : "Loading"}
      Drafted Players
      {playersDrafted}
    </div>
  )
}

const mapStateToProps = (state) => ({
  players: state.loadAllDraftPlayers,
  draftedPlayers: state.draftPlayer,
});

export default connect(
  mapStateToProps,
  { selectPlayer }
)(Draft);