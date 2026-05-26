// script.js
const statuses = [
    "Compiling reality...",
    "Shakal mode: ON",
    "Writing code that works (sometimes)",
    "Optimizing the universe...",
    "Loading new project..."
];

function setRandomStatus() {
    const statusElement = document.getElementById('status');
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    statusElement.innerText = randomStatus;
}

// Запускаем при загрузке
document.addEventListener('DOMContentLoaded', setRandomStatus);