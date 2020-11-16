let colorP = document.querySelector("p#colorP");
let btn = document.querySelector("button#btn");

let checkColor = false;
const changeColor = () => {
  if (!checkColor) {
    colorP.className = "blue";
    checkColor = true;
  } else {
    colorP.className = "red";
    checkColor = false;
  }
};
btn.addEventListener("click", changeColor);
