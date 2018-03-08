import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux'
import reducers from '../redux/reducers/reducers';

const Draft = ({players}) => {
  return (
    <div players={players}>
      Draft
    </div>
  )
}

const mapStateToProps = (state) => ({
  players: state.allDraftPlayers
});

export default connect(mapStateToProps)(Draft);