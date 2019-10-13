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
