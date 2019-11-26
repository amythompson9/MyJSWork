///////////////////////////////////////
//Lecture: Parsers and Engines
/*
Hosting in Environment
Browser like Chrome
Runs in Browser
Can be hosted somewhere like Node.js
    JS Engine - takes our code and executes it
    A program that executes JS - Google's V* engine in Chrome
    Reno, Spidermonkey, JS Core
1. Our code is parsed by a Parser
    Read our code line by line
    Checks syntax
    Knows rules in order to be valid
    Throws error and stop execution if something is not right
    If correct
      Parser produces a data structure - Abstract Syntaz Tree
2. Conversion to Machine Code
    No longer JS - now it is instructions that can be executed directly
    by the computer's processor
3. Code Runs
*/
//Lecture: Execution Contexts And The Execution stack
/*
Order in which the code is run
Execution Context - A box, a container, or a wrapper which stores Variables
  and in which a piece of our code is evaluated and executed
  The Default
    Global Exection Context
      Code that is not inside any function
      Associated with the global object
      In the browser, that's the window object
      lastName === window.lastName
      lastName is a property of the window object
      //true

---->  EXECUTION CONTEXT
        third()

---->  EXECUTION CONTEXT
        second()

---->  EXECUTION CONTEXT
        first()

----> GLOBAL EXECUTION CONTEXT
___________________________________
        EXECUTION STACK

*/
// Lecture: Hoisting
/*
Execution Context in Detail: Creation and Execution Phases and Hoisting
  EXECUTION CONTEXT OBJECT
  Variable Object (VO) - function argruments, inter-variable declaration, function declaration
  Scope Chain - contains current variable objects, and variable parent objects
  "This" variable -

Created - when a function is called, a new execution context is put on top
  of the execution stack
  Happend in two phases - Creation and Execution
  1. Creation Phase
    A. Creation of the VO
    B. Creation of Scope chain
    C. Determine value of the 'this' variable
  2. Execution Phase
    The code of the function that generated the
    current execution context is ran line by line
  THE VARIABLE OBJECT
  - The argument object is created, containing all the arguments that
    were passed into the function
  - Code is scanned for function declarations: for each function, a property
    is created in the VO, pointing to the function.
  - Code is scanned for variable declarations: for each variable, a property
    is created in the VO, and set to undefined
    LAST TWO ON THE LIST ABOVE - THIS IS HOISTING
      Functions and variables are hoisted in JS
      This means they are available BEFORE the execution phase starts
      Functions and Variables are Hoisted differently
        Functions are definded before the ececution phase starts
        Variables are set the undefined - only defined IN the execution phase
*/
//Hoisting in Practice

//this is what we were doing
//first delcare, then call
/*
function calculateAge(year) {
  console.log(2016 - year);
}

calculateAge(1990);
*/

//this is what we learned about HOISTING
//Function Declaration
/*
calculateAge(1965);

function calculateAge(year) {
  console.log(2016 - year);
}
*/
//Function Expression
//this won't work because it's not a
//function declaration
//this is a function expression
/*
retirement(1965);

var retirement = function(year) {
  console.log(65 - (2016 - year));
}
*/
//Variables
/*
console.log(age); //undefined
var age = 23;
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping
//Scoping and the Scope Chain
/*
SCOPING IN JS
- Scoping answers the question 'where can we access a certain variable?'
- Each new function creates a scope: the space/environment, in which
  the variables it defines are accessible
  - the only way to create a new scope is to write a new function
- Lexical scoping: a function that is lexically within another function
  gets access to the scope of the outer function (parent function) also
  gets access to variables
*/

// First scoping example

/*
var a = 'Hello!'; //Global scope --> VoGlobl
first();

function first() { //first() scope --> V01 + VoGlobl
    var b = 'Hi!';
    second();

    function second() { //second scope --> V0 2 + V01 + VoGlobl
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
/*
- Variable that each execution context uses
- regular function call: the this keyword point at the global object,
(the window object, in the browser)
- method call (function attached to an object): the this variable point to the object
that is calling the method.
- the THIS keyword is not assigned a value until a function where it is defined
is actually called.

*/

//The this keyword in practice

//console.log(this); //this won't work
/*
calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}
*/
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);
/*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
*/
  }
}
/*
john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/
