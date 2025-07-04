// Configura el menú hamburguesa para dispositivos móviles
function setupHamburgerMenu() {
    const toggleButton = document.querySelector(".nav__toggle"); // Botón hamburguesa
    const navMenu = document.querySelector(".nav__menu"); // Menú de navegación

  // Función para alternar el menú
    toggleButton.addEventListener("click", () => {
        // Verifica el ancho de la pantalla antes de aplicar la clase
        if (window.innerWidth <= 767) {
            navMenu.classList.toggle("nav__menu--open");
            // Cambia la posición del botón hamburguesa según el estado del menú
            toggleButton.style.position = navMenu.classList.contains("nav__menu--open") ? "fixed" : "absolute";
        }
    });

    // Función para eliminar la clase si el ancho de la pantalla supera 767px
    window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
            navMenu.classList.remove("nav__menu--open");
            toggleButton.style.position = "absolute"; // Asegura que el botón vuelva a su posición predeterminada
        }
    });

// Función para eliminar la clase si el ancho de la pantalla supera 767px
    window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
            navMenu.classList.remove("nav__menu--open");
            toggleButton.style.position = "absolute"; // Asegura que el botón vuelva a su posición predeterminada
        }
    });
}

// ========================
// Inicialización al cargar la página
// ========================
document.addEventListener("DOMContentLoaded", () => {
    setupHamburgerMenu(); // Configurar el menú hamburguesa
});