// Write a function that takes a callback and ensures it runs only once.

function takes(callback){
    callback();
}
function callbacktwo(){
    console.log("12345")
}

takes(callbacktwo);