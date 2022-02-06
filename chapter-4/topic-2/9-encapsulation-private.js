class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  introduce() {
    console.log(`Hi, my name is ${this.name}`);
    this.#work();
  }
  #work = () => {
    console.log("Work!");
  };
}

// Create a child class from Human
class Programmer extends Human {
  code() {
    console.log("Code some");
  }
}

let Obama = new Human("Barrack Obama", "Washington DC");
Obama.introduce();
