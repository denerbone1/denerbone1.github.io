const statuses = [
    "Compiling code...",
    "Debugging reality...",
    "System stable.",
    "Watching the terminal...",
    "Optimizing..."
];

document.getElementById('status').innerText = statuses[Math.floor(Math.random() * statuses.length)];

const bg = document.getElementById('ascii-background');
const characters = "01010101<>[]{}|/\\"; // Символы для фона

function createStream() {
    const stream = document.createElement('div');
    stream.style.position = 'absolute';
    stream.style.left = Math.random() * 100 + 'vw';
    stream.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
    bg.appendChild(stream);

    // Генерируем 10 символов в колонку
    stream.innerText = Array(10).fill(0).map(() => characters[Math.floor(Math.random() * characters.length)]).join('\n');

    setTimeout(() => stream.remove(), 10000); // Удаляем, чтобы не грузить память
}

setInterval(createStream, 500);

// Добавим анимацию падения в CSS через JS (или просто в style.css)
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        from { top: -200px; opacity: 0; }
        50% { opacity: 0.3; }
        to { top: 100vh; opacity: 0; }
    }
`;
document.head.appendChild(style);