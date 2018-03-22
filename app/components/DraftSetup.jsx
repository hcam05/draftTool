import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { incrementTeams, decrementTeams, incrementPlayers, decrementPlayers, setAllTeamNames } from '../redux/actions/index';

import '../styles/css/draftsetup.css';

const DraftSetup = ({ numTeams, numPlayers, teamNames, incrementTeams, decrementTeams, incrementPlayers, decrementPlayers, setAllTeamNames }) => {

  return (
    <div className='draftSetup'>
      {/* Set Teams */}
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
    </div>
  )
}

const mapStateToProps = (state) => ({
  numTeams: state.numTeams,
  numPlayers: state.playerSlots,
  teamNames: state.teamNames
});

export default connect(
  mapStateToProps,
  {
    incrementTeams,
    decrementTeams,
    incrementPlayers,
    decrementPlayers,
    setAllTeamNames
  }
)(DraftSetup);