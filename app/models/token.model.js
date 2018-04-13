const mongoose = require('mongoose');

const TokenSchema = mongoose.Schema({
	name : String,
    address : String,
    symbol : String,
    decimals : Number
});

module.exports = mongoose.model('Token', TokenSchema);

const TokenPairSchema = mongoose.Schema({
    tokenA : TokenSchema,
    tokenB : TokenSchema,
    minimumQuantity : String,
    priceDecimals : Number,
    baseVolume : String,
    quoteVolume : String
}, {
    timestamps: true
});

module.exports = mongoose.model('TokenPair', TokenPairSchema);
