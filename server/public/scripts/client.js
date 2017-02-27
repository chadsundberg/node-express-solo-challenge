$(document).ready(function() {
  console.log('jquery loaded');

getJokeData();
function getJokeData(){
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(response){
      console.log('response', response);
      $('.newJoke').empty();
      for (var i = 0; i < jokes.length; i++) {
        $('.newJoke').append('<li>' + jokes[i] + '<li>');
      }
    }
  });
};
  // var newJoke = req.body;
  //   var whoseJoke =
  //   var jokeQuestion =
  //   var punchLine =


$('#newJokeToAdd').on('click', function (){
  var newJokeObject = {};
  newJokeObject.whoseJoke = $('#newJokeAuthor').val();
  newJokeObject.jokeQuestion = $('#newJokeQuestion').val();
  newJokeObject.punchLine = $('#newJokepunchLine').val();
  $.ajax({
    type: 'POST',
    url: '/joke/new',
    data: newJokeObject,
    success: function(response){
      console.log(response);
      getJokeData();
    },
    error: function(response) {
      console.log('error');

    }
  });
});

});
