const kotak = document.createElement("div");

kotak.style.height = "100px";
kotak.style.width = "300px";
kotak.style.backgroundColor = "green";
kotak.textContent = "COM WIN";
kotak.style.color = "white";
kotak.style.fontSize = "40px";
kotak.style.textAlign = "center";
kotak.style.transform = "rotate(-20deg)";

// document.getElementById("game-result").append(kotak);
// document.querySelector("#game-result .vs-text").remove();

// triger
document.getElementById("kertas").addEventListener("click", () => {
  document.querySelector("#game-result .player-result").style.display = "block";
  document.querySelector("#game-result .vs-text").remove();

  document.querySelector("#game-result .player-result").textContent =
    getResult();
});

function getResult() {
  let result = "";

  // perhitungan
  // if (com == batu && player == gunting) {
  //   result = "COM WIN"
  // } else if () {

  // } else {
  //   result = "DRAW"
  // }

  result = "DRAW";

  return result;
}
