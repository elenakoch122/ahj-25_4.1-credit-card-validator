import LuhnAlgorithm from '../LuhnAlgorithm';

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

test('success, the check digit must be equal to the calculated digit', () => {
  const luhnAlgorithm = new LuhnAlgorithm();
  luhnAlgorithm.field.value = '4945616821746255';
  luhnAlgorithm.checkNumber();
  const result = document.getElementById('form').nextElementSibling.classList.contains('reply');
  expect(result).toBeTruthy();
});
