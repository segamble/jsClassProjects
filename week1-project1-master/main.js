//Week 1 - Project 1


// Log all answers to the console and write them to document
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// =======================================================

//1. Log your name to the console (as a string).

console.log("Question 1");
console.log("Susan");
document.writeln('#1 console.log("Susan")<br>');

//2. Declare a variable called 'name', and then log it to the console.
console.log("Question 2");
document.writeln('#2 console.log(name)<br>');
var name = 'George';
console.log(name);
//3. Declare two variables with number values.
//   Add, subtract, multiply and divide them.
console.log("Question 3");
document.writeln('#3<br>');
var x = 2;
var y = 3;
console.log(x+y);
document.writeln('console.log(x+y)<br>');
console.log(x-y);
document.writeln('console.log(x-y)<br>');
console.log(x*y);
document.writeln('console.log(x*y)<br>');
console.log(x/y);
document.writeln('console.log(x/y)<br>');
//4. Declare two variables with string values.
//   Create a third variable that concatenates them.
console.log("Question 4");
document.writeln('#4:  I\'m bored putting everything in the document.  Watch the console.<br>' );
var greeting = 'Hey there!';
var epithet = 'bike-riding, book-reading, earphones-in, texting guy.';
var warning = greeting + ' ' + epithet;
console.log(warning);

//5. Add, subract, multiply and divide the strings '5' and '3'.
//   Observe the results and know how to explain the results if asked.
console.log('Question 5');
console.log('5'+'3');
console.log('5'-'3');
console.log('5'*'3');
console.log('5'/'3');

//6. Create a prompt that asks a user to pick a number.
//   Then double the answer.
console.log('Question 6');
document.writeln('Pick a number <input id="userNumber"></input><button id="button">Double it</button><br />');
document.getElementById('button').onclick=function(){
  var number=document.getElementById('userNumber').value;
  var result = number * 2;
  console.log(result);
}

//7. Create a custom alert.
console.log('Question 7');
alert("This is fun!");

//8. Declare three variables called length, width and height.
//   Calculate area and volume.
console.log("Question 8");
var length = 5;
var width = 2;
var height = 1;
var area = length * width;
console.log(area);
var volume = length * width * height;
console.log(volume);

//9. Ask for a user's name, age and city.
//   In a single command display/log the sentence:
//   "My name is...I'm....years old, and I live in....."
console.log('Question 9');
document.writeln('What is your name? <input id="name"></input><br />What is your age? <input id="age"></input><br />Where do you live? <input id="city"></input><br /><button id="myButton">Submit</button>');
document.getElementById('myButton').onclick = function(){
  var myName=document.getElementById('name').value;
  var myAge=document.getElementById('age').value;
  var myCity=document.getElementById('city').value;
  console.log("My name is "+myName+", I'm "+myAge+" years old, and I live in "+myCity);
}
//10. Create an alert that uses the response from a prompt.
console.log("Question 10");
alert(volume);
document.writeln('<br />This should be an alert <input id="alertText"></input><button id="alertThis">Alert This</button>');
document.getElementById('alertThis').onclick= function(){
  var alertText = document.getElementById('alertText').value;
  alert(alertText);
}
