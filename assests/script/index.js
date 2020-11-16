let colorP = document.querySelector("p#colorP");
let btn = document.querySelector("button#btn");

btn.addEventListener('click',toggleBackgroundColor);

function toggleBackgroundColor() {
  if (colorP.classList !== 'toggled') {
    colorP.classList.add('toggled');
  } else {
    colorP.classList.remove('toggled');
  }
}
