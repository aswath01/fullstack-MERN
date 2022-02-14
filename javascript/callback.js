function moreAddEventListener(Typeofmove, callback) { //the callback gets the function as an argument, now call back is 
    //function. when the function is called at line - 7. the details act as an arugment to the callback function.
    var details = {
        evendType: "keypress",
        eventvalue: "p",
    }
    if (details.evendType === Typeofmove) {
        callback(details);
    }

}
// moreAddEventListener has two arguments and invokes the function as an arguments 
moreAddEventListener("keypress", function(event) {
    console.log(event);
})