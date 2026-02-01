// Write a function that uses a callback to filter numbers greater than 10.

function filter(numb, callback){
    for(i=0;i<numb.length;i++){
        if(i<numb.length){
            console.log(numb.length)
        }
    }
    callback(numb);
}

function callbacktwo(numb){
    console.log(numb);
}

filter([2, 3, 14, 12, 13, 4, 12],callbacktwo)

