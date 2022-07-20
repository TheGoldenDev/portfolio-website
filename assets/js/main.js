let Projects = require('./projects.js');

// Sticky Navigation
function stickyHeader() {
  let w = window.innerWidth;
  const nav = document.getElementById('site-header');

  if (w > 1200) {
    window.onscroll = function () {
      if (window.pageYOffset > 10) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    };
  }
}
stickyHeader();

//Mobile Menu
function menuScript() {
  let w = window.innerWidth;
  const m = document.getElementById('mobile-sidebar-menu');
  let mobileMenu = document.querySelectorAll('.site-navigation .navigation');
  const mobileMenuOpen = document.getElementById('hamburger-menus');
  const overlayClose = document.getElementById('overlaybg');

  if (w < 1200) {
    let mobileMenuClone = mobileMenu[0].cloneNode(true);
    m.appendChild(mobileMenuClone);
  }

  overlayClose.addEventListener('click', function (e) {
    e.preventDefault();
    m.classList.remove('sidemenu-active');
    mobileMenuOpen.classList.remove('click-menu');
  });

  mobileMenuOpen.addEventListener('click', function () {
    m.classList.toggle('sidemenu-active');
    mobileMenuOpen.classList.toggle('click-menu');
  });
}
menuScript();

//Import JS projects array class here
