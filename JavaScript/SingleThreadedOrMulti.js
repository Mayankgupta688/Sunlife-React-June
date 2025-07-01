// JavaScript as an Architecture is Multithreaded with Single threaded Execution Model (Sync) and WebAPI
// in the background for Async Tasks

var count = 0;

setTimeout(function A() {
    console.log("Function A")
}, 10000)

setTimeout(function B() {
    console.log("Function B")
}, 5000)

setTimeout(function C() {
    console.log("Function C")
}, 13000)

setTimeout(function F() {
    console.log("Function F")

    setTimeout(function AA() {
        for(var i = 0; i< 8; i++) {
            console.log(i)
        }
    }, 15000)

}, 0)

setTimeout(function F() {
    console.log("F")
}, 0)

for(var i = 0; i< 8; i++) {
    console.log(i)
}

console.log(count)

// Promise
// setInterval
// setTimeout
// Generators
// async await
// Observables
// DOM Updates
// AJAX
 


// 0 -7 0 alphabets