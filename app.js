var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = express();
var todoRoute = require('./routes/todo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/todo').then(() => {
    console.log("Connected!");
}).catch(err => {
    console.log(err);
    console.log("Error in connecting");
});
mongoose.set('debug',true);
mongoose.Promise = Promise;
app.use("/api/todo", todoRoute);
module.exports = app;