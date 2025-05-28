function loadPage() {
  const day = document.querySelector("#day").value;
  const hour = document.querySelector("#hour").value;

  localStorage.setItem(day, "day");
  localStorage.setItem(hour, "hour");
  
  window.location.href = 'home.html';
}