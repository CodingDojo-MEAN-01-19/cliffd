var express = require('express');
var session = require('express-session');
const flash = require('express-flash');
var body_parser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quote_db');

var quote_schema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 2}
   }, {timestamps: true});

mongoose.model('Quote', quote_schema);
   
var quote = mongoose.model('Quote');

var app = express();
app.use(session({
    secret: 'surveysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(body_parser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/quotes', function(req,res) {
    quote.find({}, function(err, quotes) {
        if(err) {
            console.log("There was an error in retreiving the quotes!");
        }
        else {
            res.render('quotes', {quotes: quotes});
        }
    });
});

app.post('/quotes', function(req,res){
    var quote_instance = new quote();
    quote_instance.name = req.body.name;
    quote_instance.quote = req.body.quote;

    quote_instance.save(function(err){
        if(err) {
            console.log("There was an error saving!!")
            for(var key in err.errors){
                req.flash('quote_errors', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/');
        }
        else {
            res.redirect('/quotes');
        }
    });
});

app.listen(8000);