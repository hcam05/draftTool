import React from 'react';
import axios from 'axios';

const playerDataRoute = 'http://localhost:9000/nflapidata';
class Draft extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      loading: true,
    }
  }

  fetchPlayers() {
    axios.get('/nfldata')
      .then((resp) => {
        console.log(resp);
        this.setState({ Player: resp, loading: false });
      })
      .catch((err) => console.log(`Error: ${err}`));
  }

  componentDidMount(){
    this.fetchPlayers();
  }

  render(){
    return(
      <div> 
        Draft
      </div>
    )
  }
}

export default Draft;