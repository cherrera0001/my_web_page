function loadPartial(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.error(`Error cargando ${id}:`, error);
            document.getElementById(id).innerHTML = '<p>Error al cargar contenido. Por favor, recarga la página.</p>';
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadPartial('navbar-placeholder', '../partials/navbar.html');
    loadPartial('footer-placeholder', '../partials/footer.html');
});
