import React from 'react';
import axios from 'axios';

class Draft extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      loading: true,
    }
  }

  fetchPlayers() {

    this.setState({
      players: allPlayers,
      loading: false,
    })
      .catch((err) => console.log(`Error: ${err}`));
  }
}

export default Draft;