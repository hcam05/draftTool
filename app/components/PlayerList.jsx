import React from 'react';

const PlayerList = (postion) => {

  return (
    <div className={`all${postion}`}>
      <span className='draftBoard-header'>
        {position}
      </span>
      {(players.length > 0) ? `all${position}` : "Loading"}
    </div>
  )
}

export default PlayerList;