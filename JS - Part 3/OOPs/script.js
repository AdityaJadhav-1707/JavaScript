function CreatePencil(name, price, color,) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.write = function (text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.append(h1);
    };
}

let pencil = new CreatePencil("Natarj", 10, "black");
let pencil1 = new CreatePencil("Apsara", 12, "red");
let pencil2 = new CreatePencil("Doms", 15, "green");



// function CreateAnime(name, country, MainCharacter, ratings) {
//     this.name = name;
//     this.country = country;
//     this.MainCharacter = MainCharacter;
//     this.ratings = ratings;
// }

// let a1 = new CreateAnime("OnePiece", "Japan", "Monkey_D_Luffy", 10);
// let a2 = new CreateAnime("DemonSlayer", "Japan", "Tanjiro_Kamado", 9);