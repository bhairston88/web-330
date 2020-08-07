/*
============================================
; Title: hairston-class-refresher.js
; Author: Professor Krasso
; Date:   7 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to define classes using functions to create an object
;===========================================
*/

//header
const header = require('../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Class Refresher'))

//start program

/**
* Params: manufacturer, model, color, price
* Response: output
* Description: creates a function class
*/

function Phone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function() {
        return this.price;
    };
    this.getModel = function() {
        return this.model
    };
    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + "\n" + "Model: " + this.getModel() + "\n" + "Color: " + this.color + "\n" + "Price: " + this.getPrice();
    };
    }

    var samsung = new Phone("Samsung", "Galaxy 5", "Black", "$550"); 

    //output

    console.log("\n");
    console.log("--DISPLAYING CELL PHONE DETAILS--");
    console.log(samsung.getDetails());

    //end program