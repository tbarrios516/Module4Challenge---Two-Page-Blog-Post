document.getElementById('toggleTheme').addEventListener('click', function () {
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    if (currentMode === 'light') {
        document.body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${savedTheme}-mode`);
});
