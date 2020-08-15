/*
============================================
; Title: hairston-prototypes.js
; Author: Professor Krasso
; Date: 15 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to create and use prototypes  
;===========================================
*/

//header
const header = require('../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Prototypes'))

//start program

//creates object literal person
var person = {
    getAge: function() {
        return this.getAge;
    }
};

//creates object literal amber
var amber = Object.create(person, {
    "age": {
        "value": "29"
    },
    "fullname": {
        "value": "Amber Smith"
    }
});

//call the getAge function
amber.getAge();

//output
console.log("The person's full name is " + amber.fullname + ".");
console.log("The person's age is " + amber.age + ".");

//end program

