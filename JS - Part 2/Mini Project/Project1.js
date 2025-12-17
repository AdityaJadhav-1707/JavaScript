// INPUT ELEMENTS
const imgInput = document.getElementById("imgInput");
const nameInput = document.getElementById("nameInput");
const townInput = document.getElementById("townInput");
const purposeInput = document.getElementById("purposeInput");
const categoryInput = document.querySelector("input[name='Category']");

// PREVIEW ELEMENTS
const previewImg = document.getElementById("previewImg");
const previewName = document.getElementById("previewName");
const previewTown = document.getElementById("previewTown");
const previewPurpose = document.getElementById("previewPurpose");
const previewCategory = document.getElementById("previewCategory");

// LIVE UPDATE EVENTS
imgInput.addEventListener("input", () => {
  previewImg.src = imgInput.value;
});

nameInput.addEventListener("input", () => {
  previewName.textContent = nameInput.value;
});

townInput.addEventListener("input", () => {
  previewTown.textContent = townInput.value;
});

purposeInput.addEventListener("input", () => {
  previewPurpose.textContent = purposeInput.value;
});

document.querySelectorAll("input[name='Category']").forEach((radio) => {
  radio.addEventListener("change", () => {
    previewCategory.textContent = radio.value;
  });
});

// THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
let darkMode = true;

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;

  document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");

  themeToggle.textContent = darkMode ? "🌙 Dark Mode" : "☀ Light Mode";
});

// SUBMIT FORM HANDLER
document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form Submitted Successfully!");
});
