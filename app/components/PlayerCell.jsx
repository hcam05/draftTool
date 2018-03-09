import React from 'react';

const PlayerCell = (playerStats) => {
  // console.log(playerStats.props);
  return (
    <div>
      Rank:&nbsp;{playerStats.props.rank}&nbsp;
      {playerStats.props.firstName}&nbsp;{playerStats.props.lastName}&nbsp;
      &nbsp;{playerStats.props.position}&nbsp;
      {playerStats.props.team}
   </div>
  )
}

export default PlayerCell;