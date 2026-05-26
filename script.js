const statuses = [
    "Compiling code...",
    "Debugging reality...",
    "System stable.",
    "Watching the terminal...",
    "Optimizing...",
    "just playing cs2 :)",
    "just enjoys life",
];

document.getElementById('status').innerText = statuses[Math.floor(Math.random() * statuses.length)];

const bg = document.getElementById('ascii-background');
const characters = "01010101<>[]{}|/\\"; 

function createStream() {
    if (!bg) return; // Защита: если элемента нет, код не упадет
    const stream = document.createElement('div');
    stream.style.position = 'absolute';
    stream.style.left = Math.random() * 100 + 'vw';
    stream.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
    bg.appendChild(stream);

    stream.innerText = Array(10).fill(0).map(() => characters[Math.floor(Math.random() * characters.length)]).join('\n');
    setTimeout(() => stream.remove(), 10000);
}

setInterval(createStream, 500);

// CSS-инъекция для анимации
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        from { top: -200px; opacity: 0; }
        50% { opacity: 0.5; }
        to { top: 100vh; opacity: 0; }
    }
    #ascii-background div {
        text-shadow: 0 0 5px #00ff41;
    }
`;
document.head.appendChild(style);