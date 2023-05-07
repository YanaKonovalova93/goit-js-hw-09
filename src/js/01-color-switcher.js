const bodyEl = document.body;
const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');

let timerId = null;

buttonStartEl.addEventListener('click', onChangeColor);
buttonStopEl.addEventListener('click', stopChangeColor);

function onChangeColor() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStartEl.setAttribute('disabled', 'disabled');
}

function stopChangeColor() {
  clearInterval(timerId);
  buttonStartEl.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
