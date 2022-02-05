class kendaraan {
  constructor(car) {
    this.name = car;
  }

  klakson() {
    console.log(`Beep! ${this.name} mau lewat...`);
  }
}

const bmw = new kendaraan('BMW');

bmw.klakson();
