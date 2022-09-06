const elementList = document.querySelector('#categories').children
console.log(`Number of categories: ${elementList.length}`);

[...elementList].forEach((item) => {
  const title = item.querySelector('H2').textContent
  const innerList = item.querySelectorAll('li').length
  console.log(`Category: ${title}`)
    console.log(`Elements: ${innerList}`)
});


