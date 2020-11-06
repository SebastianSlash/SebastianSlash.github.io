const sectionAbout = document.querySelector(".about");
const goDown = document.querySelector(".goDown");
const options = {
  root: null,
  threshold: 0.3,
};

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
