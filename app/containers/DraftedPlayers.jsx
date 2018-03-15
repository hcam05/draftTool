import React from 'react';

const DraftedPlayers = (props) => {
  const { onDraftedPlayerClick, player, number } = props;
  return (
    <div onClick={onDraftedPlayerClick}>
      #{number+1}&nbsp;
      Rank:&nbsp;{player.rank}&nbsp;
      {player.firstName}&nbsp;{player.lastName}&nbsp;
      {player.position}&nbsp;
      {player.team}
    </div>
  )
}

export default DraftedPlayers;