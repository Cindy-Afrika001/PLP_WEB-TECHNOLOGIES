console.log("Hello World");
// This is a comment
console.log("John Doe")
console.log(19);
console.log("Student")
//variable
let message = "Hello World";
console.log(message);
//Data types
console.log(2 + "ABC");
//Boolean
let on = true;
let off = false;

//typedef operator
let x = 5;
console.log(typeof x);// 'number'

//JavaScript Arrays
let birds = ['owl', 'Eagle', 'Parrot', 'Falcon'];
console.log(birds[0]);//owl
console.log(birds)
// special methods for array manipulation

let birds = ['owl', 'Eagle'];
birds.push('Sparrow');
console.log(birds);

//exercise
// Create an array named colors with 'red', 'green', and 'blue'
let colors = ['red', 'green', 'blue'];

// Add 'black' color after the last index of the array and print the array
colors.push('black');
console.log(colors); // Output: [ 'red', 'green', 'blue', 'black' ]

// Remove the value 'red'
colors.splice(colors.indexOf('red'), 1);

// Swap the position of 'green' and 'blue' and print the array
[colors[1], colors[2]] = [colors[2], colors[1]];
console.log(colors); // Output: [ 'blue', 'green', 'black' ]

// Add the color 'yellow' on the first index of the array and print the array
colors.unshift('yellow');
console.log(colors); // Output: [ 'yellow', 'blue', 'green', 'black' ]