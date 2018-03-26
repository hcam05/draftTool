import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import PlayerCell from '../components/PlayerCell.jsx';
import DraftedPlayerCell from '../components/DraftedPlayerCell.jsx';
import DraftedPlayers from '../components/DraftedPlayers.jsx';
import PlayerList from '../components/PlayerList.jsx';
import Header from './Header.jsx';

import { selectPlayer, undoDraft } from '../redux/actions/index';

import '../styles/css/draftTool.css';

// import DraftSetup from '../components/DraftSetup.jsx';
// import DraftBoard from '../containers/DraftBoard.jsx';

const DraftTool = ({ players, draftedPlayers, selectPlayer, undoDraft }) => {
  const avaliablePlayers = players.map((x) => {
    if (x.drafted === false) {
      return <PlayerCell
        key={x.id}
        player={x}
        onSinglePlayerClicked={() => selectPlayer(x)}
      />
    }
  });

  const positionFilter = (pos, players) => {

    let filteredPos = players.filter((x) => (x.position === pos && x.drafted === false));

    return filteredPos.map((x, i) => {
      return <DraftedPlayerCell
        key={x.id}
        player={x}
        onSinglePlayerClicked={() => selectPlayer(x)}
        positionRank={i + 1}
      />
    });
  }

  const playersDrafted = draftedPlayers.map((x, i) => {
    if (x.drafted === true) {
      return <DraftedPlayers
        key={x.id}
        player={x}
        number={i}
      >
      </DraftedPlayers>
    }
  });

  const allRB = positionFilter('RB', players);
  const allWR = positionFilter('WR', players);
  const allQB = positionFilter('QB', players);
  const allTE = positionFilter('TE', players);
  const allDEF = positionFilter('DEF', players);

  return (
    <div className='app'>
      <Header undoDraftOnClick={() => playersDrafted.length > 0
        ? undoDraft(playersDrafted[playersDrafted.length - 1].props.player)
        : console.log('no players drafted')} />
      <div players={players} className='draftTool'>

        <div className='allPlayers'>
          <span className='draftTool-header'>
            Avaliable Players
          </span>
          {(players.length > 0) ? avaliablePlayers : "Loading"}
        </div>

        <div className='allQB'>
          <span className='draftTool-header'>
            QB
          </span>
          {(players.length > 0) ? allQB : "Loading"}
        </div>

        <div className='allWR'>
          <span className='draftTool-header'>
            WR
          </span>
          {(players.length > 0) ? allWR : "Loading"}
        </div>

        <div className='allRB'>
          <span className='draftTool-header'>
            RB
        </span>
          {(players.length > 0) ? allRB : "Loading"}
        </div>

        <div className='allTE'>
          <span className='draftTool-header'>
            TE
        </span >
          {(players.length > 0) ? allTE : "Loading"}
        </div>

        <div className='allDEF'>
          <span className='draftTool-header'>
            DEF
          </span >
          {(players.length > 0) ? allDEF : "Loading"}
        </div>

        <div className='allDraftedPlayers'>
          <div className='draftTool-header'>
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
)(DraftTool);