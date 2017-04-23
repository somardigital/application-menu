import ApplicationMenu from './ApplicationMenu.js';

function isDescendant(element, ancestorClassName) {
  let node = element.parentNode;

  while (node !== null) {
    if (node.classList !== undefined && node.classList.contains(ancestorClassName)) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

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
    if (!isDescendant(event.target, 'application-menu')) {
      applicationMenus.forEach((menu) => {
        menu.close();
      });
    }
  });
}

init();
