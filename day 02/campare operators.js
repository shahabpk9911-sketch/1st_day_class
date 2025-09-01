//Comparison Operators.
//task of day 2.
// Task 8: Compare two numbers using > and <.
const compareGreaterLesser = (a, b) => {
    console.log(`${a} > ${b} is ${a > b}`);
    console.log(`${a} < ${b} is ${a < b}`);
};


compareGreaterLesser(4,2); 
// task of day 2.
// Task 9: Compare two numbers using >= and <= .
const compareGreaterEqualLesserEqual = (a, b) => {
    console.log(`${a} >= ${b} is ${a >= b}`);
    console.log(`${a} <= ${b} is ${a <= b}`);
};


compareGreaterEqualLesserEqual(6,6);
//task of day 2.
// Task 10: Compare two numbers using == and ===.
const compareEqualStrictEqual = (a, b) => {
    console.log(`${a} == ${b} is ${a == b}`);
    console.log(`${a} === ${b} is ${a === b}`);
};


compareEqualStrictEqual(2,`2`); 
compareEqualStrictEqual(3,3); 