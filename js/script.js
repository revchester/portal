function updateTime() {
    const now = new Date();

    // Data tanggal
    const year = now.getFullYear();
    const month = now.toLocaleString('id', { month: 'long' });
    const day = now.getDate();
    const weekday = now.toLocaleString('id', { weekday: 'long' });

    // Data waktu
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update kalender
    const yearElement = document.getElementById('year');
    const monthElement = document.getElementById('month');
    const dayElement = document.getElementById('day');
    const weekdayElement = document.getElementById('weekday');

    if (yearElement && monthElement && dayElement && weekdayElement) {
        yearElement.textContent = year;
        monthElement.textContent = month;
        dayElement.textContent = day;
        weekdayElement.textContent = weekday;
    }

    // Update jam digital
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (hoursElement && minutesElement && secondsElement) {
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }
}

// Update waktu setiap detik
setInterval(updateTime, 1000);
updateTime();

const images = [
    './image/project/ndt/ndt-17.jpg',
    './image/project/ndt/ndt-53.jpg',
    './image/project/ndt/ndt-54.jpg',
    './image/project/ndt/ndt-61.jpg',
    './image/project/ndt/ndt-64.jpg',
    './image/project/ndt/ndt-66.jpg'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.background = `url('${images[currentIndex]}') no-repeat center center/cover fixed`;
    document.querySelector('.container').style.background = `url('${images[currentIndex]}') no-repeat center center/100% fixed`;

    currentIndex = (currentIndex + 1) % images.length;
}

// Ganti background setiap 3 detik
setInterval(changeBackground, 3000);
changeBackground();
