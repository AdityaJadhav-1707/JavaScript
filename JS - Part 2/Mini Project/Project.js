const user = [
    {
        name: " Monkey D Luffy 🏴‍☠️🍖",
        pic: "https://wallpaperaccess.com/full/9309462.jpg",
        bio: ["I am the man who will surpass you! 💥",  
            "I'm Going to Become King of the Pirates! 👑☠️"]
//         bio: [
//     "I am the man who will surpass you! 💥",
//     "I'm Going to Become King of the Pirates! 👑☠️"
// ]

    },
    {
        name: "Roronoa Zoro ⚔️",
        pic: "https://i.pinimg.com/736x/49/6f/dc/496fdccf350985032cb8c3821314111b.jpg",
        bio: ["Nothing happened. 😤",
            "Scars on the back are a swordsman’s shame! 💪"]
    },
    {
        name: "Vinsmoke Sanji 🔥",
        pic: "https://th.bing.com/th/id/R.0df5504c20d907638dd88da00488c766?rik=qK2MRM%2bjecjhKQ&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26300000%2fSanji-one-piece-26359906-985-738.jpg&ehk=bBJ7vtgEBuXtrVfNkkhM63ZXKarvdAq8ZrbiYku3ek4%3d&risl=&pid=ImgRaw&r=0",
        bio: ["I won’t kick a woman. 💛",
            "I believe in the All Blue! 🌊"]
    },
    {
        name: "Nami",
        pic: "https://th.bing.com/th/id/OIP.g1lvgPyZgpB7EA-4v-2ILgHaMa?w=186&h=311&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        bio: ["I will draw a map of the entire world! 🗺️",
            "Thank you… for loving me! 💖"]
    },
    {
        name: "Usopp 🎯",
        pic: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/one-piece-confident-usopp.jpg",
        bio: ["I am Captain Usopp! 😎", 
            "A brave warrior of the sea! 🌊"]
    },
    {
        name: "Tony Tony Chopper 🐾",
        pic: "https://tse4.mm.bing.net/th/id/OIP.5Zk3opVdClV86chuo2OTQwHaHi?rs=1&pid=ImgDetMain&o=7&rm=3",
        bio: ["I’m not a raccoon!! 😡",
            "I want to be a doctor who can cure anything! 🩺"]
    },
    {
        name: "Nico Robin 📚",
        pic: "https://th.bing.com/th/id/OIP.pyoDo02s6br1HeNoQLEMgAHaEK?w=296&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        bio: ["I want to live! ❤️",
            "I’ll uncover the true history. 🕊️"]
    },
    {
        name: "Franky 🤖",
        pic: "https://th.bing.com/th/id/OIP.L_usXSnA-2f2knvcVCW2ogHaE6?w=247&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        bio: ["SUPER!!! 💥",
            "I’m going to build a dream ship! 🚢"]
    },
    {
        name: "Brook ☠️🎻",
        pic: "https://th.bing.com/th/id/OIP.T8kio0vJC0K7LBcvw-Pt5gHaJ4?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        bio: ["Yohohoho! 🎶",
            "May I see your panties? 😄"]
    }
];

// Updated JS

function showUsers(arr) {
    document.querySelector(".cards").innerHTML = ""; // clear before adding

  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(user);
// Live Search Filter
let inp = document.querySelector(".search");
inp.addEventListener("input", function () {
    // let newUsers = user.filter((users) => {
    //     return user.name.startsWith(inp.value);
    // });

    // showUsers(newUsers);
let text = inp.value.toLowerCase();

let filteredUsers = user.filter(u => 
    u.name.toLowerCase().includes(text)
  );

  showUsers(filteredUsers);
});



// Advanced Features=>
// --------------------------------------------------------
// ✅ Debounce Function
// --------------------------------------------------------
// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// --------------------------------------------------------
// ⭐ Debounced Search Handler
// --------------------------------------------------------
// let inp = document.querySelector(".search");

// function handleSearch() {
//   let text = inp.value.toLowerCase();

//   let filteredUsers = user.filter(u =>
//     u.name.toLowerCase().includes(text)
//   );

//   showUsers(filteredUsers);
// }

// Apply debounce (250ms delay)
// inp.addEventListener("input", debounce(handleSearch, 300));

