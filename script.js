const bg = document.getElementById('ascii-background');
const charList = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビウゥクスツヌフムユュルグズブヅェエケセテネヘメレヱゲゼデベォオコソトノホモヨョロヲゴゾドボヴッン0123456789";
const fontSize = 16;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array(columns).fill(0);

function draw() {
    bg.style.backgroundColor = 'rgba(13, 13, 13, 0.1)';
    for (let i = 0; i < drops.length; i++) {
        const char = charList[Math.floor(Math.random() * charList.length)];
        const span = document.createElement('div');
        span.style.position = 'absolute';
        span.style.left = i * fontSize + 'px';
        span.style.top = drops[i] * fontSize + 'px';
        span.innerText = char;
        bg.appendChild(span);

        if (bg.children.length > 500) bg.removeChild(bg.firstChild);

        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

window.marin = () => {
    // Внедряем надпись в один из случайных столбцов
    let targetCol = Math.floor(Math.random() * columns);
    
    // Превращаем текущую позицию этого столбца в "MARIN KITAGAWA"
    // Мы просто подменяем символ в массиве или выводим его через draw
    // Но проще: добавим специальный флаг для этого столбца
    drops[targetCol] = -15; // Начинаем с верха (отрицательное число)
    
    // Создаем временную функцию, которая "рисует" Марин в этом столбце
    const showMarin = (i, step) => {
        const marinText = ["M", "A", "R", "I", "N", " ", "K", "I", "T", "A", "G", "A", "W", "A"];
        if (step < marinText.length) {
            // Внедряем букву в поток
            const span = document.createElement('div');
            span.className = 'marin-kitagawa';
            span.style.position = 'absolute';
            span.style.left = (i * fontSize) + 'px';
            span.style.top = ((drops[i] + step) * fontSize) + 'px';
            span.style.fontSize = fontSize + 'px';
            span.innerText = marinText[step];
            bg.appendChild(span);
            
            setTimeout(() => showMarin(i, step + 1), 100);
        }
    };
    showMarin(targetCol, 0);
};

setInterval(draw, 60);
document.getElementById('status').innerText = "System stable. Enjoy life.";