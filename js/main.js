// A6T Assainissement — interactions légères
document.addEventListener('DOMContentLoaded', function () {
  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Sous-menu "Services" au tap sur mobile (le hover ne fonctionne pas au doigt)
  var dropdownTrigger = document.querySelector('.nav-dropdown > .dropdown-trigger');
  var dropdown = document.querySelector('.nav-dropdown');
  if (dropdownTrigger && dropdown) {
    dropdownTrigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        dropdown.classList.toggle('dropdown-open');
      }
    });
  }

  // Ferme automatiquement les autres <details> FAQ pour garder une lecture propre (optionnel, léger)
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});
