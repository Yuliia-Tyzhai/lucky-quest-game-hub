//we make the color of the link in the active state the corresponding color
document.addEventListener('DOMContentLoaded', event => {
  const links = document.querySelectorAll('.header-nav-link');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // we prevent going through the link
      links.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('header-nav-link')) {
      links.forEach(link => link.classList.remove('active'));
    }
  });
});
// mobile menu
document.addEventListener('DOMContentLoaded', event => {
  const burgerMenu = document.querySelector('.mobile-menu-open-btn');
  const mobileMenu = document.querySelector('.mobile-menu-wraper');
  const closeMenuBtn = document.querySelector('.mobile-menu-wraper-btn-close');

  // Відкриття мобільного меню
  burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });

  // Закриття мобільного меню
  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });

  // Закриття мобільного меню при натисканні клавіші Esc
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      mobileMenu.classList.remove('is-open');
    }
  });
});
