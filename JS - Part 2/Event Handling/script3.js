// Event Bubbling:

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     console.log("button click");
// });

// c.addEventListener("click", function () {
//     console.log("c click");
// });

// b.addEventListener("click", function () {
//     console.log("b click");
// });

// a.addEventListener("click", function () {
//     console.log("a click");
// });


// Event Capturing:

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.log("click me");
});

c.addEventListener("click", function () {
    console.log("c click");
});

b.addEventListener("click", function () {
    console.log("b click");
});

a.addEventListener("click", function () {
    console.log("a click")
    
},true);
