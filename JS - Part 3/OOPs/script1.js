// function CreateCar(name, company, type, milage, price) {
//     this.name = name;
//     this.company = company;
//     this.type = type;
//     this.milage = milage;
//     this.price = price;
//     this.write = function(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         document.body.append(h1);
//         console.log(c1, c2, c3);
//     };
// };
// let c1 = new CreateCar("Swift", "Suzuki", "hatch-back", 21, "10 lakh" );
// let c2 = new CreateCar("Safari", "Tata", "Premiun SUV", 11, "50 lakh" );
// let c3 = new CreateCar("Polo", "VW", "hatch-back", 17, "15 lakh" );



function CreateCar(name, company, type, milage, price) {
    this.name = name;
    this.company = company;
    this.type = type;
    this.milage = milage;
    this.price = price;

    this.write = function(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        document.body.append(h1);
        
    };
}

let c1 = new CreateCar("Swift", "Suzuki", "hatch-back", 21, "10 lakh");
// console.log(c1);
let c2 = new CreateCar("Safari", "Tata", "Premium SUV", 11, "50 lakh");
// console.log(c2);
let c3 = new CreateCar("Polo", "VW", "hatch-back", 17, "15 lakh");
// console.log(c3);

c1.print();
c2.print();
c3.print();
// Example test:
// c1.write();
// c2.write();
// c3.write();

