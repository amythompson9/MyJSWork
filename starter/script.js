/********************************
*Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rules
var _3years = 3;
var johnMark = 'John or Mark';
var if = 23;
*/

/********************************
*Variable mutation and type coercion
type coercion - JS automatically converts types from one another
as needed
variable mutation - change the value of a variable
*/

/*
//type coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '.');
console.log('Is he married? ' + isMarried + '.');

//variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '.');

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/********************************
*Basic Operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);

console.log(now * 2);
console.log(now / 10);


//Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark');
var x;
console.log(typeof x);
*/

/********************************
*Operator Precedence
*JS knows which operator to do first - order of operations
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3+5) * 4-6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


//More operators
x = x * 2;
x *= 2;
console.log(x);

x += 10;
console.log(x);

x = x + 1;
x += 1;
x++;
*/

/*******************************
*Coding Challenge 1
*/

/*
BMI = mass / height^2 = mass / (heaight * height).

1. Store Mark's and John's mass and height in Variables
2. Calculate both their BMIs
3. Create a boolean variable containing
information about whether Mark has a higher BMI than JOhn.
4. Print a string to the console containing the Variablefrom Step 3.
Is Mark's BMI higher than John's? true


var markMass = 78;
var johnMass = 92;
var markHeight = 1.69;
var johnHeight = 1.95;

var bmiMark = markMass / (markHeight * markHeight);
var bmiJohn = johnMass / (johnHeight * johnHeight);
console.log(bmiMark, bmiJohn);
var markGreater = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's?" + " " + markGreater);
*/


/*******************************
*If/Else Statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will marry soon!');
}

var isMarried = false;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will marry soon!');
}

var markMass = 78;
var johnMass = 92;
var markHeight = 1.69;
var johnHeight = 1.95;

var bmiMark = markMass / (markHeight * markHeight);
var bmiJohn = johnMass / (johnHeight * johnHeight);

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is highher than John's.");
} else {
  console.log("John's BMI is higher than John's.");
}
*/

/*******************************
*Boolean Logic
AND (&&) => true is ALL are true
OR (||) => true if ONE is true
NOT (!) => inverts true false value
*/
/*
var firstName = 'John';
var age = 25;
if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age <= 19) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/

/*******************************
*The Ternary Operator and Switch Statements
Ternary - has three operands - condition, if block, else block
*/
/*Ternary
var firstName = 'John';
var age = 45;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice;'
console.log(drink);
*/


/*switch - 2 examples

var firstName = 'Linda';
var job = 'cop';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an Uber.');
    break;
  case 'designer':
    console.log(firstName + ' designs websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}



var firstName = 'John';
var age = 25;

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age <= 19:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}

*/

/*******************************
*Truthy and Falsy values and equality operators


//falsy values: undefined, null, 0, '', not a number (NaN)
//truthy values: NOT falsy values

var height;

height = 23;

if (height) {
  console.log('Variable is defined.');
} else {
  console.log('Variable has not been defined.');
}


//Equality Operators
if (height == '23') {
  console.log('The == operator does type coercion.');
}
*/

/************************
*Coding Challenge 2
*/
/*
1. Calculate the averge score for each team
2. Decide which teams wins in average, print the winner
3. Change the scores to show differenct winners. There might be a draw.
4. Mary also plays - log the average winner, use the &&
5. Change the score to generate a different winner
*/
/*
var mikeAverage = (116 + 94 + 123) / 3;
var johnAverage = (89 + 120 + 103) / 3;
var maryAverage = (97 + 134 + 105) / 3;
console.log(mikeAverage, johnAverage, maryAverage);
*/
/*
if (johnAverage > mikeAverage) {
  console.log('John\'s team wins with ' + johnAverage + ' points.');
} else if (mikeAverage > johnAverage) {
  console.log('Mike\'s team wins with ' + mikeAverage + ' points.' );
} else {
  console.log('There is a draw.');
}
*/
/*
if (johnAverage > mikeAverage && johnAverage > maryAverage) {
  console.log('John\'s team wins with ' + johnAverage + ' points.');
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
  console.log('Mike\'s team wins with ' + mikeAverage + ' points.' );
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
  console.log('Mary\'s team wins with ' + maryAverage + ' points.' );
} else {
  console.log('There is a draw.');
}
*/
