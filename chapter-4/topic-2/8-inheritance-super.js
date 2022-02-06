class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  introducePerson() {
    console.log(`Hi, my name is ${this.name}`);
    console.log(`i live in ${this.address}`);
  }
  work() {
    console.log("Work!");
  }
}

// Create a child class from Human
class Programmer extends Human {
  constructor(name, address) {
    super(name, address);
  }
  introduceJob() {
    console.log(`I can write Javascript`);
  }
  code() {
    super.work();
    console.log("Code some");
  }
}

let Isyana = new Programmer("Isyana", "Jakarta");

Isyana.code();
