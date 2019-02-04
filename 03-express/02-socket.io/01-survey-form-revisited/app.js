var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname+'/static'));

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

const server = app.listen(8000, function() {
    console.log("Listening on port 8000...");
});

const io = require('socket.io')(server);
io.on('connection', function(socket) {
    socket.on('posting_form', function(data){
        socket.emit('updated_message', {msg: "You emitted the following information to the server: {name: " + data.name + ", location: " + data.location + ", language: " + data.language + ", comment: " + data.comment});
        socket.emit('random_number', {number: Math.floor(Math.random()*100)});
    });
});
