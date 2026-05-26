// Конфигурация
const bg = document.getElementById('ascii-background');
if (!bg) { console.error("Элемент #ascii-background не найден!"); }

// Каноничные символы Матрицы (японские иероглифы + цифры + латиница)
const charList = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビウゥクスツヌフムユュルグズブヅェエケセテネヘメレヱゲゼデベォオコソトノホモヨョロヲゴゾドボヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const characters = charList.split('');

// Создаем CSS-анимацию прямо в JS (если её нет в style.css)
const style = document.createElement('style');
style.innerHTML = `
    @keyframes matrixFall {
        from { top: -100vh; }
        to { top: 100vh; }
    }
`;
document.head.appendChild(style);

function createColumn() {
    if (!bg) return;

    const column = document.createElement('div');
    column.style.position = 'absolute';
    column.style.left = Math.floor(Math.random() * 100) + 'vw';
    column.style.animation = `matrixFall ${Math.random() * 10 + 10}s linear infinite`;
    column.style.top = '-100vh';

    // Рандомный шанс 0.5% на пасхалку
    const isMarin = Math.random() < 0.005; 
    let columnText = '';

    if (isMarin) {
        column.classList.add('marin-kitagawa');
        columnText = "MARIN\nKITAGAWA\n".repeat(15);
    } else {
        for (let i = 0; i < 50; i++) {
            columnText += characters[Math.floor(Math.random() * characters.length)] + '\n';
        }
    }
    
    column.innerText = columnText;
    bg.appendChild(column);

    setTimeout(() => { if (column.parentNode === bg) bg.removeChild(column); }, 25000);
}
// Запускаем создание колонок каждые 150 мс (быстрое заполнение)
for (let i = 0; i < 100; i++) { // Сразу создаем 100 колонок
    setTimeout(createColumn, i * 150); 
}
// И продолжаем добавлять по одной каждые 400мс
setInterval(createColumn, 400); 

// Обновляем статус (твой старый код)
const statuses = [
    "Compiling code...",
    "Debugging reality...",
    "System stable.",
    "Watching the terminal...",
    "Optimizing...",
    "just playing cs2 :)",
    "just enjoys life",
];
const statusElement = document.getElementById('status');
if (statusElement) {
    statusElement.innerText = statuses[Math.floor(Math.random() * statuses.length)];
}

