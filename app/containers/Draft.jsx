import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux'
import reducers from '../redux/reducers/reducers';

import PlayerCell from '../components/PlayerCell.jsx';
import DraftedPlayers from '../containers/DraftedPlayers.jsx';


const Draft = ({ players }) => {

  let avaliablePlayers = players.map((x) => {
    return <PlayerCell key={x.id} props={x} />
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

export default connect(mapStateToProps)(Draft);