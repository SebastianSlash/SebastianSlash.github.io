document.querySelectorAll('a').forEach(link => {
  if (link.parentElement.localName == 'li') {
    if (link.parentElement.parentElement.localName == 'ol') {
      link.classList.toggle('link');
    }
  }
});
document.querySelector('.blog_article').querySelectorAll('a').forEach(link => {

  if (link.classList.contains("specail-link") || link.classList.contains("link") || link.classList.contains("social-share-link")) {

  } else {
    if (link.parentElement.parentElement.localName != 'ol') {
      link.classList.toggle('special-link');
      if (!link.outerHTML.includes("href=\"#")) {
        link.target = "blank";
      }

    }
  }

});
