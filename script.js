const toggleButton = document.getElementById('darkModeToggle');

function applyDarkModeSetting() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙';
    }
}

toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'disabled');
    } else {
        localStorage.setItem('darkMode', 'enabled');
    }
    applyDarkModeSetting();
});

applyDarkModeSetting();
