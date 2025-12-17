// option-1: tutorial

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (details) {
//     details.preventDefault();

//    let card = document.createElement("div");
//    card.classList.add("card");

//    let profile = document.createElement("div");
//    profile.classList.add("profile");

//    let img = document.createElement("img");
//    img.setAttribute("src", inputs[0].value);

//    let h3 = document.createElement("h3");
//    h3.textContent = inputs[1].value;
//    let h5= document.createElement("h5");
//    h5.textContent = inputs[2].value;
//    let p = document.createElement("p");
//    p.textContent = inputs[3].value;

//    profile.appendChild(img);
//    card.appendChild(profile);

//    card.appendChild(h3);
//    card.appendChild(h5);
//    card.appendChild(p);

//    main.appendChild(card);

//    inputs.forEach(function(inp) {
//     if (inp.type !== "submit") {
//        inp.value = "";
//      }
//    })
// });

// option-2: Chat GPT

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input:not([type='submit'])");
const main = document.getElementById("main");

// Fallback image if the user enters an empty or invalid URL
const FALLBACK_IMG = "https://via.placeholder.com/150";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect input values
  const [imgURL, name, role, description] = [...inputs].map(inp => inp.value.trim());

  // ---- VALIDATION ----
  if (!name || !role || !description) {
    alert("Please fill in all fields except the image (it is optional).");
    return;
  }

  // Quick check for image URL format
  const validURL = imgURL.startsWith("http://") || imgURL.startsWith("https://");

  // ------ CARD CREATION ------
  const card = document.createElement("div");
  card.className = "card";

  const profile = document.createElement("div");
  profile.className = "profile";

  const img = document.createElement("img");
  img.src = validURL ? imgURL : FALLBACK_IMG;

  const h3 = document.createElement("h3");
  h3.textContent = name;

  const h5 = document.createElement("h5");
  h5.textContent = role;

  const p = document.createElement("p");
  p.textContent = description;

  // Build structure
  profile.appendChild(img);
  card.append(profile, h3, h5, p);
  main.appendChild(card);

  // Clear form
  inputs.forEach(inp => (inp.value = ""));
});
