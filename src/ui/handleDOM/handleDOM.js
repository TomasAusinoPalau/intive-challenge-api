export const elementCreator = (element) => {
    return document.createElement(element);
}


export function elementAddClass(element, className) {
    
    element.classList.add(className);
}

