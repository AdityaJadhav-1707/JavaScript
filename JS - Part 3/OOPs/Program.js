class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} vehicle starting...`);
  }
}

class Bike extends Vehicle {
  #speed = 0; // private → encapsulation

  accelerate() {
    this.#speed += 10;
    console.log("Speed:", this.#speed);
    
  }

  start() {   // polymorphism
    console.log(`${this.brand} bike starting...`);
  }
}

const b = new Bike("Yamaha");
b.start();       // polymorphism
b.accelerate();  // encapsulation
