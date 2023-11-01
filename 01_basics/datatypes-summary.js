//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')  // type is symbol itself.
const anotherId = Symbol('123')  // both are not same

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

objects and web events... 

// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array
let myObj = {
    name: "hitesh",  //objects // typeof is function
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// type of big int is null

// https://262.ecma-international.org/5.1/#sec-11.4.3
