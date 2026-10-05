// Handles the "Join BEEP Health" form submission via Formspree.
// Collects First name, Email, and Telephone, sends them in the background,
// and keeps the visitor on the page with a gentle status message.

// ─────────────────────────────────────────────────────────────
//  SETUP: paste your Formspree form ID between the quotes below.
//  1. Create a free account at https://formspree.io
//  2. New Form → set the delivery email to: info@hsbglobalhealth.com
//  3. Copy the part of the endpoint after "/f/" (e.g. "abcd1234")
//     and paste it in place of YOUR_FORM_ID.
// ─────────────────────────────────────────────────────────────
var FORMSPREE_ID = "moevgryz";
var FORMSPREE_ENDPOINT = "https://formspree.io/f/" + FORMSPREE_ID;

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('joinForm');
  var firstName = document.getElementById('firstName');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var btn = document.getElementById('joinBtn');
  var ok = document.getElementById('ok');
  if (!form) return;

  function setMessage(text, isError) {
    ok.textContent = text;
    ok.style.color = isError ? '#c0607f' : '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nameVal = firstName.value.trim();
    var emailVal = email.value.trim();
    var phoneVal = phone.value.trim();
    var validEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailVal);
    var validPhone = phoneVal.replace(/\D/g, '').length >= 7;

    if (!nameVal) { setMessage('Please enter your first name.', true); firstName.focus(); return; }
    if (!emailVal || !validEmail) { setMessage('Please enter a valid email so we can send your invite.', true); email.focus(); return; }
    if (!phoneVal || !validPhone) { setMessage('Please enter a valid telephone number.', true); phone.focus(); return; }

    btn.disabled = true;
    var originalLabel = btn.textContent;
    btn.textContent = 'Sending…';
    setMessage('', false);

    if (FORMSPREE_ID === "YOUR_FORM_ID" || !FORMSPREE_ID) {
      setMessage('Signup isn\u2019t connected yet. (Set your Formspree ID in script.js.)', true);
      btn.disabled = false; btn.textContent = originalLabel; return;
    }

    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(function (response) {
      if (response.ok) {
        form.reset();
        setMessage('Thank you, ' + nameVal + '. Your invite is on its way — take your time.', false);
      } else {
        return response.json().then(function (data) {
          var msg = (data && data.errors && data.errors.length)
            ? data.errors.map(function (er) { return er.message; }).join(', ')
            : 'Something went wrong sending that. Please try again in a moment.';
          setMessage(msg, true);
        });
      }
    })
    .catch(function () {
      setMessage('We couldn\u2019t reach the server. Please check your connection and try again.', true);
    })
    .finally(function () {
      btn.disabled = false; btn.textContent = originalLabel;
    });
  });
});

// ── Mobile hamburger menu ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
  function openMenu() {
    links.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (links.classList.contains('open')) closeMenu(); else openMenu();
  });

  // close when a link is tapped
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  // close when tapping outside the menu
  document.addEventListener('click', function (e) {
    if (links.classList.contains('open') && !links.contains(e.target) && e.target !== toggle) {
      closeMenu();
    }
  });

  // close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // if the window is resized up to desktop, make sure the menu isn't stuck open
  window.addEventListener('resize', function () {
    if (window.innerWidth > 820) closeMenu();
  });
});
