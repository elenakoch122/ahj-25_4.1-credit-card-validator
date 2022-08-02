import CardsType from './CardsType';

export function clearMsg() {
  const removeEl = document.getElementById('form').nextElementSibling;
  console.log(removeEl);
  if (removeEl) {
    removeEl.remove();
  }
}

export default function msgStatus(text) {
  clearMsg();
  const form = document.getElementById('form');
  const msg = document.createElement('p');
  if (text === 'empty') {
    msg.classList.add('error-msg');
    msg.textContent = 'Введите номер карты';
  }
  if (text === 'wrong-number') {
    msg.classList.add('error-msg');
    msg.textContent = 'Неверное количество цифр в номере карты';
  }
  if (text === 'wrong-card') {
    msg.classList.add('error-msg');
    msg.textContent = `Ошибка! Номер карты неверен!\nТип карты: ${CardsType.show()}`;
  }
  if (text === 'correct-card') {
    msg.classList.add('reply');
    msg.textContent = `Проверка прошла успешно!\nТип карты: ${CardsType.show()}`;
  }
  form.insertAdjacentElement('afterEnd', msg);
}
