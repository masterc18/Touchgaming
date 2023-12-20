
//Menu hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
  
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('show');
    });
  });
  