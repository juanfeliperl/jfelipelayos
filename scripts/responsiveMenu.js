window.addEventListener('load', () => {
  const navMenu = document.querySelector('.nav-list');
  const closeMenuBtn = document.querySelector('.header-nav-open');
  const openMenuBtn = document.querySelector('.nav-list-item-close');

  const aboutMeBtn = document.querySelector('.about-me');
  const techStackBtn = document.querySelector('.tech-stack');
  const projectsBtn = document.querySelector('.projects');



  openMenuBtn.addEventListener('click', closeMenu)
  closeMenuBtn.addEventListener('click', openMenu)
  aboutMeBtn.addEventListener('click', closeMenu);
  techStackBtn.addEventListener('click', closeMenu);
  projectsBtn.addEventListener('click', closeMenu);


  function openMenu() {
    navMenu.style.display = 'flex';
    navMenu.style.top = '0';
  }

  function closeMenu() {
    navMenu.style.top = '-150%';
  }
});
