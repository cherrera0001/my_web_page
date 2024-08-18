import DOMPurify from 'dompurify';

// Función para cargar partials (navbar y footer)
function loadPartial(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Sanitizar el contenido antes de insertarlo
            const sanitizedData = DOMPurify.sanitize(data);
            document.getElementById(id).innerHTML = sanitizedData;
        })
        .catch(error => {
            console.error(`Error cargando ${id}:`, error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // Cargar navbar y footer
    loadPartial('navbar-placeholder', '../partials/navbar.html');
    loadPartial('footer-placeholder', '../partials/footer.html');

    // Alternar tema
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.body.dataset.theme = currentTheme;

        toggleButton.addEventListener('click', () => {
            const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
            document.body.dataset.theme = newTheme;
            localStorage.setItem('theme', newTheme); // Guarda el tema seleccionado
        });
    }
});