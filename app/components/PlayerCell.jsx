import React from 'react';
import { connect } from 'react-redux';
import '../styles/css/playerCell.css';

const PlayerCell = (props) => {
  const { onSinglePlayerClicked, player, positionRank } = props;
  return (
    <div onClick={onSinglePlayerClicked} className='playerCell'>
      Rank:&nbsp;{player.rank}&nbsp;
      {player.firstName}&nbsp;{player.lastName}&nbsp;
      {player.position}&nbsp;
      {player.team}
    </div>
  )
}

export default PlayerCell;