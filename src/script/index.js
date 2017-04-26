import ApplicationMenu from './ApplicationMenu.js';

function init() {
  const elements = document.querySelectorAll('.application-menu');
  const applicationMenus = [];

  if (elements.length === 0) {
    return;
  }

  for (let i = 0; i < elements.length; i += 1) {
    applicationMenus.push(new ApplicationMenu(elements[i]));
  }

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
