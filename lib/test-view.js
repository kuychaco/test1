'use babel';

export default class TestView {

  constructor(serializedState) {
    this.element = document.createElement('div');
    this.element.classList.add('test');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The Test package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  serialize() {}

  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
