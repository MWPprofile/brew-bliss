// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

// Basic Contact Form Validation
const form = document.querySelector('#contact-form');

form.addEventListener('submit', function (e) {
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  let errors = [];

  if (!name) {
    errors.push("Name is required.");
  }

  if (!email || !validateEmail(email)) {
    errors.push("A valid email is required.");
  }

  if (!message) {
    errors.push("Message cannot be empty.");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    e.preventDefault();
  }
});

// Email
function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email);
}