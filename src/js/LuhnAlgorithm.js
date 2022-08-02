import msgStatus from './utilits';

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
    if (this.field.value.length === 0) {
      return msgStatus('empty');
    }

    if (this.field.value.length !== 19 && (this.field.value.length < 13
      || this.field.value.length > 16)) {
      return msgStatus('wrong-number');
    }

    // Контрольная цифра
    const checkDigit = Number(this.field.value[this.field.value.length - 1]);

    // Отделяем остальные цифры от контрольной; образуем массив из этих цифр;
    // переворачиваем массив; преобразуем каждый элемент массива в число
    const invertedArr = this.field.value.slice(0, this.field.value.length - 1).split('').reverse().map(Number);
    console.log(checkDigit);
    console.log(invertedArr);

    // Умножаем цифры в нечетных позициях массива на 2
    invertedArr.forEach((item, idx) => {
      if (idx === 0 || idx % 2 === 0) {
        invertedArr[idx] = item * 2;
      }
    });
    console.log(invertedArr);

    // Вычитаем 9 из чисел больше 9
    invertedArr.forEach((item, idx) => {
      if (item > 9) {
        invertedArr[idx] = item - 9;
      }
    });
    console.log(invertedArr);

    // Складываем все числа в массиве
    const sum = invertedArr.reduce((acc, item) => acc + item);
    console.log(sum);

    // Вычисляем контрольную цифру: 10 - (sum mod 10)
    const checkDigitComputed = 10 - (sum % 10);
    console.log(checkDigitComputed);

    if (checkDigitComputed === checkDigit) {
      msgStatus('correct-card');
    } else {
      msgStatus('wrong-card');
    }
  }
}
