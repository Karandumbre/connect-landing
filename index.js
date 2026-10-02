function toggleMenu() {
  const navLinks = document.querySelector('#nav-links');
  navLinks.classList.toggle('active');
}

function toggleFeatures(id) {
  const content = document.getElementById(id);

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'flex';
  } else {
    content.style.display = 'none';
  }
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate the form fields (additional check for demonstration)
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  alert('This demo form does not send messages.');

  // Reset the form
  document.getElementById('contactForm').reset();
});
