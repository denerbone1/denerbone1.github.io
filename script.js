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

// Консольная пасхалка
window.marin = () => {
    const el = document.createElement('div');
    el.className = 'marin-kitagawa';
    el.style.position = 'absolute';
    el.style.top = '50%'; el.style.left = '50%';
    el.style.transform = 'translate(-50%, -50%)';
    el.style.fontSize = '40px';
    el.style.zIndex = '100';
    el.innerText = "MARIN KITAGAWA";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
};

setInterval(draw, 60);
document.getElementById('status').innerText = "System stable. Enjoy life.";