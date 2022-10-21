import CardWidget from './CardWidget';
import LuhnAlgorithm from './LuhnAlgorithm';

const cardWidget = new CardWidget(document.documentElement.querySelector('.cards-widget'));
cardWidget.bindToDOM();

const luhnAlgorithm = new LuhnAlgorithm(cardWidget);
luhnAlgorithm.init();
