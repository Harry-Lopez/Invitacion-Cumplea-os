// Configura el menú hamburguesa para dispositivos móviles
function setupHamburgerMenu() {
    const toggleButton = document.querySelector(".nav__toggle"); // Botón hamburguesa
    const navMenu = document.querySelector(".nav__menu"); // Menú de navegación

    // ===> ASEGÚRATE DE QUE ESTA LÍNEA ESTÉ AQUÍ, DENTRO DE LA FUNCIÓN <===
    const navLinks = navMenu.querySelectorAll(".nav__link");

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

    // --- NUEVO CÓDIGO PARA CERRAR EL MENÚ AL SELECCIONAR UNA OPCIÓN ---
    // Itera sobre cada enlace del menú
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Verifica que el menú esté abierto antes de intentar cerrarlo
            if (navMenu.classList.contains("nav__menu--open") && window.innerWidth <= 767) {
                navMenu.classList.remove("nav__menu--open");
                toggleButton.style.position = "absolute"; // Devuelve el botón a su posición original
            }
        });
    });
    // --- FIN DEL NUEVO CÓDIGO ---
}

// ====================================
// Inicialización al cargar la página
// ===================================
document.addEventListener("DOMContentLoaded", () => {
    setupHamburgerMenu(); // Configurar el menú hamburguesa
});

//====================
//  Conteo regresivo
//=====================
// Define la fecha y hora a la que quieres que termine el contador
// Formato: Mes día, Año Hora:Minutos:Segundos
const fechaFin = new Date("August 1, 2025 00:00:00").getTime(); // Ejemplo: 12 de Julio de 2026 a medianoche

// Actualiza el contador cada segundo
const x = setInterval(function () {

    // Obtener la fecha y hora actual
    const ahora = new Date().getTime();

    // Calcular la diferencia entre la fecha de fin y la fecha actual
    const distancia = fechaFin - ahora;

    // Calcular días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Mostrar los resultados en los elementos HTML
    document.getElementById("dias").innerHTML = dias + "<br><span class='texto_conteo'>Días</span>";
    document.getElementById("horas").innerHTML = horas + "<br><span class='texto_conteo'>Horas</span>";
    document.getElementById("minutos").innerHTML = minutos + "<br><span class='texto_conteo'>Minutos</span>";
    document.getElementById("segundos").innerHTML = segundos + "<br><span class='texto_conteo'>Segundos</span>";

    // Si el contador llega a cero, mostrar un mensaje y detener la actualización
    if (distancia < 0) {
        clearInterval(x); // Detiene el intervalo
        document.getElementById("conteo").innerHTML = "¡El evento ha comenzado!";
        document.getElementById("conteo").style.color = "green";
        document.getElementById("conteo").style.fontSize = "1.5em";
    }
}, 1000); // Se actualiza cada 1000 milisegundos (1 segundo)

/*document.addEventListener('DOMContentLoaded', function() {
  const BotonAudio = document.getElementById('BotonAudio');
  const Audio = document.getElementById('Audio');

  BotonAudio.addEventListener('click', function() {
    Audio.play();
  });
});*/

document.addEventListener('DOMContentLoaded', function () {
    const BotonAudio = document.getElementById('BotonAudio');
    const Audio = document.getElementById('Audio');
    const iconoPlayPause = document.getElementById('iconoPlayPause'); // Obtenemos la referencia a la imagen

    // Rutas de tus iconos (ajusta si es necesario)
    const playIcon = 'Reproductor_Musica/play.png';
    const pauseIcon = 'Reproductor_Musica/pause.png'; // Asegúrate de tener un icono de pausa

    BotonAudio.addEventListener('click', function () {
        if (Audio.paused) { // Si el audio está pausado
            Audio.play(); // Lo reproducimos
            iconoPlayPause.src = pauseIcon; // Cambiamos el icono a pausa
            iconoPlayPause.alt = 'Pause'; // Cambiamos el texto alternativo
        } else { // Si el audio está reproduciéndose
            Audio.pause(); // Lo pausamos
            iconoPlayPause.src = playIcon; // Cambiamos el icono a play
            iconoPlayPause.alt = 'Play'; // Cambiamos el texto alternativo
        }
    });

    // Opcional: Si la música termina, que el botón vuelva a mostrar el icono de play
    Audio.addEventListener('ended', function () {
        iconoPlayPause.src = playIcon;
        iconoPlayPause.alt = 'Play';
    });

    // Opcional: Si el audio se carga y está listo para reproducirse
    // Puedes iniciar con el icono de play por defecto
    Audio.addEventListener('canplaythrough', function () {
        iconoPlayPause.src = playIcon;
        iconoPlayPause.alt = 'Play';
    });

});

//invitados botones aumentar y disminuir 
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // 1. Obtener referencias a los elementos del DOM
    const numInvitadosInput = document.getElementById('numero_Invitados');
    const decreaseBtn = document.querySelector('.button_dismin');
    const increaseBtn = document.querySelector('.button_aument');

    // 2. Obtener los valores mínimos y máximos del input
    // Convertimos a entero porque los atributos HTML son cadenas de texto
    const minValue = parseInt(numInvitadosInput.min);
    const maxValue = parseInt(numInvitadosInput.max);

    // 3. Función para actualizar el valor del input
    // 'change' será -1 para disminuir y 1 para aumentar
    function updateValue(change) {
        let currentValue = parseInt(numInvitadosInput.value); // Obtener el valor actual
        let newValue = currentValue + change; // Calcular el nuevo valor

        // 4. Validar que el nuevo valor esté dentro de los límites (min y max)
        if (newValue >= minValue && newValue <= maxValue) {
            numInvitadosInput.value = newValue; // Actualizar el valor del input
        } else if (newValue < minValue) {
            // Si el nuevo valor es menor que el mínimo, establecerlo en el mínimo
            numInvitadosInput.value = minValue;
        } else if (newValue > maxValue) {
            // Si el nuevo valor es mayor que el máximo, establecerlo en el máximo
            numInvitadosInput.value = maxValue;
        }
    }

    // 5. Asignar los Event Listeners a los botones
    decreaseBtn.addEventListener('click', function () {
        updateValue(-1); // Llama a updateValue con -1 para decrementar
    });

    increaseBtn.addEventListener('click', function () {
        updateValue(1); // Llama a updateValue con 1 para incrementar
    });
});

//Actualizado