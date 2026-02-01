// Create callbacks for add, subtract, multiply, divide and pass them dynamically.

function calculate(a, b, callback){
    callback(a, b);
}

function callbackOne(a, b){
    console.log(a+b);
}

function callbackTwo(a, b){
    console.log(a-b);
}

function callbackThree(a, b){
    console.log(a * b);
}

function callbackFour(a, b){
    console.log(a / b)
}

calculate(10, 5, callbackOne);
calculate(10, 5, callbackTwo);
calculate(10, 5, callbackThree);
calculate(10, 5, callbackFour);