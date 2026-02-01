// Pass an anonymous callback to a function.

function pass (callback){
    callback();
}

function anonymous(){
    console.log("hello")
}

pass(anonymous);