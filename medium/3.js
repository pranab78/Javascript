// Write a function that simulates fetching data (use setTimeout) and sends data to a callback.

function simulate(callback){
    console.log("fetching data ...")

    setTimeout(() => {
        callback();
    }, 2000);
}

function callbackagain(){
    console.log("data fetched")
}
simulate(callbackagain)

