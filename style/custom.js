//Active scroll navbar activation
const links = document.querySelectorAll('.navbar-item');
const sections = document.querySelectorAll('.section-jump');
function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 90 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('is-active'));
  links[index].classList.add('is-active');
}
changeLinkState();
window.addEventListener('scroll', changeLinkState);

//Scoll to view functions for navbar items
function scrollToDesign() {
    var x = document.getElementById("description_section");
    x.scrollIntoView({behavior: 'smooth'});
}
function scrollToPerformance() {
    var x = document.getElementById("detail_section");
    x.scrollIntoView({behavior: 'smooth'});
}
function scrollToHeritage() {
    var x = document.getElementById("heritage");
    x.scrollIntoView({behavior: 'smooth'});
}
