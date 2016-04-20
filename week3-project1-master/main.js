// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
console.log('Question 1');
function divideByTwo(number){
  return number/2;

}
var answer = divideByTwo(24);
console.log(answer);
// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
console.log('Question 2');
var greeting = function(name1, name2){
  console.log('Hello '+name1+' and '+name2+'!');
}
var name="Sam";
var name1="Nancy";
greeting(name, name1);
greeting('John', 'Sid');
// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
console.log('Question 3');
var totalThisMonth = function (price) {
  return "$" + price*6
}
console.log(totalThisMonth(2.50));
// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
      var classmates = ['Joe','Silas','Bart','Basil'];
      console.log('Question 4');
      var teamMaker = function(list1) {
      var Copy = list1.slice();
      var team1 =[];
      var team2 = [];
      for(i=0; i<list1.length; ++i){
      if (i%2 === 0){
      team1.push(list1[i]);
      } else {
      team2.push(list1[i]);
      }
      }
      console.log(team1);
      console.log(team2);
      }
      teamMaker(teammates);
      teamMaker(classmates);
// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
console.log('Question 5');
var quarter = function(number) {
  var number = number/4;
  console.log(number);
}
quarter(905);
// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
console.log('Question 5');
var area = function (x,y){
  console.log("The area is "+ (x*y));
}
area(2,4);
var perimeter = function (x,y){
  console.log("The perimeter is "+((2*x)+(2*y)));
}
perimeter(4,5);
// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
console.log('Question 7');
var sleepings = function(hours) {
  if (hours>8){
    console.log("Hey sleepyhead");
  } else {
    console.log("You should get more sleep.")
  }
}
sleepings(9);
// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
console.log('Question 8');
var number = prompt("Please enter a 3 digit number");
var addNumber = function(number) {
  number.split("");
  var newNumber = 0;
  for (i=0;i<3;++i){
    newNumber += parseInt(number[i]);
  }
  console.log(newNumber);
}
addNumber(number);
// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.
console.log('Question 9');
var piggyCounter = function(quarters, dimes, nickels, pennies) {
  var sum = quarters*.25;
  sum += (dimes*.1);
  sum += (nickels*.05);
  sum += (pennies*.01);
  answer = "$"+sum.toFixed(2);
  return answer;
}
console.log(piggyCounter(10, 1, 1, 1));
// 10. Develop a function that determines a person's age by prompting them for their birth year.
console.log('Question 10');
var yourAge = function(year){
  return 2016 - year;
}
console.log(yourAge(1970));
// 11. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.
console.log('Question 11');
var isItLeapy = function(year) {
  if((year%4) === 0){
    if((year%100) === 0){
      if ((year%400) === 0){
        console.log("yes");
      } else {
      console.log("no");
    }
    } else {
    console.log("yes");
    }
  }else {
    console.log("no");
  }
}
isItLeapy(1996);
// 12. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.
console.log('Question 12');
var phoneNumberCleaner = function (phoneNumber) {
  if (phoneNumber.length === 10){
    return phoneNumber;
  } else if (phoneNumber.length === 11 && phoneNumber.charAt(0) == 1) {
    phoneNumber = phoneNumber.slice(1,11);
    return phoneNumber;
  } else {
    error = "This is a bad number.";
    return error;
  }
  }
var a = '12345678904';
console.log(phoneNumberCleaner(a));
// 13. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
var numberOrNot = function(b){
  for(i=0; i<b.length; ++i){
  if (isNaN(b[i])) {
    console.log(b[i]+": Not a number");
  } else {
    console.log(b[i]+": This is a number");
}
}
}
numberOrNot(arrayOfAllTheThings);
// 14. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.
var dieRoller = function(){
  var die1 = (Math.floor(Math.random()*6))+1;
  var die2 = (Math.floor(Math.random()*6))+1;
  return die1 + die2;
}
//console.log(dieRoller());
// 15. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.
numberOfSpaces = 0;
counter = 0;
while(numberOfSpaces<41){
  numberOfSpaces += dieRoller();
  ++counter;
}
console.log("Total is "+numberOfSpaces);
console.log(counter);
var date = Date();
console.log(date);


debugger;
var arrayOfNames = ['Bradley', 'Matt', 'Jenny']

function sayHi (name) {
console.log('Hi ' + name + ', how are you today?');
}

function allNames (array) {
for(i=0; i<array.length; i++) {
  sayHi (array[i]);
};
}

allNames(arrayOfNames)

console.log(allNames(arrayOfNames));
