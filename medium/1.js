// Write a function calculate(a, b, operationCallback) where the callback decides the operation.

function calculate(a, b, operationCallback){
    operationCallback(a, b);    
}

function callback(a, b){
  console.log(a/b)
}

calculate (5, 5, callback);