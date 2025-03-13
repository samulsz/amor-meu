const startDate = new Date('2023-08-13T00:00:00');
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();
    if (months < 0) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }
    if (hours < 0) {
        days--;
        hours += 24;
    }
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }

    timerElement.textContent = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer();
