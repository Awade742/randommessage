var quotes = ["There are all kinds of courage. It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.", "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.", "After all, to the well-organised mind, death is but the next great adventure.", "It does not do to dwell on dreams and forget to live.", "It is our choices, Harry, that show what we truly are, far more than our abilities.", "I solemnly swear that I am up to no good."]
var button = $('button');
var quotehere = $('.quotehere');

button.on('click', randomizer);

function randomizer(){
  event.preventDefault();
  var random = Math.floor(Math.random()*(quotes.length-1));
  var newquote = quotes[random];
  quotehere.text(newquote);
}
