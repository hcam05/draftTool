import React from 'react';

const DraftedPlayers = (props) => {
  const { onDraftedPlayerClick, player } = props;
  return (
    <div onClick={onDraftedPlayerClick}>
      Rank:&nbsp;{player.rank}&nbsp;
      {player.firstName}&nbsp;{player.lastName}&nbsp;
      {player.position}&nbsp;
      {player.team}
    </div>
  )
}

export default DraftedPlayers;