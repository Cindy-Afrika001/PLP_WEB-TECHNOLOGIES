// Print a half pyramid
function printHalfPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

// Print a reverse half pyramid
function printReverseHalfPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

// Example usage
const pyramidHeight = 5;
console.log('Half Pyramid:');
printHalfPyramid(pyramidHeight);

console.log('\nReverse Half Pyramid:');
printReverseHalfPyramid(pyramidHeight);