// Simulate async login: username → callback → success/failure.

function simulate(callback){

    console.log("login : pranab007")
    
    setTimeout(() => {

        callback();
    }, 2000);
}

function callbackTwo(){
     console.log("success")
}

simulate(callbackTwo);

