import React from 'react';
import { connect } from 'react-redux';
import DraftBoardCell from '../components/DraftBoardCell.jsx';

import { Link } from 'react-router-dom';

const DraftBoard = ({ draftedPlayers }) => {

  console.log(draftedPlayers);

  let draftedPlayersBoard = draftedPlayers.map((x, i) => {
    if (x.drafted === true) {
      return <DraftBoardCell
        key={x.id}
        player={x}
        number={i}>
      </DraftBoardCell>
    }
  });

  return (
    <div className='draftBoard'>
      <Link to='/'>Draft Tool</Link>
      <Link to='/setup'>Setup</Link>
      Draft Board
      {draftedPlayersBoard}
    </div>
  )
}

const mapStateToProps = (state) => ({
  draftedPlayers: state.draftPlayer
})

export default connect(
  mapStateToProps
)(DraftBoard)