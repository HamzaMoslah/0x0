const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

var Client = require('node-rest-client').Client;
 
var client = new Client();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});


// define a simple route
app.get('/', (req, res) => {
	// direct way 
	client.get("  https://api.ercdex.com/api/token-pairs/1 ", function (data, response) {
	    // parsed response body as js object 
	    //console.log(data);
	    // raw response 
	    //console.log(response);
	    res.json(data);
	});
    //res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('./app/routes/token.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});


// registering remote methods 
/*client.registerMethod("jsonMethod", "https://api.ercdex.com/api/standard/1/v0/token_pairs", "GET");
 
client.methods.jsonMethod(function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);
});*/