let intervalSeconds;

function calculateTimeTogether() {
  clearInterval(intervalSeconds);

  var texto = document.querySelector(".timeTogether");
  const day = document.querySelector("#day").value;
  const hour = document.querySelector("#hour").value;

  const dateSelected = `${day}T${hour}`;
  const date = new Date(dateSelected);
  intervalSeconds = setInterval(() => {
    const now = new Date();
    const result = differenceBetweenDates(dateSelected, now)

    const difference = date - now;
    const differenceSeconds = Math.floor(difference / 1000);
    const seconds = Math.abs(differenceSeconds % 60);
    const minutes = Math.abs(Math.floor((differenceSeconds / 60) % 60));
    const hours = Math.abs(Math.floor((differenceSeconds / 3600) % 24));

    texto.innerHTML = `${result.years} anos, ${result.months} meses, ${result.days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
  }, 1000);
}

function differenceBetweenDates(date1, date2){
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  console.log(d1, d2);

  if(d1 > d2){
    [d1,d2] = [d2,d1];
  }

  let years = d2.getFullYear() - d1.getFullYear();
  let months = d2.getMonth() - d1.getMonth();
  let days = d2.getDate() - d1.getDate();
  console.log(years, months, days);

  if(days < 0){
    months -= 1;
    const lastDayOfTheMonth = new Date(d2.getFullYear(), d2.getMonth(), 0).getDate();
    days += lastDayOfTheMonth;
  }

  if(months < 0){
    years -= 1;
    months += 12;
  }

  return {years, months, days};
}


