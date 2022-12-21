/**
 * Shorthand for document.
 */
const doc = document;

/**
 * Shorthand for body.
 */
const body = doc.body;

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

/**
 * Setting scroll status function.
 * @param {integer} [status = 1] - Status of scroll is enabled.
 */
const scroll = (status = 1) => {
  if (status != 1) {
    body.style.overflowY = 'hidden';
  } else {
    body.style.overflowY = 'auto';
  }
};

/*
	Exports
*/
export { doc, body, log, select, selects, scroll, addClass, removeClass };
