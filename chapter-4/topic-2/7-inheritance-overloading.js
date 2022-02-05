class Human {
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
  introduce(language) {
    super.introduce();
    console.log(`I can write ${language}`);
  }
  code() {
    console.log("Code some");
  }
}

let Isyana = new Programmer("Isyana", "Jakarta");
Isyana.introduce("HTML");
