import ApplicationMenu from './ApplicationMenu.js';

function init() {
  const elements = document.querySelectorAll('.application-menu');
  const applicationMenus = [];

  if (elements.length === 0) {
    return;
  }

  elements.forEach((element) => {
    applicationMenus.push(new ApplicationMenu(element));
  });

  // Automatically close menus when the user clicks away.
  document.addEventListener('click', (event) => {
    applicationMenus.forEach((menu) => {
      if (menu.el !== event.target && !menu.el.contains(event.target)) {
        menu.close();
      }
    });
  });
}

init();
