const sizeControl = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

sizeControl.addEventListener('input', (event) => {
    event.currentTarget.value
    console.log(event.currentTarget.value)
} );