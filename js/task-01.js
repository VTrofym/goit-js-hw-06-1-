// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).






const elementList = document.querySelector('#categories').children
console.log(`Number of categories: ${elementList.length}`);

[...elementList].forEach((item) => {
  const title = item.querySelector('H2').textContent
  const innerList = item.querySelectorAll('li').length
  console.log(`Category: ${title}`)
    console.log(`Elements: ${innerList}`)
});






// const listRef = document.querySelector('.item') // добавление стилей на класс или на id
// listRef.style.color = 'red'
// console.log(listRef)








// const firstLi = document.querySelector('li')
// console.log(firstLi)








// const allLiItem = document.querySelectorAll('li.item')
// // console.log(allLiItem)
// const amountAllLiItem = allLiItem.length
// console.log(`Number of categories: ${amountAllLiItem}`)


// const textH2Animals = document.querySelector('li h2')
// console.log(`Category: ${textH2Animals.textContent}`)





// const elementList = document.querySelector('#categories').children
// console.log(`Number of categories: ${elementList.length}`);

// [...elementList].forEach((item) => {
//   const title = item.querySelector('H2').textContent
//   const innerList = item.querySelectorAll('li').length
//   console.log(`Category: ${title}`)
//     console.log(`Elements: ${innerList}`)
// });
















// const listRef = document.getElementById('categories') // получить элемент по ID
// console.log(listRef)
// console.dir(listRef) // можно посмотреть метовы и свойства

// const liRefs = document.getElementsByTagName('li') // находит все что есть по имени тега
// console.log(liRefs)

// const itemRef = document.getElementsByClassName('item') //находит все что есть по имени класса
// console.log(itemRef)


// const idCategories = document.getElementById('categories') // получить элемент по ID как родителя
// console.log(idCategories.children[2])

// const firstLiItem = document.querySelector('.item') // получить элемент родителя от ребенка
// console.log(firstLiItem.parentElement)
// console.log(firstLiItem.parentNode)

// const imgRef = document.querySelector('.class-img') // доступ к элементам фото и их изменения
// console.log(imgRef.src)
// console.log(imgRef.alt)
// console.log(imgRef.width)
// imgRef.alt = 'Кот Барсик'
// console.log(imgRef.alt)

// const inputRef = document.querySelector('js-input')
// imgRef.value = 'Привет!'
// console.log(imgRef.value) 

// const textRef = document.querySelector('ul li ul li') // текст контент современный метод
// console.log(textRef.textContent)

// const textRef = document.querySelector('ul li ul li')  // аналог текст контент
// console.log(textRef.innerText) 
