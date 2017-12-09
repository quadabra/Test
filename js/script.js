var menuButton = document.querySelector('.navigation__menu');
var menuContent = document.querySelector('.navigation__list');

(function () {
  menuContent.classList.add('hidden');
  menuButton.addEventListener('click', function () {
    menuContent.classList.toggle('hidden');
    menuButton.classList.toggle('sandwich-button_active')
  });
})();
