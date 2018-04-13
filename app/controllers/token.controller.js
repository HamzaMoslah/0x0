const TokenPair = require('../models/token.model.js');

var Client = require('node-rest-client').Client;
 
var client = new Client();


// Create and Save a new Note
exports.test = (msg) => {
	let res;
	// Create a Note
    const tokenPair = new TokenPair({
    	tokenA : msg.tokenA,
	    tokenB : msg.tokenB,
	    minimumQuantity : msg.minimumQuantity,
	    priceDecimals : msg.priceDecimals,
	    baseVolume : msg.baseVolume,
	    quoteVolume : msg.quoteVolume
    });

    // Save Note in the database
    return tokenPair.save()
    
	//return res;
};

exports.create = (req, res) => {
	//const tokens = require('../controllers/token.controller.js');
	//formattage
    console.log(req.body);
    console.log(req.body.content);
	// Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "TokenPair content can not be empty"
        });
    }

    // Create a Note
    const tokenPair = new TokenPair({
    	//tokenA : req.body.tokenA,
	    //tokenB : req.body.tokenB,
	    minimumQuantity : req.body.minimumQuantity,
	    //priceDecimals : req.body.priceDecimals,
	    baseVolume : req.body.baseVolume,
	    quoteVolume : req.body.quoteVolume
    });

    // Save Note in the database
    tokenPair.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
	TokenPair.find()
    .then( tokens => {
        res.send(tokens);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
//exports.findOne = (req, res) => {

//};

// Update a note identified by the noteId in the request
//exports.update = (req, res) => {

//};

// Delete a note with the specified noteId in the request
//exports.delete = (req, res) => {

//};
