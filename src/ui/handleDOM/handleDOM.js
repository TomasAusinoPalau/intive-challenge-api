export const elementCreator = (element) => document.createElement(element);

export function elementAddClass(element, className) {
  element.classList.add(className);
}
