module.exports = (app) => {
    const tokens = require('../controllers/token.controller.js');
    var Client = require('node-rest-client').Client;
 
    var client = new Client();

    // Create a new Note
    app.post('/tokenpairs', function (req, res) {
        //res.send('hello, user!')
        // direct way
        client.get("  https://api.ercdex.com/api/token-pairs/1 ", function (data1, response) {
            // parsed response body as js object 
            console.log(data1);
            // raw response 
            //console.log(response);
            //res.json(data);
            let x = [];
            for(var i = 0; i < data1.length;i++){
                //console.log(data[i]);
            tokens.test(data1[i]).then(data => {
                x.push(data);
                //console.log(x);
                if(x.length == data1.length)
                    res.json(x);
            }).catch(err => {
                console.log(err);
                //return "Some error occurred while creating the TokenPair.";
                    //res: err.message || "Some error occurred while creating the Note."
                });
            }

            //res.json(data);
        });
    });

    // Retrieve all Notes
    app.get('/tokenpairs', tokens.findAll);

    // Retrieve a single Note with noteId
   // app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
   // app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    //app.delete('/notes/:noteId', notes.delete);
}