import React from 'react';
import { connect } from 'react-redux';
import DraftBoardCell from '../components/DraftBoardCell.jsx';

import { Link } from 'react-router-dom';

import '../styles/css/draftboard.css';

const DraftBoard = ({ draftedPlayers, teamNames, numTeams, playerSlots }) => {

  console.log(draftedPlayers, teamNames, numTeams, playerSlots);

  let board = (playerSlots, teamNames) => {
  }

  let draftedPlayersBoard = draftedPlayers.map((x, i) => {
    if (x.drafted === true) {
      return <DraftBoardCell
        key={x.id}
        player={x}
        number={i}
      >
      </DraftBoardCell>
    }
  });


  let allTeams = teamNames.map((team, i) => {
    return <div key={`team${i}`}>{team}</div>
  });

  return (
    <div>
      <div className='draftBoard'>
        <div className='draftBoard-header'>
          Draft Board
          &nbsp;
          <Link to='/'>Draft Tool</Link>
          &nbsp;
          <Link to='/setup'>Setup</Link>
        </div>

        <br />

        {/* <div className='draftBoard-table'> */}
        <div>
          <div className='draftBoard-table-teamName'>
            {allTeams}
          </div>

          <br />

          <div className='draftBoard-table-draftedPlayers'>
            {draftedPlayersBoard}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  draftedPlayers: state.draftPlayer,
  teamNames: state.teamNames,
  numTeams: state.numTeams,
  playerSlots: state.playerSlots
})

export default connect(
  mapStateToProps
)(DraftBoard);