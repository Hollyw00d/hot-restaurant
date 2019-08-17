// Packages
var express = require('express');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Custom table reservation
var customerTableReservations = [
    {
        customerName: 'Lady Gaga',
        phoneNumber: '206-555-1212',
        customerEmail: 'lady@gaga.com',
        customerId: '12345'
    }
];

var customerTableWaitList = [];

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, 'view.html'));
});

app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, 'make.html'));
});

app.get('/api/tables', function(req, res) {
    res.json(customerTableReservations);
});

app.get('/api/waitlist', function(req, res) {
    res.json(customerTableWaitList);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});