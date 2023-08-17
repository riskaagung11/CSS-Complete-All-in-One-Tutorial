const year = document.getElementById("year");
console.dir(year);
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
