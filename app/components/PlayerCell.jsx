import React from 'react';
import { connect } from 'react-redux';
import '../styles/css/playercell.css';

const PlayerCell = (props) => {
  const { onSinglePlayerClicked, player, positionRank } = props;
  return (
    <div onClick={onSinglePlayerClicked} className='playerCell'>
      <span className='playerCell-rank'>
        Rank:&nbsp;{player.rank}&nbsp;
      </span>
      <span className='playerCell-name'>
      {player.firstName}&nbsp;{player.lastName}&nbsp;
      </span>
      <span className='playerCell-position'>
      {player.position}&nbsp;
      </span>
      <span className='playerCell-team'>
      {player.team}
      </span>
    </div>
  )
}

export default PlayerCell;