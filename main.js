const hamburger = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".nav-bar")

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active")
})