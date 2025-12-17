// Add eventListener

// let p = document.querySelector("p");
// p.addEventListener("click", function() {
//     p.style.color = "red";
// })

// let p = document.querySelector("p");
// p.addEventListener("dblclick", function () {
//     p.style.color = "green";
// });
// console.dir(p);


// remove eventListener

// let p = document.querySelector("p");

// function dblclick () {
//     p.style.color = "yellow";
// }
// p.removeEventListener("dblclick", dblclick);
// console.log(p);

// let input = document.querySelector("input");
// input.addEventListener("input", function() {
//     console.log("typed");
// })


// input 

// let inp = document.querySelector("input");
// inp.addEventListener("input", function (det) {
//     if (det.data !== null){
//         console.log(det.data);
//     }
// });


// change
// Basic way:

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");
// sel.addEventListener("change", function (details) {
//     device.textContent = `You Selected ${details.target.value} Device`;
//     console.dir(details.target.value);

// });

// Advanced way:

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");
// const colors = {
//     "Asus": "red",
//     "Xiomi": "orange",
//     "Apple": "grey",
//     "Iqoo": "purple"
// };

// sel.addEventListener("change", function (details) {
//     let selectedDevice = details.target.value;
//     let color = colors[selectedDevice] || "black";
//     device.innerHTML = `You Selected <span style="color: ${color}">${selectedDevice}</span> Device`;
// });


// 
// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function (dets) {
//     if (dets.key == " ") {
//         h1.textContent = "Space";
//     } else {
//         h1.textContent = dets.key;
//     }
//     console.log(dets.key);

// });


// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");

// btn.addEventListener("click", function () {
//     fileinp.click();
// });

// fileinp.addEventListener("change", function (dets) {
//     const file = dets.target.files[0];
//     if (file) {
//         btn.textContent = file.name;
//     }
    // if (dets.target.files[0] == undefined) {
    //     btn.textContent = "Upload File";
    // } else {
    //     btn.textContent = dets.target.files[0].name;
    // }
// });

// mouse events
// let main = document.querySelector("#main");
// main.addEventListener("mouseover", function () {
//     main.style.backgroundColor = "green";
// });
// main.addEventListener("mouseout", function () {
//     main.style.backgroundColor = "red";
// });

// mouse move
