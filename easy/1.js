// Write a function add(a, b, callback) that sends the sum to the callback.

 function add(a, b, callback){
    callback(a + b);
 }

 function callback(num){
     console.log(num);
 }

 add(2, 5, callback)