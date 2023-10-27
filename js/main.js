const navItems = document.querySelector('.navbar_items');
const burger = document.querySelector('.burger');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
  const visibility = navItems.getAttribute('data-visible');

  if (visibility === 'false') {
    navItems.setAttribute('data-visible', true);
    burger.setAttribute('aria-expanded', true);
    burger.setAttribute('src', 'assets/images/icon-menu-close.svg');
    body.style.backdropFilter = 'blur(5px)';
  } else if (visibility === 'true') {
    navItems.setAttribute('data-visible', false);
    burger.setAttribute('aria-expanded', false);
    burger.setAttribute('src', 'assets/images/icon-menu.svg');
  }
});
