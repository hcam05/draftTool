// DEPENDENCIES
const isofetch = require('isomorphic-fetch');
const DraftPlayer = require('../db/models/draftPlayerModel'); // Player Model for DB

// DATABASE CONNECTION
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nfl_draft_data');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// NFL API

const getNflApiData = () => {
  for (let offset = 0; offset <= 1900; offset += 100) {
    const nflApiUrl = `http://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&offset=${offset}&format=json`;
    fetch(nflApiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        data.players.forEach((x) => {
          if (DraftPlayer.findOne({ 'id': 'id' })) {
            const plyr = new DraftPlayer(x);
            plyr.id = x.id;
            plyr.firstName = x.firstName;
            plyr.lastName = x.lastName;
            plyr.team = x.teamAbbr;
            plyr.rank = Number(x.rank);
            plyr.auction = x.auction;
            plyr.stock = x.stock;
            plyr.position = x.position;
            plyr.save()
              .then(() => {
                console.log('saved in DB');
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
      })
      .catch((err) => console.log(err));
    }
    // mongoose.disconnect((res) => console.log('connection closed'));
}

getNflApiData();
