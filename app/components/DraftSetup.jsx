import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { incrementTeams, decrementTeams, incrementPlayers, decrementPlayers, setAllTeamNames, createDraftBoard } from '../redux/actions/index';

import '../styles/css/draftsetup.css';

const DraftSetup = ({ numTeams, numPlayers, teamNames, incrementTeams, decrementTeams, incrementPlayers, decrementPlayers, setAllTeamNames, createDraftBoard }) => {

  return (
    <div>
      <div className='draftSetup'>
        {/* Set Teams */}
        <Link to='/'>Draft Tool</Link>
        <br />
        <Link to='/board'>Board</Link>
        <br />
        Number of Teams &nbsp;
        <a className='draftSetup-button' onClick={() => decrementTeams()}>-</a> {numTeams} <a className='draftSetup-button' onClick={() => incrementTeams()}>+</a>
        <br />
        {/* Set Number of Players */}
        Total Players &nbsp;
        <a className='draftSetup-button' onClick={() => decrementPlayers()}>-</a> {numPlayers} <a className='draftSetup-button' onClick={() => incrementPlayers()}>+</a>
        <br />
        <a onClick={()=> createDraftBoard(numPlayers, teamNames)}>Create Board</a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  numTeams: state.numTeams,
  numPlayers: state.playerSlots,
  teamNames: state.teamNames,
  draftBoard: state.draftBoard
});

export default connect(
  mapStateToProps,
  {
    incrementTeams,
    decrementTeams,
    incrementPlayers,
    decrementPlayers,
    setAllTeamNames,
    createDraftBoard
  }
)(DraftSetup);