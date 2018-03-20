import React from 'react';

import '../styles/css/playercell.css';

const DraftedPlayers = (props) => {
  const { player, number } = props;

  return (
    <div className='draftedPlayers'>
      <span className='playerCell-name'>
        <span className='playerCell-firstName'>
          {player.firstName}&nbsp;
        </span>
        <span className='playerCell-lastName'>
          {player.lastName}&nbsp;
        </span>
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

export default DraftedPlayers;