// setTimeout(function () {
//     console.log("HI");    
// }, 5000);

 
// clearInterval()

let count = 10;
let interval = setInterval( function () {
    if (count >= 0) {
        console.log(count);
        count--;
    } else clearInterval(interval);
}, 1000); 