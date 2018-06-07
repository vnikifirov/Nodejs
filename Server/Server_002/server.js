// ------Setup Server------------
// npm install express --save
// npm install body-parser --save
//-------------------------------

// Express is a simple router.
const express = require('express');

// It's gonna automatically take our server and
// parse whatever the user sends to us. 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Dummy Data
var dummyData = [];

// Send data to the user
app.get('/api/get-data', function(request, result) {
    result.json({ data: dummyData });
});

// Get data from the user
app.post('/api/post-data', function(request, result) {
    var new_data = request.body.data;
    // Save a new data retriaved from the user in the server memory
    dummyData.push(new_data);

    // It will send a data back to the user
    result.json(dummyData);
});

// Test for server is running or not.
app.listen(9000, function() {
    console.log('Server is up!');
});