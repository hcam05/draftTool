import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux'
import PlayerCell from '../components/PlayerCell.jsx';
import DraftedPlayers from './DraftedPlayers.jsx';
import { selectPlayer, undoDraft } from '../redux/actions/index';

const Draft = ({ players, draftedPlayers, selectPlayer, undoDraft }) => {
  let avaliablePlayers = players.map((x) => {
    if (x.drafted === false) {
      return <PlayerCell
        key={x.id}
        player={x}
        onSinglePlayerClicked={() => selectPlayer(x)}
      />
    }
  });

  let playersDrafted = draftedPlayers.map((x) => {
    if (x.drafted === true) {
      return <DraftedPlayers
        key={x.id}
        player={x}
      />
    }
  });

  let allRB = players.map((x) => {
    if (x.position === 'RB' && x.drafted === false) {
      return <PlayerCell
        key={x.id}
        player={x}
        onSinglePlayerClicked={() => selectPlayer(x)}
      />
    }
  });

  let allWR = players.map((x) => {
    if (x.position === 'WR' && x.drafted === false) {
      return <PlayerCell
        key={x.id}
        player={x}
        onSinglePlayerClicked={() => selectPlayer(x)}
      />
    }
  });

  let allQB = players.map((x) => {
    if (x.position === 'QB' && x.drafted === false) {
      return <PlayerCell
        key={x.id}
        player={x}
        onSinglePlayerClicked={() => selectPlayer(x)}
      />
    }
  });

  let allTE = players.map((x) => {
    if (x.position === 'TE' && x.drafted === false) {
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
      QB
      {(players.length > 0) ? allQB : "Loading"}
      WR
      {(players.length > 0) ? allWR : "Loading"}
      RB
      {(players.length > 0) ? allRB : "Loading"}
      TE
      {(players.length > 0) ? allTE : "Loading"}
      Drafted Players
      <button onClick={() => playersDrafted.length > 0
        ? undoDraft(playersDrafted[playersDrafted.length - 1].props.player)
        : console.log('no players drafted')}>
        Undo
        </button>
      {playersDrafted}
    </div>
  )
}

const mapStateToProps = (state) => ({
  players: state.allPlayers,
  draftedPlayers: state.draftPlayer,
  undoDraft: state.undoDraft
});

export default connect(
  mapStateToProps,
  { selectPlayer, undoDraft }
)(Draft);