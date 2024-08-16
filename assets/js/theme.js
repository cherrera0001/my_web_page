// theme.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Aplica el tema actual almacenado en localStorage
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    
    toggleButton.addEventListener('click', () => {
        // Cambia el tema
        const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        document.body.classList.toggle('dark-mode', newTheme === 'dark');
        
        // Guarda el tema en localStorage
        localStorage.setItem('theme', newTheme);
    });
});
