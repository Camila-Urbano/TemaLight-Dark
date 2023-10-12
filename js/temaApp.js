const boton_switch = document.getElementById('switch');
const body = document.body;

// Función para cambiar el tema y guardar el estado en localStorage
function cambiarTema() {
    body.classList.toggle('temaDark');
    boton_switch.classList.toggle('active');
    
    // Verificar si el tema actual es dark y guardarlo en localStorage
    const temaDark = body.classList.contains('temaDark');
    localStorage.setItem('tema', temaDark ? 'dark' : 'light');
}

// Evento al hacer clic en el botón de cambio de tema
boton_switch.addEventListener('click', cambiarTema);

// Verificar el estado del tema en localStorage al cargar la página
window.addEventListener('load', () => {
    const temaGuardado = localStorage.getItem('tema');
    
    // Si hay un tema guardado en localStorage y es dark, aplicarlo
    if (temaGuardado === 'dark') {
        body.classList.add('temaDark');
        boton_switch.classList.toggle('active');
    }
});