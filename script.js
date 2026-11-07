// Mobile menu toggle
(function () {
  var t = document.querySelector('.nav-toggle');
  var n = document.querySelector('.main-nav');
  if (!t || !n) return;
  t.addEventListener('click', function () {
    var open = n.classList.toggle('is-open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
