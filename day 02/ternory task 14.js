//ternary operators.
//task of day2.
// Task 14: Use the ternary operator a number is positive or negative .
const checkPositiveNegative = (num) => {
    const result = num >= 0 ? 'positive' : 'negative';
    console.log(`The number ${num} is ${result}`);
};

checkPositiveNegative(4); 
checkPositiveNegative(-1);