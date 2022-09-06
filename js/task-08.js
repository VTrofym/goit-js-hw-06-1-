









const formInputEl = document.querySelector('.login-form');
formInputEl.addEventListener('submit', targetInputHandler);
function targetInputHandler(event) {
    event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value)
    alert('Fill in all fields, please!');
}
const userLoginData = {
  email: email.value,
  password: password.value,
}
event.currentTarget.reset();
