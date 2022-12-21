/**
 * Shorthand for console log.
 * @param {*} log - Console logged value.
 */
const log = (log) => {
  console.log(log);
};

/**
 * Fast add class from element.
 * @param {object} element - Manipulation element
 * @param {string} className - Class name
 */
const addClass = (element, className) => {
  element.classList.add(className);
};

/**
 * Fast remove class from element.
 * @param {object} element - Manipulation element
 * @param {string} className - Class name
 */
const removeClass = (element, className) => {
  element.classList.remove(className);
};

/**
 * Fast select item.
 * @param {string} selector - Css selector
 * @param {object} [scope = document] - The parent of the item to be selected
 * @return {object} Selected element
 */
const select = (selector, scope = document) => {
  return scope.querySelector(selector);
};

/**
 * Fast select items.
 * @param {string} selector - Css selector
 * @param {object} [scope = document] - The parent of the items to be selected
 * @returns {object} Selected elements
 */
const selects = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};

const wrapper = select('[wrapper]');
const startButton = select('[start-button]');

const slidingClass = '--sliding';
const winnerClass = '--winner';

const cardWidth = 10;
const perScrollCard = 30;
const perScroll = cardWidth * perScrollCard;
const halfCardWidth = `calc(${cardWidth}rem / 2)`;
const scrollStart = `(50vw - ${halfCardWidth})`;

let scrollWidth = perScroll;
let scrolledCard = perScrollCard;

const createCard = (index) => {
  let content = `
	<div class="slider__card slider-card" card>
		<img src="./assets/img/cards/${index}.png" alt="" class="slider-card__image">
	</div>
	`;

  return content;
};

const randomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const injectCard = () => {
  let cards = '';
  let cardsLenght = perScrollCard;
  let index = 1;

  while (index <= cardsLenght) {
    cards += createCard(randomNumber());
    index++;
  }

  wrapper.innerHTML += cards;
};

startButton.addEventListener('click', () => {
  let scrollPosition = `calc(${scrollStart} - ${scrollWidth}rem)`;
  let lastWinner = select('.--winner');

  if (lastWinner) {
    removeClass(lastWinner, winnerClass);
  }

  injectCard();
  startButton.innerHTML = 'Tekrar Dene';
  addClass(wrapper, slidingClass);

  wrapper.style.transform = `translateX(${scrollPosition})`;
  scrollWidth += perScroll;
});

wrapper.addEventListener('transitionend', () => {
  let cards = selects('[card]');
  let winner = cards[scrolledCard];

  removeClass(wrapper, slidingClass);
  addClass(winner, winnerClass);
  scrolledCard += perScrollCard;
});

window.onload = injectCard();
