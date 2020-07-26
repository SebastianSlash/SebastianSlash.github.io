const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
  lines.forEach(line => {
    line.classList.toggle("open");
  });
});
