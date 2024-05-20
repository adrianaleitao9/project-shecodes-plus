function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-text");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", searchCity);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Tuesday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let p = document.querySelector("#current-date-time");
p.innerHTML = `${day} ${hour}:${minutes}`;

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hour < 10) {
  hour = `0${hour}`;
}
