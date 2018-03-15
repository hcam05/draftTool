import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux'
import PlayerCell from '../components/PlayerCell.jsx';
import DraftedPlayers from './DraftedPlayers.jsx';
import Header from './Header.jsx';

import { selectPlayer, undoDraft } from '../redux/actions/index';

import '../styles/css/draftboard.css';

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

  let playersDrafted = draftedPlayers.map((x, i) => {
    if (x.drafted === true) {
      return <DraftedPlayers
        key={x.id}
        player={x}
        number={i}>
      </DraftedPlayers>
    }
  });

  let allRB = players.map((x, i) => {
    if (x.position === 'RB' && x.drafted === false) {
      return <PlayerCell
        key={x.id}
        player={x}
        onSinglePlayerClicked={() => selectPlayer(x)}
        positionRank={i}
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

  let allDEF = players.map((x) => {
    if (x.position === 'DEF' && x.drafted === false) {
      return <PlayerCell
        key={x.id}
        player={x}
        onSinglePlayerClicked={() => selectPlayer(x)}
      />
    }
  });


  return (
    <div className='app'>
      <Header undoDraftOnClick={() => playersDrafted.length > 0
        ? undoDraft(playersDrafted[playersDrafted.length - 1].props.player)
        : console.log('no players drafted')} />
      <div players={players} className='draftBoard'>
        <div className='allPlayers'>
          <span className='draftBoard-header'>
            Avaliable Players
        </span>
          {(players.length > 0) ? avaliablePlayers : "Loading"}
        </div>
        <div className='allQB'>
          <span className='draftBoard-header'>
            QB
        </span>
          {(players.length > 0) ? allQB : "Loading"}
        </div>
        <div className='allWR'>
          <span className='draftBoard-header'>
            WR
      </span>
          {(players.length > 0) ? allWR : "Loading"}
        </div>
        <div className='allRB'>
          <span className='draftBoard-header'>
            RB
        </span>
          {(players.length > 0) ? allRB : "Loading"}
        </div>
        <div className='allTE'>
          <span className='draftBoard-header'>
            TE
        </span >
          {(players.length > 0) ? allTE : "Loading"}
        </div>
        <div className='allDEF'>
          <span className='draftBoard-header'>
            DEF
        </span >
          {(players.length > 0) ? allDEF : "Loading"}
        </div>
        <div className='allDraftedPlayers'>
          <div className='draftBoard-header'>
            Drafted Players
          </div>
          {playersDrafted}
        </div>
      </div>
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