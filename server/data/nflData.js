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

// NFL DB DATA // 

const getNflDbData = (req, res, err) => {
  DraftPlayer.find({ 'position': ['WR', 'QB', 'TE', 'RB', 'DEF'], 'rank': { $gte: 1, $lte: 400 } })
    .sort({ 'rank': 1 })
    // .limit(20)
    .exec((err, players) => {
      if (err) res.send('something broke');
      res.send(JSON.stringify(players));
    });
  }
  
module.exports = getNflDbData;
