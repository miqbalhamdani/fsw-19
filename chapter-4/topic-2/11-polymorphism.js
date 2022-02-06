class Human {
  job() {
    console.log("unemployment");
  }
}

class President extends Human {
  job() {
    console.log("i'm manage country");
  }
}

class Programmer extends Human {
  job() {
    console.log("i'm manage code");
  }
}

class Citizen extends Human {

}

let Obama = new President();
let Fullstack = new Programmer();
let People = new Citizen();


Obama.job();
Fullstack.job();
People.job();
