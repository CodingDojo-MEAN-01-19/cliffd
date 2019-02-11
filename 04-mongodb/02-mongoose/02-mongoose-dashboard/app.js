var express = require('express');
var session = require('express-session');
const flash = require('express-flash');
var body_parser = require('body-parser');
var mongoose = require('mongoose');

// SETUP

mongoose.connect('mongodb://localhost/dog_db');

var dog_schema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    breed: {type: String, required: true, minlength: 2},
    color: {type: String, required: true, minlength: 2},
    age: {type: String, required: true, min: 1, max: 30},
   }, {timestamps: true});

mongoose.model('Dog', dog_schema);
   
var dog = mongoose.model('Dog');

var app = express();
app.use(session({
    secret: 'dogsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(body_parser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//ROUTES

// GET '/' Displays all of the dogs.
app.get('/', function(req, res) {
    dog.find({}, function(err, dogs) {
        if(err) {
            console.log("There was an error in retreiving the dog records!");
        }
        else {
            console.log(dogs);
            res.render('dog_list', {dogs: dogs});
        }
    });
});

// GET '/dogs/new' Displays a form for making a new dog.
app.get('/dogs/new', function(req, res) {

    res.render('dog_form');

});

// GET '/dogs/:id' Displays information about one dogs.
app.get('/dogs/:id', function(req, res) {

    dog.find({_id: req.params.id}, function(err, dog_record) {
        if(err) {
            console.log("There was an error in retreiving the dog record detail!");
        }
        else {
            res.render('dog_detail', {dog_record: dog_record});
        }
    });

});

// POST '/dogs' Should be the action attribute for the form in the above route (GET '/dogs/new').
app.post('/dogs', function(req,res){

    var dog_instance = new dog();
    
    dog_instance.name = req.body.name;
    dog_instance.breed = req.body.breed;
    dog_instance.color = req.body.color;
    dog_instance.age = req.body.age;

    dog_instance.save(function(err){
        if(err) {
            console.log("There was an error saving!!")
            for(var key in err.errors){
                req.flash('dog_errors', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/dogs/new');
        }
        else {
            res.redirect('/');
        }
    });

});

// GET '/dogs/edit/:id' Should show a form to edit an existing dog.
app.get('/dogs/edit/:id', function(req, res) {
    dog.findOne({_id: req.params.id}, function(err, dog_instance) {
        if(err) {
            console.log("error retreiving record!");
            res.render('dog_list');
        }
        else {
            res.render('dog_edit_form', {dog: dog_instance});
        }
    });
});

// POST '/dogs/:id' Should be the action attribute for the form in the above route (GET '/dogs/edit/:id').
app.post('/dogs/:id', function(req,res){

    console.log("In edit POST");
    console.log(req.params.id);
    console.log(req.body);

    dog.findOne({_id: req.params.id}, function(err, dog_instance) {
        if(err) {
            console.log("Error retrieving existing dog record");
        }
        else {
            console.log(dog_instance);
            dog_instance.name = req.body.name;
            dog_instance.breed = req.body.breed;
            dog_instance.color = req.body.color;
            dog_instance.age = req.body.age; 
            dog_instance.save(function(err) {
                if(err) {
                    console.log("Error updating existing dog record.")
                    console.log(err);
                } 
                else {
                    res.redirect('/');
                }
            });
        }
    });
});

// POST '/dogs/destroy/:id' Should delete the dog from the database by ID.
app.post('/dogs/destroy/:id', function(req,res){

    dog.remove({_id: req.params.id}, function(err){
        if(err) {
            console.log("There was an error saving!!")
            for(var key in err.errors){
                req.flash('dog_errors', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/dogs/new');
        }
        else {
            res.redirect('/');
        }
    });

});

app.listen(8000);