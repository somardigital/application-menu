class ApplicationMenu {
  constructor(element) {
    this.el = element;

    this.el
      .querySelector('.application-menu__button')
      .addEventListener('click', () => { this._handleButtonClick(); });
  }

  _emit(eventName) {
    this.el.dispatchEvent(new Event(eventName));
  }

  _pressButton() {
    this.el
      .querySelector('.application-menu__button')
      .setAttribute('aria-pressed', 'true');

    this._emit('press.application-menu');
  }

  _unpressButton() {
    this.el
      .querySelector('.application-menu__button')
      .setAttribute('aria-pressed', 'false');

    this._emit('unpress.application-menu');
  }

  _expandMenu() {
    this.el
      .querySelector('.application-menu__menu')
      .setAttribute('aria-expanded', 'true');

    this._emit('expand.application-menu');
  }

  _contractMenu() {
    this.el
      .querySelector('.application-menu__menu')
      .setAttribute('aria-expanded', 'false');

    this._emit('contract.application-menu');
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

    this._emit('open.application-menu');
  }

  close() {
    this._unpressButton();
    this._contractMenu();

    this._emit('close.application-menu');
  }
}

export default ApplicationMenu;
