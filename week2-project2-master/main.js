// JavaScript Looping Exercise

// 1. Output each item in the following Array to your console:
console.log("Question 1");
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for (i=0; i<livingRoom.length; ++i){
  console.log(livingRoom[i]);
}

// 2. Using a loop, log numbers 22-33 in the console.
console.log("Question 2");
for (i=22; i<34; ++i) {
  console.log(i);
}
// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
console.log("Question 3");
for (i=75; i<101; i+=5) {
  console.log(i);
}
// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
//     Use this as an example:
//        var counter = 0;
//        var num = 2;

//        while (num < 1000) {
//        num += num;
//        counter++;
//        }

//        console.log(counter);
console.log("Question 4");

var num = 0;

while (num<5){
  console.log("This is how a professional loops.");
  ++num;
}
// 5. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1]
console.log("Question 5")
var big = largestNum[0];
for (i=0; i<largestNum.length; i++)
if (largestNum[i] > big){
  big = largestNum[i]
}
console.log("The largest number is "+ big);
// 6. Separately, use both a for loop and while loop to do the same thing.
console.log("Question 6")

//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.
var cats = 0;
for (cats=10; cats<101; cats+=25) {
  console.log("At home, I have " +cats+ " cats.")
}
var Cats=10;
while (Cats<101) {
  console.log("At home, I have " +Cats+ " cats.")
  Cats+=25
}
// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];
console.log("Question 7")
for (i=0; i < numArray.length; ++i){
  if ((numArray[i] % 2) !=0){
    console.log("Odd");
  } else {
    if (numArray[i]>10){
      console.log("Even and greater than 10");
    } else {
      console.log("even");
    }
  }
}


// 8. Given the following Array, create variable primeArray with the value [2, 7, 17, 29, 41, 53, 67, 79, 97]
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,];
var primeArray = [];
console.log("Question 8")
for (i=0; i<primes.length; i+=3) {
  primeArray.push(primes[i]);
  console.log(primeArray+", ");
}
console.log(primeArray);
// 9. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######
console.log("Question 9");
var numLine = "#";
i=0;
while (i < 7) {
console.log(numLine);
  numLine += "#";
  ++i;
}

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
//var human = prompt("Type your choice");
console.log('Question 10');
var human = "rock";
// 11. Define an array called "choices" that consists of "paper", "rock", and "scissors".
console.log('Question 11');
var choices = ['paper', 'rock', 'scissors'];
// 12. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.
console.log('Question 12');
var computer = Math.random();
// 13. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console
console.log('Question 13-14');
if (computer < .34){
  computer= choices[1];
} else if (computer<.67){
  computer = choices[0];
} else {
  computer = choices[2];
}
console.log(computer);
// 14. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)
// 15. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank
console.log('Question 15 - 17');
if (human === "rock") {
  if (computer === "rock"){
    console.log("it is a tie");
  } else if (computer === "scissors"){
    console.log("You win");
  } else {
    console.log("I win");
  }
} else if (human === "paper"){
  if (computer === "paper"){
    console.log("it is a tie");
  } else if (computer === "rock"){
    console.log("You win");
  } else {
    console.log("I win");
  }
} else {
  if (computer === "scissors"){
    console.log("it is a tie");
  } else if (computer === "paper"){
    console.log("You win");
  } else {
    console.log("I win");
  }
}


// 16. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.
// 17. Give yourself a high five for completing your first javascript game!
// 18. Use the game you made above and rework it using a switch statement.
console.log('Question 18 - 19');
if (human === "rock" || human === "scissors" || human === "paper" ){
var difference = computer.length - human.length;
console.log(difference);
  switch (difference) {
    case 0:
     console.log("it is a tie");
     break;
    case -1:
    case -3:
    case 4:
     console.log("You win");
     break;
    default:
     console.log("I win");
     break;
  }
} else {
  console.log("Seriously?  You don't know how to play Ro Sham bo?");
}
// 19. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// HEADS OR TALES?
// 20. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 21. Use a while loop to keep flipping the coin until you get tails.
console.log('Question 21');
var counter = 0;
var flip = ['heads', 'tails'];
while (flip[coin]=== "heads") {
  coin = Math.floor(Math.random() * 2);
  console.log(flip[coin]);
  counter++;
}

console.log(counter);
// 22. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
console.log('Question 22');
for (i=1; i<101; i++) {
  if (i%3 === 0 && i%5===0){
    console.log('FizzBuzz');
  } else if (i%5 === 0){
    console.log('Buzz');
  } else if (i%3 === 0){
    console.log('Fizz');
  } else {
    console.log(i);
  }
}

// CHESS BOARD
// 23. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
console.log("Question 23");
var chessBoard=["#"," "];
var size = 2;
var stringEven = chessBoard[0]+chessBoard[1];
var stringOdd = chessBoard[1]+chessBoard[0];
if (size % 2 === 0) {
  var multiplier = size/2;
  console.log("multiplier is " +multiplier);
  if (multiplier === 1) {
    console.log(stringOdd);
    console.log(stringEven);
  } else {
  for (i=1; i<multiplier; ++i){
  stringEven += chessBoard[0]+chessBoard[1];
  stringOdd += chessBoard[1]+chessBoard[0];
  }
  for (i=0; i<multiplier; ++i){
  console.log(stringOdd);
  console.log(stringEven);
} }
} else {
  multiplier = (size -1)/2;
  if (multiplier ===1){
    console.log(stringOdd += chessBoard[1]);
    console.log(stringEven += chessBoard[0]);
    console.log(stringOdd);
  }else{
  for (i=1; i<multiplier; ++i){
  stringEven += chessBoard[0]+chessBoard[1];
  }
  stringEven += chessBoard[0];
  for (i=1; i<multiplier; ++i){
  stringOdd += chessBoard[1]+chessBoard[0];
  }
  stringOdd += chessBoard[1];
  for (i=0; i<multiplier; ++i){
  console.log(stringOdd);
  console.log(stringEven);
  }
  console.log(stringOdd);
}}

var chessBoard1=[' ','#'];
var size1 = 8;
var stringEven1 = " ";
if(size1 > 1){
  for (i=1; i<size1; ++i){
  var x=chessBoard1[i % 2];
  stringEven1 += x;
}
}
var stringOdd1 = "#";
if(size1 > 1){
  for (i=1; i<size1; ++i){
  var x=chessBoard1[(i+1) % 2];
  stringOdd1 += x;
}
}
if (size1 % 2 === 0){
var multiplier1 = (size1/2)
} else {
  var multiplier1 = ((size1-1)/2)
}
for (i=0; i<multiplier1; ++i){
console.log(stringOdd1);
console.log(stringEven1);
}
if((size1 % 2) === 1){
  console.log(stringOdd1);
}
//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.
