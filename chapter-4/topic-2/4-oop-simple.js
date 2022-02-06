class kendaraan {
  constructor(car) {
    // property
    this.name = car;
  }

  // methods
  klakson() {
    console.log(`Beep! ${this.name} mau lewat...`);
  }
}

const bmw = new kendaraan('BMW');

bmw.klakson();
