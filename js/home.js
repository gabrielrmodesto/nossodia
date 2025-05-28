let intervalSeconds;
var texto = document.querySelector(".timeTogether");
const dayOfRelationship = localStorage.getItem("day");
const hourOfRelationship = localStorage.getItem("hour");

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

function calculateTimeTogether() {
  //clearInterval(intervalSeconds); 

  console.log("dia do inicio", localStorage.getItem("day"));
  console.log("hora do inicio", hourOfRelationship);

  if (!dayOfRelationship || !hourOfRelationship) {
    texto.innerHTML = "Por favor, selecione a data e a hora";
    return;
  }

  const dateInput = `${dayOfRelationship}T${hourOfRelationship}`;
  console.log(dateInput);
  const dateSelected = new Date(dateInput);

  intervalSeconds = setInterval(() => {
    const now = new Date();
    const result = differenceBetweenDates(dateSelected, now);

    texto.innerHTML = `${result.years} anos, ${result.months} meses, ${result.days} dias, ${result.hours} horas, ${result.minutes} minutos, ${result.seconds} segundos`;
  }, 1000);
}

calculateTimeTogether();
