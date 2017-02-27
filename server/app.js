var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 3000;



// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "Went to the zoo the other day. It only had one dog in it.",
    punchLine: "It was shih tzu."
  }
];

// static file requests
app.use(express.static('server/public/views'));
app.use(express.static('server/public/scripts'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes
app.get('/', function(req, res) {  // node has already created this req and res object
  // res.send is necessary to always give a response from the server.
  res.send(jokes);
});

app.post('jokes/new', function(req, res){  // this is the syntax for router.post
  var newestJoke = req.body;  //data() on the client side become req.body here.
  if (newestJoke.whoseJoke == '') {
    res.sendStatus(400);
  } else {
    jokes.push(newestJoke);
    res.sendStatus(200);  // success message
  }
});




// app.post('/joke/new', function(req, res){
//   var newJoke = req.body;
//   var whoseJoke =
//   var jokeQuestion =
//   var punchLine =    ;
//  res.send();
// });


// Send index.html file
app.get('/views', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

// Start the server!
app.listen(port, function() {
  console.log("Node listening on port " + port);
});
