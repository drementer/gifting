/**
 * Shorthand for console log.
 * @param {*} log - Console logged value.
 */
const log = (log) => {
  console.log(log);
};

/**
 * Fast add class from element(s).
 * @param {object} element - Manipulation element(s)
 * @param {string} className - Class name
 */
const addClass = (element, className) => {
  element.classList.add(className);
};
const removeClass = (element, className) => {
  element.classList.remove(className);
};

/**
 * Fast select item(s).
 * @param {string} selector - Css selector
 * @param {object} [scope = document] - The parent of the item(s) to be selected
 * @return {object} Selected element(s)
 */
const select = (selector, scope = document) => {
  return scope.querySelector(selector);
};
const selects = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};

const container = select('[container]');
const wrapper = select('[wrapper]');
const startButton = select('[start-button]');

const slidingClass = '--sliding';
const winnerClass = '--winner';
const skewClass = '--skew';
const lastWinner = '--last-winner';

const cardWidth = 10;
const perScrollCard = 30;
const perScroll = cardWidth * perScrollCard;
const halfCardWidth = `calc(${cardWidth}rem / 2)`;
const scrollStart = `(50vw - ${halfCardWidth})`;

let scrollWidth = perScroll;
let scrolledCard = perScrollCard;
let transform = '';
let scrollPosition = `translateX(calc(${scrollStart} - ${scrollWidth}rem))`;

/**
 * Upadte Scroll Position
 */
const updateScrollPosition = () => {
  scrollPosition = `translateX(calc(${scrollStart} - ${scrollWidth}rem))`;
  transform = `${scrollPosition}`;
  wrapper.style.transform = transform;
};

/**
 * Create Card
 * @param {integer} index - Index of picture
 */
const createCard = (index) => {
  let card = document.createElement('div');

  card.classList.add('slider__card', 'slider-card');
  card.setAttribute('card', '');
  card.innerHTML = `<img src="assets/img/cards/${index}.png" alt="" class="slider-card__image">`;

  return card;
};

/**
 * Incejt Card
 */
const injectCard = () => {
  let cardsLenght = perScrollCard + 1;
  let index = 1;

  while (index <= cardsLenght) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let card = createCard(randomNumber);

    wrapper.insertAdjacentElement('beforeend', card);
    index++;
  }
};

/**
 * Start Animation
 */
const startAnimation = () => {
  startButton.innerHTML = 'Tekrar Dene';
  startButton.setAttribute('disabled', '');

  let lastWinner = select('.--winner');
  if (lastWinner) {
    removeClass(lastWinner, winnerClass);
  }

  injectCard();

  updateScrollPosition();
  addClass(container, skewClass);
  addClass(wrapper, slidingClass);

  scrollWidth += perScroll;
};

/**
 * Finish Animation
 * @param {object} e - Event of 'transitionend' listener
 */
const finishAnimation = (e) => {
  let target = e.srcElement;
  let status = target != wrapper;
  if (status) return;

  let cards = selects('[card]');
  let winner = cards[scrolledCard];

  addClass(winner, winnerClass);
  addClass(winner, lastWinner);
  removeClass(container, skewClass);
  removeClass(wrapper, slidingClass);
  startButton.removeAttribute('disabled');
  scrolledCard += perScrollCard;
};

/**
 * Init
 */
const init = () => {
  startButton.addEventListener('click', startAnimation);
  wrapper.addEventListener('transitionend', finishAnimation);
  injectCard();
};

window.onload = init();
