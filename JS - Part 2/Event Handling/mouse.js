// mouse over & mouse out

// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover", function () {
//     abcd.style.backgroundColor = "aqua";
// });

// abcd.addEventListener("mouseout", function () {
//     abcd.style.backgroundColor = "red";
// });


// mouse move
//  window.addEventListener("mousemove", function (dets) {
// console.log(dets.clientX, dets.clientY);
//  });

//

// let abcd = document.querySelector("#abcd");

// window.addEventListener("mousemove", function (dets) {
//     abcd.style.top = dets.clientY + "px";
//     abcd.style.left = dets.clientX + "px";
// });

//

// const box = document.querySelector("#box");

// window.addEventListener("mouseover", () => {
//     console.log("Mouse ENTERED the box");
// });

// window.addEventListener("mousemove", () => {
//     console.log("Mouse is MOVING inside the box");
// });



// mouse pointer in the middle of the box

const abcd = document.querySelector("#abcd");

window.addEventListener("mousemove", function (dets) {
    const boxWidth = abcd.offsetWidth;
    const boxHeight = abcd.offsetHeight;

    abcd.style.top = (dets.clientY - boxHeight / 2) + "px";
    abcd.style.left = (dets.clientX - boxWidth / 2) + "px";
});


// 