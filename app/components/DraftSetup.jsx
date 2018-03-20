import React from 'react';
import { connect } from 'react-redux';

const DraftSetup = ({ numTeams, numPlayers, teamNames, setNumTeams, setNumPlayerSlots, setAllTeamNames }) => {

  const numOptions = () => {
    let optionsArray = []
    for (let i = 0; i < 20; i += 1) {
      optionsArray.push(
        <option value="i">i</option>
      )
      return optionsArray;
    }
  }


  return (
    <div className='draftSetup'>
      {/* Set Teams */}
      <select name='numTeams' onSelect={() => setNumTeams()}>
        {numOptions}
      </select>
      {/* Set Number of Players */}
      <select name="numPlayers" onSelect={()=> setNumPlayerSlots()}>
        {numOptions}
      </select>
      {/* Set Teams */}
      Set Teams
    </div>
  )
}

const mapStateToProps = (state)  => ({
  numTeams: state.numTeams,
  numPlayers: state.playerSlots,
  teamNames: state.teamNames
});

export default connect(
  mapStateToProps
  // {
  //   setNumTeams,
  //   setNumPlayerSlots,
  //   setAllTeamNames
  // }
)(DraftSetup);