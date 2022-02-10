// ['batu', 'kertas', 'gunting']
const random = Math.floor(Math.random() * 3);
console.log("random: ", random);

// if (random === 0) {
//   document.getElementById("com-batu").style.backgroundColor = "#C4C4C4";
// } else if (random === 1) {
//   document.getElementById("com-kertas").style.backgroundColor = "#C4C4C4";
// } else if (random === 2) {
//   document.getElementById("com-gunting").style.backgroundColor = "#C4C4C4";
// }

let element = null;

if (random === 0) {
  element = document.getElementById("com-batu");
} else if (random === 1) {
  element = document.getElementById("com-kertas");
} else if (random === 2) {
  element = document.getElementById("com-gunting");
}

// add class
element.classList.add("highlight");

// remove class
document.getElementById("gunting").classList.remove("highlight");
