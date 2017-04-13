class ApplicationMenu {
  constructor(element) {
    this.el = element;

    this.el
      .querySelector('.application-menu__button')
      .addEventListener('click', () => { this._handleButtonClick(); });
  }

  _pressButton() {
    this.el
      .querySelector('.application-menu__button')
      .setAttribute('aria-pressed', 'true');
  }

  _unpressButton() {
    this.el
      .querySelector('.application-menu__button')
      .setAttribute('aria-pressed', 'false');
  }

  _expandMenu() {
    this.el
      .querySelector('.application-menu__menu')
      .setAttribute('aria-expanded', 'true');
  }

  _contractMenu() {
    this.el
      .querySelector('.application-menu__menu')
      .setAttribute('aria-expanded', 'false');
  }

  _handleButtonClick() {
    const pressed = this.el
      .querySelector('.application-menu__button')
      .getAttribute('aria-pressed');

    if (pressed === 'true') {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this._pressButton();
    this._expandMenu();
  }

  close() {
    this._unpressButton();
    this._contractMenu();
  }
}

export default ApplicationMenu;
