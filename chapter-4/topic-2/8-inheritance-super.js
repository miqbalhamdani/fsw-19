class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introducePerson() {
    console.log(`Hi, my name is ${this.name}`);
  }

  work() {
    console.log("Work!");
  }
}

// Create a child class from Human
class Programmer extends Human {
  constructor(name) {
    super(name);
  }
  introduceJob() {
    console.log(`I can write Javascript`);
  }
  code() {
    console.log("Code some");
  }
}

let Isyana = new Programmer("Isyana", "Jakarta");
Isyana.introduceJob();
Isyana.introducePerson();
