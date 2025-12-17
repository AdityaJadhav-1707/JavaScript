/* -------------------------------
   LOCAL STORAGE SYSTEM
--------------------------------*/
function loadSavedCards() {
    const data = localStorage.getItem("userCards");
    return data ? JSON.parse(data) : null;
}

function saveCards() {
    localStorage.setItem("userCards", JSON.stringify(users));
}

/* -------------------------------
   DEFAULT USERS
--------------------------------*/
let users = [
    { name: "Fatima Uma", img: "https://i.pravatar.cc/100?img=12", hometown: "Singapore", booking: "3 times" },
    { name: "Andrew Clark", img: "https://i.pravatar.cc/100?img=37", hometown: "London", booking: "5 times" },
    { name: "Rina Kapoor", img: "https://i.pravatar.cc/100?img=48", hometown: "Mumbai", booking: "2 times" },
    { name: "John Doe", img: "https://i.pravatar.cc/100?img=19", hometown: "New York", booking: "7 times" }
];

/* -------------------------------
   LOAD SAVED CARDS (IF ANY)
--------------------------------*/
const savedUsers = loadSavedCards();
if (savedUsers) users = savedUsers;

/* -------------------------------
   CARD UI SYSTEM
--------------------------------*/
let index = 0;
const card = document.getElementById("card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

/* ------- Load a Card -------- */
function loadUser(i) {
    const u = users[i];
    card.innerHTML = `
        <div class="profile">
            <img src="${u.img}">
            <div><h2>${u.name}</h2></div>
        </div>

        <div class="info"><span>Home town</span><p>${u.hometown}</p></div>
        <div class="info"><span>Bookings</span><p>${u.booking}</p></div>

        <div class="actions">
            <button class="call-btn">📞 Call</button>
            <button class="msg-btn">Message</button>
        </div>
    `;
}

loadUser(index);

/* ------- Swap Animation -------- */
function swapCard(dir) {
    card.classList.add("slide-out");

    setTimeout(() => {
        index = (index + dir + users.length) % users.length;
        loadUser(index);
        card.classList.remove("slide-out");
        card.classList.add("slide-in");

        setTimeout(() => card.classList.remove("slide-in"), 350);
    }, 280);
}

prevBtn.onclick = () => swapCard(1);
nextBtn.onclick = () => swapCard(-1);

/* -------------------------------
   MODAL CONTROLS
--------------------------------*/
const addCardBtn = document.getElementById("addCardBtn");
const formModal = document.getElementById("formModal");
const closeModal = document.getElementById("closeModal");
const createBtn = document.getElementById("createNote");

addCardBtn.onclick = () => formModal.style.display = "flex";
closeModal.onclick = () => formModal.style.display = "none";

formModal.addEventListener("click", e => {
    if (e.target === formModal) formModal.style.display = "none";
});

/* -------------------------------
   ADD NEW CARD + SAVE TO STORAGE
--------------------------------*/
createBtn.onclick = () => {
    const newUser = {
        img: document.getElementById("imgUrl").value,
        name: document.getElementById("fullName").value,
        hometown: document.getElementById("homeTown").value,
        booking: document.getElementById("bookingCount").value
    };

    users.push(newUser);   // Add card into users[]
    saveCards();           // 🔥 Save to localStorage

    index = users.length - 1;
    loadUser(index);

    formModal.style.display = "none";
};
