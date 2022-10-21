import CardValidator from '../CardValidator';

document.body.innerHTML = `
  <div class="widget-container">
    <h2>Credit Card Validator</h2>
    <ul class="cards">
        <li class="card visa" title="Visa"></li>
        <li class="card mastercard" title="Mastercard"></li>
        <li class="card mir" title="Mir"></li>
        <li class="card american-express" title="American Express"></li>
        <li class="card discover" title="Discover"></li>
        <li class="card jcb" title="JCB"></li>
    </ul>
    <form id="form">
        <input class="field" type="text" placeholder="Credit card number">
        <button class="button">Click to Validate</button>
    </form>
  </div>
`;

// test('create an instance of CardsType', () => {
//   expect(new CardsType()).toBeInstanceOf(CardsType);
// });

test.each([
  ['4', 'Visa'],
  ['53', 'Mastercard'],
  ['2', 'Mir'],
  ['34', 'American Express'],
  ['65', 'Discover'],
  ['35', 'JCB'],
  ['77', 'неизвестен'],
])('checking the first digits of the card number: %s corresponds %s', (digits, expected) => {
  const cardValidator = new CardValidator();
  cardValidator.field.value = digits;
  cardValidator.checkCard();
  expect(cardValidator.type).toBe(expected);
});

// test('should return card type', () => {
//   const cardsType = new CardsType();
//   cardsType.type = 'Mir';
//   expect(CardsType.show()).toBe('Mir');
// });
