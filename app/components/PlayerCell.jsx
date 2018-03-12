import React from 'react';

const PlayerCell = (playerStats) => {
  // console.log(playerStats.props);
  return (
    <div onClick={()=>console.log('clicked',playerStats.props.id)}>
      Rank:&nbsp;{playerStats.props.rank}&nbsp;
      {playerStats.props.firstName}&nbsp;{playerStats.props.lastName}&nbsp;
      {playerStats.props.position}&nbsp;
      {playerStats.props.team}
   </div>
  )
}

export default PlayerCell;