let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33  
// "33abc" => NaN   **typeof NaN is number 
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 // called concatenation
// console.log(str3);

// console.log("1" + 2); 
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2"); // output is 32
// output is always concatenated... as string


// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //output is 1
// console.log(+"");  // output is 0

let num1, num2, num3 // bulk assignment

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; //prefix
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
