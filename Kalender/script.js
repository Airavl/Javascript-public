
const days = document.querySelector(".days");

renderMonth();

let currentDate = new Date(2025, 6);
function renderMonth(){
    let lastDayOfMonth = new Date(currentDate.getFullYear(),currentDate.getMonth() + 1, 1-1);
    let numberOfDays = lastDayOfMonth.getDate();
    let firstDayOfMonth = new Date(currentDate.getFullYear(),currentDate.getMonth(), 1).getDay();
    if(firstDayOfMonth == 0) firstDayOfMonth = 7;
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
        const emptyDay = document.createElement("li");
        emptyDay.classList.add("empty");
        days.appendChild(emptyDay);
    }
    for (let i = 1; i <= numberOfDays; i++) {
        const day = document.createElement("li");
        day.classList.add("day");
        day.textContent = i;
        days.appendChild(day);
    }
    let date = document.querySelector('#date');
    const options = {
        month: "short",
        year: "numeric"
    }
    date.innerHTML = (currentDate.toLocaleDateString("en-EN", options));
}

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

function nextMonth() {
    days.innerHTML = "";
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    renderMonth();
}   

function prevMonth() {
    days.innerHTML = "";
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() -1 );
    renderMonth();
}
nextButton.addEventListener("click", nextMonth)

prevButton.addEventListener("click", prevMonth)
