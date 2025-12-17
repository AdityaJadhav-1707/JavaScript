let count = 0;
let seconds = 8;
let progressBar = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let interval = setInterval(function () {

    if (count <= 100) {
        progressBar.style.width = `${count}%`;
        percentText.textContent = `${count}%`;
        count++;
    } else {
        document.querySelector("h2").textContent = "Downloaded";
        clearInterval(interval); // stop at 100%
    }

}, (seconds * 1000) / 100);
