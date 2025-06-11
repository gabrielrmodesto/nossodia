let intervalSeconds;
var texto = document.querySelector(".timeTogether");

function calculateTimeTogether() {
  clearInterval(intervalSeconds);

  const day = '2024-07-26';
  const hour = '22:15';

  if (!day || !hour) {
    texto.innerHTML = "Por afvor, selecione a data e a hora";
    return;
  }

  const dateInput = `${day}T${hour}`;
  const dateSelected = new Date(dateInput);

  intervalSeconds = setInterval(() => {
    const now = new Date();
    const result = differenceBetweenDates(dateSelected, now);
    let textYears = 'ano';
    let textMonths = 'mês';
    let textDays = 'dia';

    if (result.years > 1) textYears = 'anos';

    if (result.months > 1) textMonths = 'meses';

    if (result.days > 1) textDays = 'dias';

    texto.innerHTML = `${result.years} ${textYears}, ${result.months} ${textMonths}, ${result.days} ${textDays}, ${result.hours} horas, ${result.minutes} minutos, ${result.seconds} segundos`;
  }, 1000);
}

function differenceBetweenDates(date1, date2) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  let future = false;

  if (d1 > d2) {
    [d1, d2] = [d2, d1];
    future = true;
  }

  let years = d2.getFullYear() - d1.getFullYear();
  let months = d2.getMonth() - d1.getMonth();
  let days = d2.getDate() - d1.getDate();

  if (days < 0) {
    months -= 1;
    const lastDayOfTheMonth = new Date(d2.getFullYear(), d2.getMonth(), 0).getDate();
    days += lastDayOfTheMonth;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const diffMs = Math.abs(d1 - d2);
  const totalSeconds = Math.floor(diffMs / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;

  return { years, months, days, hours, minutes, seconds };
}

function loadNossaHistoria() {
  window.location.href = 'home.html';
}

function sliderPhotos() {
  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');
  let slider = document.querySelector('.slider');

  next.addEventListener('click', function () {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
  })
  prev.addEventListener('click', function () {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
  })
}

sliderPhotos();
calculateTimeTogether();
