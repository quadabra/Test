'use strict';

var menuButton = document.querySelector('.navigation__menu');
var menuContent = document.querySelector('.navigation__list');
var paymentForm = document.querySelector('.payment-form');
var inputNumbers = paymentForm.querySelectorAll('.payment-form__card-number');
var inputCvc = paymentForm.querySelector('.payment-form__cvc-number');

(function () {
  menuContent.classList.add('hidden');
  menuButton.addEventListener('click', function () {
    menuContent.classList.toggle('hidden');
    menuButton.classList.toggle('sandwich-button_active')
  });
})();

var validateNumeric = function (evt) {
  if (isNaN(evt.target.value)) {
    evt.target.setCustomValidity('Введите цифры');
    evt.target.style = 'outline: 1px solid red';
  } else {
    evt.target.setCustomValidity('');
    evt.target.style = 'outline: none';
  }
};

for (var i = 0; i < inputNumbers.length; i++) {
  inputNumbers[i].addEventListener('invalid', validateNumeric);
}

inputCvc.addEventListener('invalid', validateNumeric);
