// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  div: document.querySelector('#controls'),
  divBoxes: document.querySelector('#boxes'),
  btnDestroy: document.querySelector('[data-destroy]')
}

refs.div.addEventListener('click', onBtnClick)

function onBtnClick(event) {
  const btnEvent = event.target.dataset;
  if (btnEvent.hasOwnProperty('create')) {
    return onBtnCreateClick();
  } else if (btnEvent.hasOwnProperty('destroy')) {
    onBtnDestroyClick();
  } else {
    return;
  }
}

// refs.btnCreate.addEventListener('click', onBtnCreateClick)

function onBtnCreateClick() {
  const amount = refs.input.value;
  createBoxes(amount)
  refs.input.value = '';
}

// refs.btnDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnDestroyClick() {
  const countInput = refs.input.value;
  if (!countInput || countInput <0) {
    refs.divBoxes.innerHTML = '';
    return
  }
  const quantity = refs.divBoxes.childElementCount;
  for (let i = 0; i < countInput; i++) {
    if (i > quantity -1 ) {
      return
    }
    refs.divBoxes.lastElementChild.remove();
}
}

function createBoxes(amount) {
  let size = 30;
for (let i = 0; i < amount; i +=1) {
  const box = document.createElement('div');
  box.style.width = size + 'px';
  box.style.height = size + 'px';
  box.style.backgroundColor = getRandomHexColor();
  refs.divBoxes.append(box);
  size += 10;
  }
}

