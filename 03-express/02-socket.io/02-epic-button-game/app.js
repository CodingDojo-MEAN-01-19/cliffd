var express = require('express');
var io = require('socket.io');

var app = express();

var server = app.listen(8000);
var io = require('socket.io')(server);

var num_epic_pressed = 0;

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

io.on('connection', function(socket){
    socket.on('epic', function(data){
        num_epic_pressed += 1;
        io.emit('epic_update', {epic_val: num_epic_pressed});
    });

    socket.on('reset', function(data){
        num_epic_pressed = 0;
        io.emit('epic_update', {epic_val: num_epic_pressed});
    });
});

