/*
============================================
; Title: hairston-factory-pattern.js
; Author: Professor Krasso
; Date: 22 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to use the Factory Pattern
;===========================================
*/

//header
const header = require('../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','The Factory Pattern'))

//start program

/**
 * Params: properties
 * Response: username, password, server, version
 * Description: creates an Oracle class constructor
 */
function Oracle(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
    this.version = properties.version || 5.7

}
/**
 * Params: properties
 * Response: username, password, server
 * Description: creates an Informix class constructor
 */

function Informix(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000"

}

function DatabaseFactory() {}

//createDatabase function if ... else block
DatabaseFactory.prototype.databaseClass = Informix;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if(properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    } else {
        this.databaseClass = Informix;
    }
    return new this.databaseClass(properties);
};

//creates a new oracleFactory and calls the createDatabase prototype function
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "bh-admin",
    password: "TellNoOne"
});

//output
console.log(oracle instanceof Oracle);
console.log(oracle);

//creates a new informixFactory and calls the createDatabase prototype function
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "sh-admin",
    password: "BigSecret"
});

//output
console.log(informix instanceof Informix);
console.log(informix);

//end program