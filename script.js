const statuses = [
    "Compiling code...",
    "Debugging reality...",
    "System stable.",
    "Watching the terminal...",
    "Optimizing..."
];

document.getElementById('status').innerText = statuses[Math.floor(Math.random() * statuses.length)];