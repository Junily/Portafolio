// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    html.classList.add('dark');
    themeIcon.src = 'btn_moon2.png';
} else {
    html.classList.remove('dark');
    themeIcon.src = 'btn_sun2.png';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeIcon.src = 'btn_sun2.png';
        themeIcon.alt = 'Modo oscuro';
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.src = 'btn_moon2.png';
        themeIcon.alt = 'Modo claro';
    }
});

// ===== MUSIC PLAYER =====
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
const audioPlayer = document.getElementById('audioPlayer');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        musicIcon.src = 'btn_pause.png';
        musicIcon.alt = 'Pause';
    } else {
        audioPlayer.play();
        musicIcon.src = 'btn_play.png';
        musicIcon.alt = 'Play';
    }
    isPlaying = !isPlaying;
});

// ===== FLOATING BUTTON =====
const floatingBtn = document.getElementById('floatingBtn');
const floatingCard = document.getElementById('floatingCard');
let isCardOpen = false;

floatingBtn.addEventListener('click', () => {
    if (isCardOpen) {
        floatingCard.classList.add('hidden');
    } else {
        floatingCard.classList.remove('hidden');
    }
    isCardOpen = !isCardOpen;
});

// Cerrar tarjeta al hacer click fuera
document.addEventListener('click', (e) => {
    if (!floatingBtn.contains(e.target) && !floatingCard.contains(e.target) && isCardOpen) {
        floatingCard.classList.add('hidden');
        isCardOpen = false;
    }
});
