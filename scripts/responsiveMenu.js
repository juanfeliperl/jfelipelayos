window.addEventListener('load', () => {
  const navMenu = document.querySelector('.nav-list');
  const closeMenuBtn = document.querySelector('.header-nav-open');
  const openMenuBtn = document.querySelector('.nav-list-item-close');

  openMenuBtn.addEventListener('click', closeMenu)
  closeMenuBtn.addEventListener('click', openMenu)

  function openMenu() {
    navMenu.style.display = 'flex';
    navMenu.style.top = '0';
  }

  function closeMenu() {
    navMenu.style.top = '-100%';
  }
});
