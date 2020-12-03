function check_backdrop() {
  const conditional = document.querySelector('.cookie-notice');
  const testElem = document.createElement('div');
  if (testElem.style.backdropFilter !== undefined) {
    conditional.classList.toggle("backdrop");
  } else {
    conditional.classList.toggle("no-backdrop");
  }
}
