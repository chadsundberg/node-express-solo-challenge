$(document).ready(function() {
  console.log('jquery loaded');


  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(response){
      console.log('response', response);
      addJokes(response);
    },
      error: function(response){
        console.log('error');
      }
    });

  // var newJoke = req.body;
  //   var whoseJoke =
  //   var jokeQuestion =
  //   var punchLine =


$('#newJokeToAdd').on('click', function (){
  var newJokeObject = {};
  newJokeObject.whoseJoke = $('#newJokeAuthor').val();
  newJokeObject.jokeQuestion = $('#newJokeQuestion').val();
  newJokeObject.punchLine = $('#newJokepunchLine').val();
  console.log(newJokeObject);
  $.ajax({
    type: 'POST',
    url: '/jokes/new',
    data: newJokeObject,
    success: function(response){
      console.log(response);
      $('.jokeList').empty();
      addJokes(response);
    },
    error: function(response) {
      console.log('error');
    }
  });
});

function addJokes(response) {
  for (var i = 0; i < response.length; i++) {
    console.log(response[i]);
    $('.jokeList').append(
      '<div class ="joke">' +
        '<h2>' + response[i].whoseJoke + '\'s Joke</h2>' +
        '<p>' + response[i].jokeQuestion + '</p>' +
        '<p>' + response[i].punchLine + '</p>' +
        '</div>'
    );
  }
}


});
