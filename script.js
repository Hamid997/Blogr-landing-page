document.addEventListener('DOMContentLoaded', function () {
    const menuLogo = document.querySelector('.menu-hamburger');
    const menuNavs = document.querySelector('.menu-mobile');
    const menuIcon = menuLogo.querySelector('.menu-hamburger-img');

    menuLogo.addEventListener('click', () => {
        if (menuIcon.src.includes('icon-hamburger')) {
          menuIcon.src = 'images/icon-close.svg';
        } else {
          menuIcon.src = 'images/icon-hamburger.svg';
        }
      });

    menuLogo.addEventListener('click', function () {
        menuNavs.classList.toggle('visible');
    });
});