'use strict'

const iconMenu = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__middle');

iconMenu.addEventListener("click", function (e) {

  document.body.classList.toggle('lock');
  iconMenu.classList.toggle('active');
  menuBody.classList.toggle('active');
});


window.onresize = () => {
  if (screen.width > 568) {
    document.body.classList.remove('lock');
    iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
  }
}
