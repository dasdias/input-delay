'use strict';

const app = document.getElementById('app');

const createElementInput = () => {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Введите текст';
  input.style.cssText = `
    margin-bottom: 20px;
  `;
  return input;
};
const createElementParagraph = () => {
  const paragraph = document.createElement('p');
  paragraph.style.cssText = `
    padding: 5px;
    border: 1px solid #000000;
    border-radius: 5px;
    min-height: 13px;
    max-width: 500px;
  `;
  return paragraph;
};

const renderElements = () => {
  const renderInput = createElementInput();
  const paragraph = createElementParagraph();
  app.append(renderInput, paragraph);
  return {renderInput, paragraph};
};

const init = () => {
  const {renderInput, paragraph} = renderElements();
  let timerId = 0;

  renderInput.addEventListener('input', (e) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      paragraph.textContent = renderInput.value;
    }, 300);
  });
};

init();
