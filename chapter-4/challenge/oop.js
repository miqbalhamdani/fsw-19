class Game {
  constructor() {
    this.comBatu = document.getElementById("com-batu");
    this.comKertas = document.getElementById("com-kertas");
    this.comGunting = document.getElementById("com-gunting");
  }

  play() {
    const random = Math.floor(Math.random() * 3);
    console.log("random: ", random);

    if (random === 0) {
      // document.getElementById("com-batu").classList.add("highlight");
      this.comBatu.classList.add("highlight");
    } else if (random === 1) {
      // document.getElementById("com-kertas").classList.add("highlight");
      this.comKertas.classList.add("highlight");
    } else if (random === 2) {
      // document.getElementById("com-gunting").classList.add("highlight");
      this.comGunting.classList.add("highlight");
    }
  }

  remove() {
    console.log("remove class");
    this.comBatu.classList.remove("highlight", "text-black");
  }
}

const game = new Game();
game.remove();

document.getElementById("gunting").addEventListener("click", () => {
  document.getElementById("gunting").classList.add("highlight");

  game.play();
});
