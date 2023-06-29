const mobileMenu = document.getElementById('mobile-nav-items');
function openmenu() {
  mobileMenu.style.display = 'block';
}

function closemenu() {
  mobileMenu.style.display = 'none';
}

mobileMenu.addEventListener('click', openmenu);
mobileMenu.addEventListener('click', closemenu);
// POPUP WINDOW
const popupWindow = document.getElementById('popup-window');
function openPopup() {
  popupWindow.classList.add('open-popup');
}
function closePopup() {
  popupWindow.classList.remove('open-popup');
}
