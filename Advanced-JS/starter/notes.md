Objects and Functions

Lecture: Everything is an Object: Inheritance and the Prototype Chain

OOP/Inheritance

Everything is an Object (almost)

Two Types:

Primitives: numbers, strings, booleans, undefined, null

Everything Else: arrays, functions, object, dates, wrappers for numbers/strings/booleans
......IS AN OBJECT


The OOP
  Objects interacting with one another through methods and properties;

  Used to store data, structure applications into modules and keeping code clean

    In other languages, this is a class
    In JS it is Constructure/Prototype
    Person:
      name
      yearOfBirth
      job
      calculateAge()

Inheritance
  When one object is based on another OBJECT
  Gets access to another objects properties and methods

  Person:
    name
    yearOfBirth
    job
    calculateAge()

    ----> Athlete inherits Person

        Athlete:
          olympics
          olympicMedals
          allowedOlympics()

*SUMMARY

*Every JS object has a Prototype Property, which makes Inheritance possible in JS

* The Prototype Property of an object is where we put methods and properties that we want other objects to inherit.

* The Constructor's Prototype Property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it.

* When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain.
