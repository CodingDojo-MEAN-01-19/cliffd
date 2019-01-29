var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'surveysecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('survey');
});

app.post('/process', function(req, res){
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    res.redirect('/results');
});

app.get('/results', function(req, res){
    var results = {
        name: req.session.name,
        location: req.session.location,
        language: req.session.language,
        comment: req.session.comment
    }
    res.render('results', {results: results});
});

app.listen(8000, function() {
    console.log("Listening on port 8000...");
});