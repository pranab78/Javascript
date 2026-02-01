// Write a function that chains two callbacks (callback inside callback).

function chains(callback, callback){
      callback(callback);
}

function callbackChains(callbackTwo){
    console.log(callbackTwo);
}

chains("hello my name is ...", callbackChains);