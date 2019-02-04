var express = require('express');
var io = require('socket.io');

var app = express();

var server = app.listen(8000);
var io = require('socket.io')(server);

var session = require('express-session');
var all_chats = [];

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.set(session({
    secret: 'chatsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

app.get('/', function(req, res) {
    res.render('index');
});

io.on('connection', function(socket){
    socket.on('login', function(data){
        session.username = data.username;
        socket.emit('init_board', {all_chats: all_chats});
    });

    socket.on('send', function(data){
        all_chats.push(session.username + ": " + data.msg)
        io.emit('chat_update', {msg: session.username + ": " + data.msg});
    });
});

