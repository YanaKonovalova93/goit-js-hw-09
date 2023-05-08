import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputFlatpickrEl = document.getElementById('datetime-picker');
const startButtonEl = document.querySelector('BUTTON[data-start]');
const dataDaysEl = document.querySelector('SPAN[data-days]');
const dataHoursEl = document.querySelector('SPAN[data-hours]');
const dataMinutesEl = document.querySelector('SPAN[data-minutes]');
const dataSecondsEl = document.querySelector('SPAN[data-seconds]');

startButtonEl.disabled = true;

let timerDate = {};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timerDate = selectedDates[0];
    checkDate();
  },
};

flatpickr(inputFlatpickrEl, options);

let currentDate = Date.now();

function checkDate() {
  if (timerDate > currentDate) {
    startButtonEl.disabled = false;
  } else {
    Notiflix.Notify.failure('Please choose a date in the future');
  }
}

const timer = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    setInterval(() => {
      const startTime = Date.now();
      let deltaTime = timerDate - startTime;
      if (deltaTime > 100) {
        let timerComponents = convertMs(deltaTime);

        updateClock(timerComponents);
      }
    }, 1000);
  },
};

startButtonEl.addEventListener('click', timer.start);

function updateClock({ days, hours, minutes, seconds }) {
  dataDaysEl.textContent = addLeadingZero(days);
  dataHoursEl.textContent = addLeadingZero(hours);
  dataMinutesEl.textContent = addLeadingZero(minutes);
  dataSecondsEl.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
