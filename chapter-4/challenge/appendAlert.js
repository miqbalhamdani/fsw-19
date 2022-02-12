function getResult() {
  const player = "kertas";
  const com = "batu";

  if (player === "gunting" && com === "batu") {
    return "lose";
  } else if (player === "kertas" && com === "batu") {
    return "win";
  }

  return "draw";
}

document.getElementById("kertas").addEventListener("click", () => {
  const result = getResult();
  const img = getImage(result);

  const imageWinElement = document.querySelector("#game-result .image-win");
  imageWinElement.append(img);

  const vsTextElement = document.querySelector("#game-result .vs-text");
  vsTextElement.style.display = "none";
});

// result: win / lose / draw
const getImage = (result) => {
  let imageSource = "./img/draw.jpg";

  if (result === "win") {
    imageSource = "./img/win.jpg";
  } else if (result === "lose") {
    imageSource = "./img/lose.jpg";
  }

  const img = document.createElement("img");

  img.src = imageSource;
  img.style.width = "300px";
  img.style.height = "300px";

  return img;
};
