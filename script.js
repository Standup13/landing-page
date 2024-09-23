const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');

let isHeaderHidden = false;

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.add('hide-header');
    isHeaderHidden = true;
  });
});

document.addEventListener('mousemove', () => {
  if (isHeaderHidden) {
    header.classList.remove('hide-header');
    isHeaderHidden = false;
  }
});