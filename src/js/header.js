document.addEventListener('DOMContentLoaded', event => {
  const links = document.querySelectorAll('.header-nav-link');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // запобігаємо переходу по посиланню
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
