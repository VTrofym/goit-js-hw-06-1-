// Напиши скрипт который, при наборе текста в инпуте input#name-input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".






const refs = {
    input: document.querySelector('input'),
    output: document.querySelector('span'),
};
const defaultText = refs.output.textContent;
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.output.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '')
        refs.output.textContent = defaultText;
}


































