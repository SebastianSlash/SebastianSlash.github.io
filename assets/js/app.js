const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const navSlide = document.querySelector(".nav-slide");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener('click', () => {
  navSlide.classList.toggle("open");
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
  lines.forEach(line => {
    line.classList.toggle("open");
  });
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
