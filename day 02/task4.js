//task of day 2.
//dividing numbers .
// And zero is not allowed.
const divide = (a, b) => {
    if (b !== 0) {
        const result = a / b;
        console.log(`The result of ${a} / ${b} is ${result}`);
    } else {
        console.log('Division by zero is not allowed.');
    }
};


divide(44,2);
