// Concept of Hoisting...

// JavaScript is Twice Interprettd ?

// JavaScript is Compiled ?

debugger;

abc();

console.log(userAge);

console.log(userName);

console.log("Hello World");

var userName = 10;

var userAge = 100;

userDetailed = "sdghfukdsfg";

function abc() {
    console.log("abc")
}

// Interpretted:

// 1. Line by Line
// 2. Native to Machine Language 
// 3. Each Line Execution
// 4. Line 1 do not know about line 2
// 5. Break as soon as error encountered.


// Compiled:

// 1. Evaluate Entire File
// 2. Creation of External File (bytecode / jar)