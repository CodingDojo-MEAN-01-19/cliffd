var express = require('express');
var app = express();

app.use(express.static(__dirname+'/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cats', function(request,response) { 
    response.render('cats');
});

app.get('/tommy', function(request,response) {
    var detail_dict = {
        name: "Tommy",
        food: "Fish",
        age: "3",
        sleeping_spots: ["Rug", "Couch"]
    }


    response.render('detail', {details: detail_dict});
});

app.get('/kitty', function(request,response) {
    var detail_dict = {
        name: "Kitty",
        food: "Hot Dogs",
        age: "1",
        sleeping_spots: ["Couch", "Bed", "Table"]
    }


    response.render('detail', {details: detail_dict});
});

app.get('/whiskers', function(request,response) {
    var detail_dict = {
        name: "Whiskers",
        food: "Steak",
        age: "8",
        sleeping_spots: ["Chair"]
    }


    response.render('detail', {details: detail_dict});
});

app.listen(8000, function() {
    console.log("Listening on port 8000...")
});