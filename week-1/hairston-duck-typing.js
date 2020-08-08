/*
============================================
; Title: hairston-class-refresher.js
; Author: Professor Krasso
; Date:   8 August 2020
; Modified By: Brooklyn Hairston
; Description: 
;===========================================
*/

//header
const header = require('../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Duck Typing, Interfaces'))

//start program

/**
* Params: model
* Response: Car added to the racetrack!
* Description: creates a Car function class 
*/
function Car(model) {
    this.model = model;
}
Car.prototype.start = function() {
    console.log("Car added to the racetrack!")
}; 

/**
* Params: model, year
* Response: Truck added to the racetrack!
* Description: creates a Truck function class 
*/
function Truck(model, year) {
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function() {
    console.log("Truck added to the racetrack!");
};

/**
* Params: model, year, color
* Response: Jeep added to the racetrack!
* Description: creates a Jeep function class 
*/
function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!")
};

var racetrack =[];

function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

var ford = new Car("Ford Focus");
var toyota = new Truck("Toyota Tacoma", 2019);
var jeep = new Jeep("Jeep Wrangler", 2016, "blue");

console.log("");

driveIt(ford);
driveIt(toyota);
driveIt(jeep);

console.log("\n--The following vehicles have been added to the racetrack--");
for (var x = 0; x < racetrack.length; x++) {
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

//end program