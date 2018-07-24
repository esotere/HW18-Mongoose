const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = 3000;

var app = express();

const db = require("./models");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));



// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });