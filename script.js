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
  popupWindow.style.display = 'block';
}
function closePopup() {
  popupWindow.classList.remove('open-popup');
  popupWindow.style.display = 'none';
}
popupWindow.addEventListener('click', openPopup);
popupWindow.addEventListener('click', closePopup);
