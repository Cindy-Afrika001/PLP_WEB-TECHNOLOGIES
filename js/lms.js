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

let kukus = ['owl', 'Eagle'];
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

//continuation
//control flows
let age = 15;
switch(age){
    case 10:
    console.log("Age is 10");
    break;
    case 20:
    console.log("Age is 20");
    break;
    default:
    console.log("Age is neither 10 nor 20");
}
switch(20){
    case 10+10:
        console.log("Value is twenty");
        break;
}
//(&&) or (||)
let myFood = "Banana";
switch (myFood){
    case"Banana":
    case"Apple":
console.log("THERE YOU GO YUMYUM");
break;
case"treatos":
console.log("SWEET TOOTH MOMMA");
break;
}

//control flows
for(let x=0;x<10;x++)
{
    console.log(x);
}
let heads = 0;
let tails = 0;
for(x=1;x<=10;x++){
    if (Math.random()<0.5){
        tails++;
    }else{
        heads++;
    }
}
console.log("Tossed the coin ten times")
//while loop
let i =0;

while(i<6){
    console.log('The value of i = ${i}');
    i++;
}
//coin flips
let flips = 0;
let isHeads = false;
while(!isHeads){
    flips++;
    isHeads = Math.random()<0.5;
}
console.log('It took${flips}flips to land on heads.');