var express = require('express');
var app = express();

var session = require('express-session');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set(session({
    secret: 'countersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

app.get('/', function(req,res) {
    if(!session.hasOwnProperty('count')) {
        session.count = 1;
    } 
    else {
        session.count += 1;
    }
    res.render('counter', {count: session.count});
});

app.listen(8000, function() {
    console.log("Now listening on port 8000...");
})

