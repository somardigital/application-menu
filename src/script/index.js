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
}

init();

// Automatically close menus user click away.
// $(document).click(function (event) {
//   if ($(event.target).closest('.application-menu').length === 0) {
//     closeAll();
//   }
// });
