class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  _call() {
    console.log(`Call me as a ${this.name}`);
  }
}

class Programmer extends Human {
  constructor(name, address, task, salary) {
    super(name, address);
    this.task = task;
    this.salary = salary;
  }
  doCall() {
    super._call(); // Will run
  }
}

let sb = new Human("Sabrina", "Jakarta");
let job = new Programmer("Developer", "$1000");
sb._call(); // Call me as a Sabrina
/*Meskipun ini gak error ketika kita panggil protected secara public. Tapi, kita harus paham method ini protected, yang semestinya hanya boleh dipanggil di dalam class declaration atau sub-classnya.*/
job._call(); // Call me as a Developer
