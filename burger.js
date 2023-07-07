let hamburger = document.querySelector(".menu-burger") 
let menu = document.querySelector(".menu-list")
let body = document.querySelector("body")

hamburger.onclick = function () {
  body.classList.toggle ("noscroll")
  menu.classList.toggle ("active-burger")
  hamburger.classList.toggle ("menu-burger-open")
}