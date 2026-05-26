const bg = document.getElementById('ascii-background');
const charList = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビウゥクスツヌフムユュルグズブヅェエケセテネヘメレヱゲゼデベォオコソトノホモヨョロヲゴゾドボヴッン0123456789";
const fontSize = 16;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array(columns).fill(0);
let marinMode = false;

function draw() {
    bg.style.backgroundColor = 'rgba(13, 13, 13, 0.1)';
    for (let i = 0; i < drops.length; i++) {
        let isMarinChar = marinMode && Math.random() > 0.8;
        const char = isMarinChar 
            ? "MARINKITAGAWA"[Math.floor(Math.random() * 13)] 
            : charList[Math.floor(Math.random() * charList.length)];

        const span = document.createElement('div');
        span.style.position = 'absolute';
        span.style.left = i * fontSize + 'px';
        span.style.top = drops[i] * fontSize + 'px';
        span.style.width = fontSize + 'px';
        span.style.textAlign = 'center';
        
        if (isMarinChar) span.className = 'marin-kitagawa';
        else span.style.color = '#00ff41';
        
        span.innerText = char;
        bg.appendChild(span);

        if (bg.children.length > 800) bg.removeChild(bg.firstChild);
        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

window.marin = () => {
    marinMode = true;
    setTimeout(() => { marinMode = false; }, 6000);
};

const cmdInput = document.getElementById('cmd');
cmdInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (cmdInput.value.trim().toLowerCase() === 'marin') window.marin();
        cmdInput.value = '';
    }
});

setInterval(draw, 60);