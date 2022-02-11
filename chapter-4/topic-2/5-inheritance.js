class Human {
  static isLivingOnEarth = true;

  constructor(name, address) {
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
let Obama = new Human("Barrack Obama", "Washington DC");
Obama.introduce(); // Hi, my name is Barack Obama

let Isyana = new Programmer("Isyana", "Jakarta");
Isyana.code(); // Code some

Isyana.introduce(); // Hi, my name is Isyana
Isyana.work(); // Work!

console.log(Human.isLivingOnEarth);
