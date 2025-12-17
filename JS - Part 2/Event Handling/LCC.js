// // Live Character Counter

// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input", function () {
//     let left = 20 - inp.value.length;
//     span.textContent = left;

//     if (left < 0) {
//         span.style.color = "red";
//     } else {
//         span.style.color = "black";
//     }
// });


const inp = document.querySelector("input");
const span = document.querySelector("span");

inp.addEventListener("input", () => {
    const remaining = 10 - inp.value.length;

    span.textContent = remaining;
    span.style.color = remaining < 0 ? "red" : "black";
});
