/* Author: Troy Fournier
    Description: This program is a simple betting game written in
    JavaScript. It has pretty bad odds don't bet on it. */
var prompt = require('prompt-sync')();

var playing = true;
var bankroll = 100;

// // this function contains the logic for the betting game
function game(choice, bet){

  var roll = Math.floor((Math.random() * 10) + 1);

  if (roll == choice){
    var str = ("You win! The roll was: " + roll + " Your guess was: " + choice);
    bet = parseInt(bet);
    bankroll = bankroll + bet;
    console.log(str);
  } else {

    if (((roll + 1) == choice) || ((roll - 1) == choice)){
      var str = "You pushed!";
      console.log(str);
    } else {
      var str = ("You lose! The roll was: " + roll + " Your guess was: " + choice);
      bankroll -= bet;
      console.log(str);
    }
  }
}

while(playing){

  console.log("You currently have $" + bankroll);

  var doYouWantToPlay = prompt("Do you want to play?(yes or no)");
  if (doYouWantToPlay == "no"){
    playing = false;
    break;
  }

  var bet = prompt("Please enter $5 or $10 for your bet.");
  var choice = prompt("Please guess a number between 1..10: ");

  game(choice, bet);

  if (bankroll == 0){

    playing = false;
    var str = ("You're out of money please come back with more.");
    console.log(str);
  }
} 
