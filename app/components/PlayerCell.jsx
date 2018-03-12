import React from 'react';
import { connect } from 'react-redux';

const PlayerCell = (props) => {
  const { onSinglePlayerClicked, player } = props;
  return (
    <div onClick={onSinglePlayerClicked}>
      Rank:&nbsp;{player.rank}&nbsp;
      {player.firstName}&nbsp;{player.lastName}&nbsp;
      {player.position}&nbsp;
      {player.team}
    </div>
  )
}

export default PlayerCell;