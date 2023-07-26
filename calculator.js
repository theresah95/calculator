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

//Testers to check above functions
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
let operator = '';

//Takes two numbers and an operator and returns the value of the equation
function operate (num1, num2, operator) {
    
    let result = 0;

    if(operator == '+'){
        result = add(num1, num2);
    } else if (operator == '-'){
        result = subtract(num1, num2);
    } else if (operator == '*'){
        result = multiply(num1, num2);
    } else if (operator == '/'){
        result = divide(num1, num2);
    }

    return result;
};

//Button Functionality
let inputValue = "";
let text = document.getElementById('result');

//Number Keys Except Bottom Row
let numbers = document.querySelectorAll('div.number-rows button');

for (i of numbers){
    i.addEventListener(
        'click', 
        function(){
            text.style.fontSize = "40px";
            inputValue = inputValue + this.innerHTML;
            text.innerHTML = inputValue;
        }
    );
};

//Bottom Row Keys
let bottomRow = document.querySelectorAll('div.bottom-row button');

for (i of bottomRow){
    i.addEventListener(
        'click',
        function(){

            if(this.innerHTML == "AC"){
                clearDisplay();
            } else {
                text.style.fontSize = "40px";
                inputValue = inputValue + this.innerHTML;
                text.innerHTML = inputValue;
            } 
        }
    );
};

//Helper Function to Clear the Display and contents of inputValue variable
function clearDisplay (){
    inputValue = "";
    text.innerHTML = inputValue;
}

//Operator Buttons
let operatorButtons = document.getElementsByClassName('operators');

for (i of operatorButtons){
    i.addEventListener(
        'click',
        function(){
            num1 = inputValue;
            clearDisplay();
            operator = this.innerHTML;

            console.log(num1);
            console.log(operator);

        }
    );
};
