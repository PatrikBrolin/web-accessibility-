const hamburger = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".nav-bar")
const animationBtn = document.querySelector(".animationBtn")
const animationEx = document.querySelector(".animation-ex")

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active")
})


animationBtn.addEventListener("click", () =>{
  animationEx.classList.toggle("active");
})