// Write a callback that prints "Even" or "Odd" based on a number.

function number(numb, callback){
   callback(numb);
}

function callback(numb){
    if(numb%2===0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

number(4, callback);
