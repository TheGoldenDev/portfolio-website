import ProjectDOMElement from './projects.js';
import getProjectsList from './project-list.js';

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
let projectList = getProjectsList()
projectList.forEach(project => {
  let projectEle = ProjectDOMElement(project)
  const portfolioProjectSection = document.querySelector('#portfolio-block .row.portfolio-grid');
  portfolioProjectSection.appendChild(projectEle)
})


//
$(document).ready(function () {
  $('form#contact-form').submit(function (e) {
    e.preventDefault();
    $('form#contact-form .error').remove();
    let hasError = false;
    let $email = $('form input[name="email');
    let $name = $('form input[name="name');
    let $message = $('form textarea[name="message');
    //set regular expression for email
    let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    // Use regex to check email field value
    if ($email.val() == '' || !emailRegex.test($email.val())) {
      $('#email')
        .parent()
        .append('<span class="error">Please provide a valid email.</span>');
      $('#email').addClass('inputError');
      hasError = true;
    }

    if ($name.val() == '') {
      $('#name')
        .parent()
        .append('<span class="error">Please provide your name.</span>');
      $('#name').addClass('inputError');
      hasError = true;
    }

    if ($message.val() == '') {
      $('#message')
        .parent()
        .append('<span class="error">Please enter a message.</span>');
      $('#message').addClass('inputError');
      hasError = true;
    }

    // Send the email if there are no errors
    if (!hasError) {
      let url = '/assets/php/contact.php';
      $.ajax({
        type: 'POST',
        url: url,
        data: $('#contact-form').serialize(),
      })
        .done(function () {
          // Make sure that the formMessages div has the 'success' class.
          $('form#contact-form').removeClass('error');
          $('form#contact-form').addClass('success');

          // Set the message text.
          $('#contact_modal').slideUp(300);
          $('.modal-backdrop').hide();
          let successMessage = $('form#contact-form').prepend(
            '<span class="success">Thank you. Your email was sent successfully.</span>'
          );
          setTimeout(successMessage, 2000);

          // Clear the form.
          $(
            'form input[name="email"], form input[name="name"], form textarea[name="message"]'
          ).val('');
          window.open("/assets/files/contact.txt");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          console.log(data);
          $('form#contact-form').removeClass('success');
          $('form#contact-form').addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
            $('form#contact-form').text(data.responseText);
          } else {
            $('form#contact-form').prepend(
              '<span class="error">Oops! An error occured and your message could not be sent.</span>'
            );
          }
        });
    }
    return false;
  });
});