function check_backdrop(backdrop_class) {
  const conditional = document.querySelector(backdrop_class);
  const testElem = document.createElement('div');
  if (testElem.style.backdropFilter !== undefined) {
    conditional.classList.toggle("backdrop");
  } else {
    conditional.classList.toggle("no-backdrop");
  }
}
