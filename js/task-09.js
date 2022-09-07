// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.










const styleBody = document.querySelector('body');
const textEl = document.querySelector('.color');
const btn = document.querySelector('.change-color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
btn.addEventListener('click', targetInputHandler);
function targetInputHandler() {
  const colorEl = getRandomHexColor();
  styleBody.style.backgroundColor = colorEl;
  textEl.textContent = colorEl
}