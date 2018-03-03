const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DraftPlayerSchema = new Schema({
    id: { type: Number, index: { unique: true } },
    firstName: String,
    lastName: String,
    position: String,
    team: String,
    rank: Number,
    auction: Number,
    stock: String,
})

const DraftPlayer = mongoose.model('DraftPlayer', DraftPlayerSchema);

module.exports = DraftPlayer;
