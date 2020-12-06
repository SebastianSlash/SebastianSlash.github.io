function check_for_card_and_height(parent_node) {
    parent_node.classList.forEach(element_cls => {
      if (element_cls == "article-card") {
        return parent_node.offsetHeight;
      } else {
        return check_for_card_and_height(parent_node.parentElement);
      };
  })
}


function check_for_card_and_height2(parent_node) {
  var is_article_card = false
  var k;
  for (k = 0; k < parent_node.classList.length; k++) {
    if (parent_node.classList[k] == "article-card") {
      is_article_card = true;
    }
  }
  if (is_article_card) {
    return parent_node.offsetHeight;
  } else {
    return check_for_card_and_height(parent_node.parentElement);
  }

}

// function truncate_excerpt(excerpt) {
//   console.log('parent height:')
//   console.log(check_for_card_and_height2(excerpt));
// }

function truncate_excerpt(text_div) {
  var text_div_style = window.getComputedStyle(text_div);
  var card_header = text_div.previousElementSibling;
  var card_header_style = window.getComputedStyle(card_header);
  var exP = text_div.firstElementChild;
  exP.style.padding = 0;
  var ex_styles = window.getComputedStyle(exP);
  var lh = parseFloat(ex_styles.getPropertyValue('line-height'));
  console.log(lh)

  var br_count = 0;
  var chl = (exP.childNodes.length - 1); //ignore if br is at end of p
  var i;
  for (i = 0; i < chl; i++) {
    if (exP.childNodes[i].localName == 'br') {
      br_count++;
      var br_child = exP.childNodes[i];
    }
  }
  console.log(br_count)
  if (br_style) {
    var br_style = window.getComputedStyle(br_child);
    var br_h = parseFloat(br_style.getPropertyValue('margin-top'));
  } else {
    br_h = 0;
  }

  var pp_h = check_for_card_and_height2(text_div)  // does not work (returns undefined)
  console.log('pp_h:')
  console.log(pp_h)
  //var p_h = 250 // bad because hardcoded, but works
  var p_h = parseFloat(text_div_style.getPropertyValue('height'));
  //var p_h = 250 - parseFloat(card_header_style.getPropertyValue('height'));
  console.log(p_h)
  //var top_offset = exP.offsetTop;
  //console.log(top_offset)

  var padding_of_div = parseFloat(text_div_style.getPropertyValue('padding-top'));

  var p_h_usable = (p_h - padding_of_div - lh) * 1.2; // x1.2 because we use transform: scale(1.2)
  var p_h_nobr = p_h_usable - (br_h * br_count);
  var max_l = parseInt(p_h_nobr / lh);
  console.log(max_l)
  text_div.style.height = String(p_h_usable) + "px"

  var module = text_div;
  $clamp(module, {clamp: max_l});
}

check_backdrop('.excerpt-overlay')

const excerpts = document.querySelectorAll(".card-excerpt");

excerpts.forEach(element => {
  truncate_excerpt(element);
});
