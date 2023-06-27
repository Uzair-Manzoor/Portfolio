const mobileMenu = document.getElementById('mobile-nav-items');
function openmenu() {
  mobileMenu.style.display = 'block';
}

function closemenu() {
  mobileMenu.style.display = 'none';
}
mobileMenu.addEventListener('click', openmenu);
mobileMenu.addEventListener('click', closemenu);
