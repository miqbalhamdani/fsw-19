const batu = document.querySelector(".player #batu");
const kertas = document.querySelector(".player #kertas");

// add inline style
// batu.addEventListener("click", () => {
//   batu.style.padding = "22px 45px";
//   batu.style.backgroundColor = "#C4C4C4";
//   batu.style.borderRadius = "20px";
// });

// add class
// batu.addEventListener("click", () => {
//   batu.classList.add("highlight");
// });

// with function // es6
// const chooseHand = (event) => {
//   console.log(event);
//   const element = event.path[1];
//   element.classList.add("highlight");

//   // batu.classList.add("highlight");
// };

kertas.onclick = () => {
  console.log("kertas di klik");

  kertas.classList.add("highlight");
};
