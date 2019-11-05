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

/***********************************
*Functions
function nameOfTheFunction(argument) {
  function block
}
argument = variable inside of function
can have multiple argruments declared, separted by a comma
*/
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0 ) {
      console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
      console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/***********************************
*Function Statements and Expressions
*/
//function declaration
//function whatDoYouDo(job, firstName) {}

//function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
      case 'teacher':
          return  firstName + ' teaches kids how to code.';
      case 'driver':
          return firstName + ' drives a cab in Lisbon.';
      case 'designer':
          return firstName + ' designs websites.';
      default:
        return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/***********************************
*Arrays
*/
//initialize new array
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

//find element at index, print all, how many
console.log(names[0]);
console.log(names);
console.log(names.length);
//manipulate/change an Array
names[1] = 'Ben';
console.log(names);
//add to an Array
names[4] = 'Mary';
console.log(names);
names[names.length] = 'Beth';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
//add a data type at the end with push function
john.push('blue');
console.log(john);
//add data type a the beginning with unshift
john.unshift('Mr.');
console.log(john);
//remove element from the end with pop
john.pop();
console.log(john);
//remove element from the beginning with shift
john.shift();
console.log(john);
//indexOf - return position in Array
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer.'
console.log(isDesigner);
*/

/***********************************
*Coding Challenge 2
*/

/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator.
(as a function) He likes to tip 20% of the bill when the bill is less
than $50, 15% when the bill is bewtween $50 and $200, and 10%
if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip)

(Note: to calculate 20% of a value, simply multiple by .20)

*/
/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);
*/

/***********************************
*Objects and properties
Objects - key/value pairs
each object has a name - the key

In arrays, order matter a lot
In objects, order does not matter
*/
//Object literal
/*
var john = {
  //firstName is the key
  //firstName is a property of the John object
  //John is the value
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john);
//how to retrieve data from an object
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

//mutate an object
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new Object syntax
//initialize new object
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/***********************************
*Objects and Methods
- Objects can hold different types of data
- Can attach functions to objects - these functions are called Methods

*/
/*
var john = {
  //firstName is the key
  //firstName is a property of the John object
  //John is the value
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    return 2018 - this.birthYear;
    //or
    //this.age = 2018 - this.birthYear;
  }
};

var age = john.calcAge();
john.age = john.calcAge();
//or
//john.calcAge();
//console.log(john);
*/

/***********************************
Loops and Iteration
Loops are control structures
Automate repetitive tassks
*/

/*Print numbers 0-9
for (var i = 0; i < 10; i++) {
  console.log(i);
}
*/

//var john = ['John', 'Smith', 1990, 'designer', false];
/*
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]);
//for loop
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}
*/

//while loop
/*
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++
}
*/

//continue and break Statements
/*
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

//looping in reverse
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/***********************************
Coding Challenge 5
Tip calculator
John went to five restaurants and spent
$124, $48, $268, $180, and $42.
20% for < $50
15% for $50 - $200
10% for > $200

Use objects and Loops
1. Create an object with an array for the bill values
2. Add a method to calulate the tip
3. Method should include
  loop to iterate over all the bills and do tip calculation
4. As an output create
  new array containing all tips
  an array containing final paid amounts
  Start with 2 empty arrays as properties and then fill them in the loop

  Mark's family went to 4 restaurants
  $77, $375, $110, $45
  20% for < $100
  10% for $100 - $300
  25% for > $300

  Now - create a function (not a method) to calc the average
  of a given array of tips
  HINT: Loop over the array, and in each iteration, store the current
  sum in a variable (starting from 0)
  After you have the sum of the array, divide it by the number
  of element in it (average)

  Calculate the avaerage tip for each family

  Log to the console which family paid the highest tips on average
*/
//PART 1

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
      this.tips = [];
      this.finalValues = [];
      for (var i = 0; i < this.bills.length; i++) {
        var percentage;
        var bill = this.bills[i];
        if (bill < 50) {
          percentage = .2;
        } else if (bill >= 50 && bill < 200) {
          percentage = .15;
        } else {
          percentage =  .1;
        }
        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + bill * percentage;
      }
    }
}

//john.calcTips();
//console.log(john);


//PART 2

var mark = {
    fullName: 'Mark Johnson',
    bills: [77, 5, 110, 45],
    calcTips: function() {
      this.tips = [];
      this.finalValues = [];
      for (var i = 0; i < this.bills.length; i++) {
        var percentage;
        var bill = this.bills[i];
        if (bill < 100) {
          percentage = .2;
        } else if (bill >= 100 && bill < 300) {
          percentage = .10;
        } else {
          percentage =  .25;
        }
        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + bill * percentage;
      }
    }
}

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
//Do all the calcs
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
}
else if (john.average < mark.average){
  console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
