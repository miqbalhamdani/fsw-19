class Human {
  constructor(name, address) {
    if (this.constructor === Human) {
      throw new Error("Cannot instantiate from Abstract Class");
      // Because it's abstract
    }

    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }

  work() {
    console.log("Work!");
  }
}

// Create a child class from Human
class Programmer extends Human {
  code() {
    console.log("Code some");
  }
}

// Initiate from Human directly
// let Obama = new Human("Barrack Obama", "Washington DC");
// Obama.introduce(); // Hi, my name is Barack Obama

let Isyana = new Programmer("Isyana", "Jakarta");
Isyana.code(); // Code some

Isyana.introduce(); // Hi, my name is Isyana
Isyana.work(); // Work!
