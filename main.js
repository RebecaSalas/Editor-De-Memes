// Funcion que selecciona un elemento
const $ = (selector) => document.querySelector(selector);

//... Inicio de selecciones de elementos ...
const $botonImagen = $(".boton-imagen"); // Botón de imagen (1)
const $botonTexto = $(".boton-texto"); // Botón de texto (1)
const $panelDerecho = $(".panel-derecho"); // Panel derecho (imagen) (1)
const $panelIzquierdo = $(".panel-izquierdo"); // Panel izquierdo (texto) (1)
const $botonCerrarDerecho = $(".panel-derecho .cerrar-panel"); // Botón para cerrar panel derecho (2)
const $botonCerrarIzquierdo = $(".panel-izquierdo .cerrar-panel"); // Botón para cerrar panel izquierdo (2)
const $botonClaro = $(".boton-claro"); // Botón para activar modo claro (3)
const $botonOscuro = $(".boton-oscuro"); // Botón para activar modo oscuro (3)
const $body = document.body; // Elemento <body> (3)
//...--->

//... Variables ...
const modoAlmacenado = localStorage.getItem('modo'); // Modo guardado en localStorage (3)
//...--->

//... Funciones ...
const alternarPaneles = (panelMostrar, panelOcultar) => { // Función alternarPaneles (1)
    panelMostrar.classList.remove('oculto'); // Mostrar panel (1)
    panelOcultar.classList.add('oculto'); // Ocultar panel (1)
}; // Fin alternarPaneles

const ocultarPanel = (panel) => { // Función ocultarPanel (2)
    panel.classList.add('oculto'); // Ocultar panel (2)
}; // Fin ocultarPanel

const alternarModo = () => { // Función alternarModo (3)
    $body.classList.toggle("claro"); // Alternar modo claro (3)
    $body.classList.toggle("oscuro"); // Alternar modo oscuro (3)
    actualizarBotones(); // Actualizar botones (3)
    localStorage.setItem('modo', $body.classList.contains("oscuro") ? "oscuro" : "claro"); // Guardar preferencia (3)
}; // Fin alternarModo

const actualizarBotones = () => { // Función actualizarBotones (3)
    if ($body.classList.contains("oscuro")) {
        $botonClaro.style.display = "inline-block"; // Mostrar botón claro (3)
        $botonOscuro.style.display = "none"; // Ocultar botón oscuro (3)
    } else {
        $botonClaro.style.display = "none"; // Ocultar botón claro (3)
        $botonOscuro.style.display = "inline-block"; // Mostrar botón oscuro (3)
    }
}; // Fin actualizarBotones
//...--->

//... Eventos ...
$botonImagen.addEventListener("click", () => alternarPaneles($panelDerecho, $panelIzquierdo)); // Click botón imagen (1)
$botonTexto.addEventListener("click", () => alternarPaneles($panelIzquierdo, $panelDerecho)); // Click botón texto (1)

if ($botonCerrarDerecho) {
    $botonCerrarDerecho.addEventListener("click", () => ocultarPanel($panelDerecho)); // Click cerrar panel derecho (2)
}
if ($botonCerrarIzquierdo) {
    $botonCerrarIzquierdo.addEventListener("click", () => ocultarPanel($panelIzquierdo)); // Click cerrar panel izquierdo (2)
}

$botonClaro.addEventListener("click", alternarModo); // Click modo claro (3)
$botonOscuro.addEventListener("click", alternarModo); // Click modo oscuro (3)
//...--->

//... Inicialización ...
if (modoAlmacenado) {
    $body.classList.add(modoAlmacenado); // Aplicar modo guardado (3)
} else {
    $body.classList.add("claro"); // Modo claro por defecto (3)
}
actualizarBotones(); // Actualizar botones modo claro/oscuro (3)
