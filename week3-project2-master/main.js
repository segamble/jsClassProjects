// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
function minimum(x,y) {
  if (x-y>0){
    return y;
  } else {
    return x;
  }
}
console.log(minimum(534,56));
// 2. Create a new function called minimum3() to find the smallest of three numbers
function minimum3(x,y,z){
  if (x-y<0){
    if (x-z<0){
      return x;
    } else {
      return z;
    }
  } else if(y-z<0) {
    return y
  } else {
    return z;
  }
}

console.log(minimum3(2,1,3));
console.log(minimum3(5,0,8));
// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
function sum(array){
  var total = 0;
  for(i=0;i<array.length;++i){
    total +=array[i];
  }
  return total;
}
numbers = [1, 2, 3, 4, 6, 7, 8,9];
console.log(sum(numbers));
// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
function multiply(array){
  var total = 1;
  for(i=0;i<array.length;++i){
    total *=array[i];
  }
  return total;
}
numbers = [1, 2, 3, 4, 6, 7, 8,9];
numbers1 = [1, 2, 3, 4];
console.log(multiply(numbers));
console.log(multiply(numbers1));
// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
function filterSixPlus(array){
  for (i=0; i<array.length; ++i){
    if(array[i].length > 5){
      array.splice(i,1);
      --i;
    }
} return array;
}
stuff = ["Banana", "Orange", "Apple", "Mango", "Kiwi","Papaya","Pineapple"];
classArray =  ["window", "table", "barstool", "glass", "charger", "outlet"];
console.log(filterSixPlus(stuff));
console.log(filterSixPlus(classArray));
// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.
console.log("Question 6 - 7")
function tempConverter(){
  var temp = prompt("What is the temperature?");
  var cOrf = prompt("Would you like to convert this from Celsius to Fahrenheit (C to F) or Fahrenheit to Celsius (F to C)?");
  if (cOrf === "C to F") {
    var Fahrenheit = parseFloat(temp);
    Fahrenheit = (Fahrenheit+Fahrenheit)+30
    return Fahrenheit + "F";
  } else if (cOrf === "F to C") {
    var Celsius = parseFloat(temp);
    Celsius = (Celsius - 30)/2;
    return Celsius + "C";
  } else {
    alert("That is not an allowable entry.")
  }
}
//console.log(tempConverter());
// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
console.log("Question 8");
function countBs(string){
  var counter=0;
  for (i=0; i<string.length; ++i){
    if(string.charAt(i)==="B"){
      ++counter
    }
  } return counter;
}
var blah = "Write a function countBs() that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.HINT: Google charAt()";
var napkin = "Betty Boop was a Ballerina in Beirut."
console.log(countBs(blah));
console.log(countBs(napkin));
// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
console.log("Question 9");
function countChars(string,char){
  var counter=0;
  for (i=0; i<string.length; ++i){
    if(string.charAt(i)===char){
      ++counter
    }
  } return counter;
}
console.log(countChars(blah,'i'));
console.log(countChars(napkin, 'o'));
// 10. Declare a function called ohZero that replaces all of the o's in a string with 0's.
console.log("Question 10");
function ohZero(string){
  var zString = string.replace(/o/g,"0");
  return zString;
}
console.log(ohZero(napkin));
var str = "Oh no you don't";
console.log(ohZero(str));
// 11. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.
console.log("Question 11");
function bottlesBeer(){
  var i=99;
  while (i>1){
    console.log(i+" bottles of beer on the wall, "+i+" bottles of beer. Take one down, pass it around,")
    --i;
    console.log (i+ " bottles of beer on the wall");
  }
  console.log(i+" bottle of beer on the wall, "+i+" bottle of beer. Take one down, pass it around,")
  --i;
  console.log ("No more bottles of beer on the wall");
}
//bottlesBeer();
// 12. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.
console.log("Question 12");
function guessingGame(){
  var computer = (Math.floor(Math.random()*50))
  var human = parseInt(prompt("Can you guess what number, between 0 and 50, I'm thinking of?"));
  while (human !== computer){
    if (human < computer){
    human = parseInt(prompt("Too low.  Try again"));
  } else if (human>computer){
    human = parseInt(prompt("Too high.  Try again"));
  }
}
alert ("You're right!  My number is "+computer+"!")
}
//guessingGame();
// 13. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
function getFileExtension(i) {
    // i will be a string, but it may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false
    var x = i.indexOf(".");
    if (x>0) {
      ++x;
      return i.substr(x);
    } else {
      return "false";
    }
}
var h="bing.png"
  console.log(getFileExtension(h));

  function longestString(i) {

    // i will be an array.
    // return the longest string in the array
var longest = i[0];
for(x=0;x<i.length;++x){
  if(typeof i[x] === 'string' && i[x] !== true && i[x]!== false){
  if(longest.length < i[x].length) {
  longest = i[x];
        }
      } else {
        longest = '';
      }
    }
return longest;
}
var g=['big',[0,1,2,3,4],'tiny'];
var b= ['sdf','jkl', 'tr','jklhnn','sdfg','z','sd'];
var h=[true,false,'lol']
console.log(longestString(h));


function arraySum(i) {

    // i will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.

    for(x=0;x<i.length;x++){
    if(Array.isArray(i[x])) {
      console.log("Hey, this is an array");
          var array1 = i[x];
          //arraySum(array1);
        } else {
    console.log("the value out out here is "+i[x])
  }
}
}

var p = [2,[1,2,3,4,5,[1,2,3]],8];
console.log(p);
console.log(arraySum(p));
