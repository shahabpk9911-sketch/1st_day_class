// Logical Operators
//task of day 2.
// Task 11: Use the And operator to combine two conditions .
const andOperator = (a, b) => {
    console.log(`${a} > 0 && ${b} > 0 is ${a > 0 && b > 0}`);
};


andOperator(5, 7); 
andOperator(5, -7); 
//task of day 2.
// Task 12: Use the Or operator to combine two conditions.
const orOperator = (a, b) => {
    console.log(`${a} > 0 || ${b} > 0 is ${a > 0 || b > 0}`);
};


orOperator(2, 3);
orOperator(-2, -3); 
//task of day 2.
// Task 13: Use the Not operator to negate a condition .
const notOperator = (a) => {
    console.log(`!(${a} > 0) is ${!(a > 0)}`);
};

notOperator(4);
notOperator(-4); 