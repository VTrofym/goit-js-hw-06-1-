// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const refs = {
    inputEl: document.querySelector("#validation-input"),
};
const validLength = Number(refs.inputEl.dataset.length);
refs.inputEl.addEventListener("blur", onInputValid);

function onInputValid(event) {
    if (event.target.value.length === validLength) {
        updateClassElem("valid", "invalid");
    } else {
        updateClassElem("invalid", "valid");
    }
}

function updateClassElem(addCl, remCl) {
    refs.inputEl.classList.remove(remCl);
    refs.inputEl.classList.add(addCl);
}
