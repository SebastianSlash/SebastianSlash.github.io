function get_card_height(element) { // padding already substracted
  var feat_img = false;
  element.classList.forEach(cls => {
    if (cls == "hidden") {
      feat_img = true;
    }
  });
  if (feat_img) {
    var card_style = window.getComputedStyle(element.parentElement.parentElement);
    var overlay_style = window.getComputedStyle(element.parentElement);
    return parseFloat(card_style.getPropertyValue('height')) - parseFloat(overlay_style.getPropertyValue('padding-top'));
  } else {
    var card_style = window.getComputedStyle(element.parentElement);
    return parseFloat(card_style.getPropertyValue('height')) - parseFloat(card_style.getPropertyValue('padding-top'));
  }
}

function get_header_height(element) {
  var header_style = window.getComputedStyle(element.previousElementSibling);
  return parseFloat(header_style.getPropertyValue('height'));
}

function get_line_height(element) {
  var p_style = window.getComputedStyle(element.firstElementChild);
  return parseFloat(p_style.getPropertyValue('line-height'));
}

function get_br_height(element) {
  var br_count = 0;
  var child_nodes = (element.firstElementChild.childNodes.length - 1); //ignore if br is at end of p
  var i;
  for (i = 0; i < child_nodes; i++) {
    if (element.firstElementChild.childNodes[i].localName == 'br') {
      br_count++;
      var br_child = element.firstElementChild.childNodes[i];
    }
  }
  if (br_count > 0) {
    var br_style = window.getComputedStyle(br_child);
    var br_margin = parseFloat(br_style.getPropertyValue('margin-top'));
  } else {
    var br_margin = 0;
  }

  return br_count * br_margin;
}

function get_excerpt_padding(element) {
  var excerpt_style = window.getComputedStyle(element);
  return parseFloat(excerpt_style.getPropertyValue('padding-top'));
}

function calc_excerpt_height(card_height, header_height, line_height, excerpt_padding) {
  return card_height - header_height - excerpt_padding - line_height;
}

function calc_max_lines(excerpt_height, br_height, line_height) {
  var text_height = excerpt_height - br_height;
  return parseInt(text_height / line_height);
}

function calc_div_height(excerpt_padding, br_height, line_height, max_lines) {
  return (line_height * max_lines) + br_height + excerpt_padding;
}

function truncate_excerpt(element) {
  var card_height = get_card_height(element);
  var header_height = get_header_height(element);
  var line_height = get_line_height(element);
  var excerpt_padding = get_excerpt_padding(element);
  var br_height = get_br_height(element);
  var excerpt_height = calc_excerpt_height(card_height, header_height, line_height, excerpt_padding);
  var max_lines = calc_max_lines(excerpt_height, br_height, line_height);
  var div_height = calc_div_height(excerpt_padding, br_height, line_height, max_lines);
  console.log('br height:');
  console.log(br_height);

  element.style.height = String(div_height) + "px";
  var module = element;
  $clamp(module, {clamp: max_lines});
}

// check_backdrop('.excerpt-overlay') // disabled because it seems to blur everything, not just background

const excerpts = document.querySelectorAll(".card-excerpt");

excerpts.forEach(element => {
  truncate_excerpt(element);
});
