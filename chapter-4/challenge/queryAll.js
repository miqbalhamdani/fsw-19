const hands = document.querySelectorAll(".player .hand");

const removeAll = () => {
  hands.forEach((element) => {
    element.classList.remove("highlight");
  });
};

const comPlay = () => {
  document.getElementById("com-gunting").classList.add("highlight");
};

hands.forEach((element) => {
  element.onclick = () => {
    removeAll();

    element.classList.add("highlight");

    comPlay();
  };
});
