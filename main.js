(()=>{"use strict";class t{constructor(){this.cards=document.querySelectorAll(".card"),this.checkCard=this.checkCard.bind(this)}showType(){return this.type}checkCard(t){return this.cards.forEach((t=>t.classList.add("hide"))),this.type=null,t.startsWith("4")?(this.highlightCard("visa"),void(this.type="Visa")):t.startsWith("5")&&t[1]>0&&t[1]<6?(this.highlightCard("mastercard"),void(this.type="Mastercard")):t.startsWith("2")?(this.highlightCard("mir"),void(this.type="Mir")):t.startsWith("34")||t.startsWith("37")?(this.highlightCard("american-express"),void(this.type="American Express")):t.startsWith("65")||t.startsWith("6011")?(this.highlightCard("discover"),void(this.type="Discover")):t.startsWith("35")?(this.highlightCard("jcb"),void(this.type="JCB")):void(null===this.type&&([...this.cards].forEach((t=>t.classList.remove("hide"))),this.type="неизвестен"))}highlightCard(t){[...this.cards].find((s=>s.classList.contains(t))).classList.remove("hide")}}class s{constructor(t){this.parentEl=t,this.cardTypes=["visa","mastercard","mir","american-express","discover","jcb"]}static get markup(){return'\n    <ul class="cards"></ul>\n    <form id="form">\n      <input class="input" type="text" placeholder="Credit card number">\n      <button class="button">Click to Validate</button>\n    </form>\n    '}bindToDOM(){this.parentEl.insertAdjacentHTML("beforeend",s.markup),this.ul=this.parentEl.querySelector(".cards"),this.input=this.parentEl.querySelector(".input"),this.cardTypes.forEach((t=>{const s=document.createElement("li");s.classList.add("card",t),s.setAttribute("title",t),this.ul.append(s)})),this.cardValidator=new t,this.input.addEventListener("input",(()=>this.cardValidator.checkCard(this.input.value)))}msgStatus(t){this.form=document.getElementById("form"),this.clearMsg();const s=document.createElement("p");"empty"===t&&(s.classList.add("error-msg"),s.textContent="Введите номер карты"),"wrong-number"===t&&(s.classList.add("error-msg"),s.textContent="Неверное количество цифр в номере карты"),"wrong-card"===t&&(s.classList.add("error-msg"),s.textContent=`Ошибка! Номер карты неверен!\nТип карты: ${this.cardValidator.showType()}`),"correct-card"===t&&(s.classList.add("success-msg"),s.textContent=`Проверка прошла успешно!\nТип карты: ${this.cardValidator.showType()}`),this.form.insertAdjacentElement("afterend",s)}clearMsg(){const t=this.form.nextElementSibling;t&&t.remove()}}const e=new s(document.querySelector(".cards-widget"));e.bindToDOM(),new class{constructor(t){this.cardWidget=t,this.input=document.querySelector(".input"),this.form=document.getElementById("form"),this.checkNumber=this.checkNumber.bind(this)}init(){this.form.addEventListener("submit",this.checkNumber)}checkNumber(t){t.preventDefault();const{value:s}=this.input;if(19===s.length||s.length>=13&&s.length<=16){const t=Number(s[s.length-1]);this.сalcCheckDigit(s)===t?this.cardWidget.msgStatus("correct-card"):this.cardWidget.msgStatus("wrong-card")}else 0===s.length?this.cardWidget.msgStatus("empty"):this.cardWidget.msgStatus("wrong-number")}сalcCheckDigit(t){const s=t.slice(0,t.length-1).split("").reverse().map(Number);return s.forEach(((t,e)=>{0!==e&&e%2!=0||(s[e]=2*t)})),s.forEach(((t,e)=>{t>9&&(s[e]=t-9)})),10-s.reduce(((t,s)=>t+s))%10}}(e).init()})();