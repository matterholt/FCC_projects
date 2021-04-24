const navbar = document.getElementById("navbar-links");
const buttonContainer = document.querySelector(".menuButtonContainer");
const menu = document.querySelector(".menuButton");

const menuSVG = document.getElementById("menuSVGIcon");

function toCloseMenu(domElem) {
  domElem.classList.remove("-isOpen");
  menuSVG.setAttribute("transform", "rotate(270)");
  domElem.classList.add("-isClose");
  buttonContainer.classList.add("-menuButtonTravel");
}
function toOpenMenu(domElem) {
  domElem.classList.remove("-isClose");
  menuSVG.setAttribute("transform", "rotate(90)");
  domElem.classList.add("-isOpen");
  buttonContainer.classList.remove("-menuButtonTravel");
}

function menuControl() {
  if (navbar.classList.contains("-isOpen")) {
    toCloseMenu(navbar);
  } else {
    toOpenMenu(navbar);
  }
}

menu.addEventListener("click", menuControl);
