/*
============================================
; Title: hairston-singleton-pattern.js
; Author: Professor Krasso
; Date: 22 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to use the Singleton Pattern
;===========================================
*/

//header
const header = require('../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','The Singleton Pattern'))

//start program

//DatabaseSingleton class
var DatabaseSingleton = (function() {
    var instance;

    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    return {

        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

/**
 * Params: na
 * Response: databaseInstance1, databaseInstance2
 * Description: creates two new database instances
 */
function databaseSingletonTest() {
    var databaseInstance1 = DatabaseSingleton.getInstance();
    var databaseInstance2 = DatabaseSingleton.getInstance();

    //output whether the two instances match
    console.log("Same database instance?" + " " + (databaseInstance1 === databaseInstance2));
}

//call the databaseSingletonTest() function
databaseSingletonTest();

//end program 