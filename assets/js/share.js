const share_expand = document.querySelector(".share-expand");
const share_links = document.querySelector(".share-links");
const social_share = document.querySelector(".social-share");

share_expand.addEventListener('click', () => {
  share_links.classList.toggle("show");
  social_share.classList.toggle("show");
  share_expand.classList.toggle("show");
});
