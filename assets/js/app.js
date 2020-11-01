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

const goDown = document.querySelector(".goDown");

const options = {
  root: null,
  threshold: 0.3,
};

const sectionAbout = document.querySelector(".about");
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      if(goDown.classList.contains("mobileLanding")) {
        console.log("about is intersecting and mobileLanding is in goDown.classList")
        goDown.classList.toggle("mobileLanding");
        observer.unobserve(entry.target);
      };
      return;
    }
    goDown.classList.toggle("mobileLanding");
    // observer.unobserve(entry.target);
  });
}, options);

observer.observe(sectionAbout);
