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
    let quotient = num1 / num2;
    return quotient;
};

//Variables for operations
//First number entered in calculator
let num1 = null;
//Second number entered in calculator
let num2 = null;
//Operator entered in calculator
let operator = '';

//Takes two numbers and an operator and returns the value of the equation
function operate (num1, num2, operator) {

    num1 = Number(num1);
    num2 = Number(num2);
    
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

    if(result % 1 == 0){
        return result;
    } else {
        return result.toFixed(2);
    }

    
};

//Display variables one for inputted value and one for displayed text
let inputValue = "";
let text = document.getElementById('result');

//Number Keys Except Bottom Row Event Listener
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

//Bottom Row Keys Event Listener
let bottomRow = document.querySelectorAll('div.bottom-row button');

for (i of bottomRow){
    i.addEventListener(
        'click',
        function(){

            if(this.innerHTML == "AC"){
                clearAll();
            } else if (this.innerHTML == "."){
                if(inputValue % 1 == 0){
                    text.style.fontSize = "40px";
                    inputValue = inputValue + this.innerHTML;
                    text.innerHTML = inputValue;
                }
            }else {
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

function clearAll(){
    clearDisplay();
    num1 = null;
    num2 = null;
    operator = '';
}

//Operator Buttons Event Listener
let operatorButtons = document.getElementsByClassName('operators');

for (i of operatorButtons){
    i.addEventListener(
        'click',
        function(){

                if(operator == '' && num1 == null){
                    num1 = inputValue;
                    clearDisplay();
                    operator = this.innerHTML;
                } else {
                    num2 = inputValue;
                    if(operator == ''){
                        operator = this.innerHTML;
                    }
                    clearDisplay();
                    let result = operate(num1, num2, operator);
                    text.innerHTML = result;
                    num1 = result;
                    num2 = null;
                    operator = this.innerHTML;
                }
            
        }
    );
};

//Equals Button Event Listener
let equalsButton = document.getElementById('equals');

equalsButton.addEventListener(
        'click',
        function(){
            num2 = inputValue;
            clearDisplay();
            let result = operate(num1, num2, operator);
            text.innerHTML = result;
            num1 = result;
            num2 = null;
            operator = '';
        }
);
