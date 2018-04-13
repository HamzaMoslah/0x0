const mongoose = require('mongoose');

const TokenSchema = mongoose.Schema({
    minimumQuantity : String,
    baseVolume : String,
    quoteVolume : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Tokens', TokenSchema);