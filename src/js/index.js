const form = document.querySelector(".form");

function setElements(totalSeconds) {
  const years = Math.floor(totalSeconds / 3600 / 24 / 30 / 12 - 1);
  const months = Math.floor((totalSeconds / 3600 / 24 / 30) % 12);
  const days = Math.floor((totalSeconds / (3600 * 24)) % 30);
  document.querySelector("#timerDays").innerText = formatTime(days);
  document.querySelector("#timerMonths").innerText = formatTime(months);
  document.querySelector("#timerYears").innerText = formatTime(years);
}

let time = {};

form.yearsTarget.addEventListener(
  "input",
  (e) => (time.lifeTimeYears = parseInt(e.target.value))
);

form.birthday.addEventListener("input", (e) => {
  const yearInMiliseconds = 31557600000;
  const bDate = new Date(e.target.value);
  let currentDate = new Date();
  let age = currentDate.getFullYear() - bDate.getFullYear();

  if (currentDate.getMonth() < 12) {
    age -= 1;
  }

  time.age = age;
  time.timeLeftYears = time.lifeTimeYears - time.age;

  function CalcfinalDate() {
    const date = new Date();
    date.setFullYear(date.getFullYear() + time.timeLeftYears);
    return date;
  }

  time.finalDate = CalcfinalDate();

  const totalSeconds = (time.finalDate - currentDate) / 1000;
  console.log(totalSeconds);
  console.log(time);

  setElements(totalSeconds);
});

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
