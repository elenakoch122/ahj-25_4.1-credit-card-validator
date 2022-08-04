export default class CardsType {
  constructor() {
    this.cards = document.querySelectorAll('.card');
    this.field = document.querySelector('.field');
    this.type = null;
  }

  static show() {
    return this.type;
  }

  init() {
    this.field.addEventListener('input', this.checkCard.bind(this));
  }

  highlightCard(type) {
    [...this.cards].find((item) => item.classList.contains(type)).classList.remove('hide');
  }

  checkCard() {
    this.cards.forEach((item) => item.classList.add('hide'));
    this.type = null;

    // для Visa
    if (this.field.value.startsWith('4')) {
      this.highlightCard('visa');
      this.type = 'Visa';
      return;
    }

    // для Mastercard
    if (this.field.value.startsWith('5') && this.field.value[1] > 0 && this.field.value[1] < 6) {
      this.highlightCard('mastercard');
      this.type = 'Mastercard';
      return;
    }

    // для Mir
    if (this.field.value.startsWith('2')) {
      this.highlightCard('mir');
      this.type = 'Mir';
      return;
    }

    // для American Express
    if (this.field.value.startsWith('34') || this.field.value.startsWith('37')) {
      this.highlightCard('american-express');
      this.type = 'American Express';
      return;
    }

    // для Discover
    if (this.field.value.startsWith('65') || this.field.value.startsWith('6011')) {
      this.highlightCard('discover');
      this.type = 'Discover';
      return;
    }

    // для JCB
    if (this.field.value.startsWith('35')) {
      this.highlightCard('jcb');
      this.type = 'JCB';
      return;
    }

    if (this.type === null) {
      this.type = 'неизвестен';
    }
  }
}
