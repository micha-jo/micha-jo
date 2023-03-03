const burgerMenu = document.querySelector('.header__nav-burger-menu');
const menu = document.querySelector('.header__nav-menu');
const span = document.querySelector('.header__nav-span');

burgerMenu.addEventListener('click', function() {
  menu.classList.toggle("open");
  span.classList.toggle("open");
});
