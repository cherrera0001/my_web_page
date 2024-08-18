document.addEventListener('DOMContentLoaded', () => {
    // Cargar navbar
    fetch('../partials/navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbar-placeholder').innerHTML = data);

    // Cargar footer
    fetch('../partials/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data);
});
