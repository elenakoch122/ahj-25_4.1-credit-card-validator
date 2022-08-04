import msgStatus from './utils';

export default class LuhnAlgorithm {
  constructor() {
    this.field = document.querySelector('.field');
    this.form = document.getElementById('form');
  }

  init() {
    this.form.addEventListener('submit', this.checkNumber.bind(this));
  }

  checkNumber(e) {
    e.preventDefault();
    if (this.field.value.length === 19 || (this.field.value.length >= 13
      && this.field.value.length <= 16)) {
      // Контрольная цифра
      const checkDigit = Number(this.field.value[this.field.value.length - 1]);

      // Отделяем остальные цифры от контрольной; образуем массив из этих цифр;
      // переворачиваем массив; преобразуем каждый элемент массива в число
      const invertedArr = this.field.value.slice(0, this.field.value.length - 1).split('').reverse().map(Number);

      // Умножаем цифры в нечетных позициях массива на 2
      invertedArr.forEach((item, idx) => {
        if (idx === 0 || idx % 2 === 0) {
          invertedArr[idx] = item * 2;
        }
      });

      // Вычитаем 9 из чисел больше 9
      invertedArr.forEach((item, idx) => {
        if (item > 9) {
          invertedArr[idx] = item - 9;
        }
      });

      // Складываем все числа в массиве
      const sum = invertedArr.reduce((acc, item) => acc + item);

      // Вычисляем контрольную цифру: 10 - (sum mod 10)
      const checkDigitComputed = 10 - (sum % 10);

      if (checkDigitComputed === checkDigit) {
        msgStatus('correct-card');
      } else {
        msgStatus('wrong-card');
      }
    } else if (this.field.value.length === 0) {
      msgStatus('empty');
    } else {
      msgStatus('wrong-number');
    }
  }
}
