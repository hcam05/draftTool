import React from 'react';
// import { connect } from 'react-redux';
import '../styles/css/playercell.css';

const DraftedPlayerCell = (props) => {
  const { onSinglePlayerClicked, player, positionRank } = props;
  return (
    <div onClick={onSinglePlayerClicked} className={`playerCell ${(() => {
      switch (player.position) {
        case 'RB':
          return 'RB'
        case 'QB':
          return 'QB'
        case 'WR':
          return 'WR'
        case 'TE':
          return 'TE'
        case 'DEF':
          return 'DEF'
        default:
          return null
      }
    })()}`}>
      <span className='playerCell-rank'>
        {positionRank}.
      </span>
      <span className='playerCell-name'>
      {player.firstName}&nbsp;{player.lastName}&nbsp;
      </span>
      <span className='playerCell-team'>
      {(player.team === '') ? 'N/A' : player.team}
      </span>
    </div>
  )
}

export default DraftedPlayerCell;