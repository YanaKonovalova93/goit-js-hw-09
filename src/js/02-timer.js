
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputFlatpickrEl = document.getElementById('datetime-picker');
const startButtonEl = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');


flatpickr(inputFlatpickrEl, {
   enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    }
});
