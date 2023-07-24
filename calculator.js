//Takes two numbers and adds them together then returns sum
function add (num1, num2) {
    let sum = num1 + num2;
    return sum;

};
//Takes two numbers and subtracts them then returns difference
function subtract (num1, num2) {
    let difference = num1 - num2;
    return difference;
};
//Takes two numbers and multiplies them then returns product
function multiply (num1, num2) {
    let product = num1 * num2;
    return product;
};
//Takes two numbers and divides them then returns quotient
function divide (num1, num2) {
    let quotient = num1/num2;
    return quotient;
};

//Tests to check above functions
// console.log(add(5, 2));
// console.log(subtract(5, 2));
// console.log(multiply(5, 2));
// console.log(divide(5, 2));


//Variables for operations
//First number entered in calculator
let num1 = 0;
//Second number entered in calculator
let num2 = 0;
//Operator entered in calculator
let operator = "";

/** Operate Function
 * @param {number} num1 
 * @param {number} num2 
 * @param {string} operator
 * @returns result of calculation
 */
function operate (num1, num2, operator) {
    
    let result = 0;

    if(operator == "+"){
        result = add(num1, num2);
    } else if (operator == "-"){
        result = subtract(num1, num2);
    } else if (operator == "*"){
        result = multiply(num1, num2);
    } else if (operator == "/"){
        result = divide(num1, num2);
    }

    return result;
};