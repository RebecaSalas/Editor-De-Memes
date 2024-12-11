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
const $urlImagen = $("#imagen-url"); // Campo de entrada para la URL de la imagen (4)
const $imagenContenedor = $(".meme-imagen"); // Contenedor donde se muestra la imagen del meme (4),(5),(6),(7)
const $colorFondo = $("#cambiar-fondo"); // Selector de color para cambiar el fondo (5)
const $modoMezcla = $(".mezcla-fondo"); // Selector del modo de mezcla de fondo (6)
const $filtroBrillo = $("#brillo"); // Filtro de brillo (7)
const $filtroOpacidad = $("#opacidad"); // Filtro de opacidad (7)
const $filtroContraste = $("#contraste"); // Filtro de contraste (7)
const $filtroDesenfoque = $("#desenfoque"); // Filtro de desenfoque (7)
const $filtroEscalaGrises = $("#escala-grises"); // Filtro de escala de grises (7)
const $filtroSepia = $("#sepia"); // Filtro de sepia (7)
const $filtroMatiz = $("#matiz"); // Filtro de matiz (7)
const $filtroSaturacion = $("#saturacion"); // Filtro de saturación (7)
const $filtroNegativo = $("#negativo"); // Filtro de negativo (7)
//...--->



//... Variables ...
const modoAlmacenado = localStorage.getItem('modo'); // Modo guardado en localStorage (3)
//...--->



//... Funciones ...

//Función para alternar paneles (1)
const alternarPaneles = (panelMostrar, panelOcultar) => { 
    panelMostrar.classList.remove('oculto'); // Mostrar panel (1)
    panelOcultar.classList.add('oculto'); // Ocultar panel (1)
}; // Fin alternarPaneles

// Función para ocultar panel Imagen/Texto(2)
const ocultarPanel = (panel) => { 
    panel.classList.add('oculto'); // Ocultar panel (2)
}; // Fin ocultarPanel

// Función para alternar modo claro/oscuro (3)
const alternarModo = () => { 
    $body.classList.toggle("claro"); // Alternar modo claro (3)
    $body.classList.toggle("oscuro"); // Alternar modo oscuro (3)
    actualizarBotones(); // Actualizar botones (3)
    localStorage.setItem('modo', $body.classList.contains("oscuro") ? "oscuro" : "claro"); // Guardar preferencia (3)
}; // Fin alternarModo

// Función para actualizar botones de modo claro/oscuro (3)
const actualizarBotones = () => { 
    if ($body.classList.contains("oscuro")) {
        $botonClaro.style.display = "inline-block"; // Mostrar botón claro (3)
        $botonOscuro.style.display = "none"; // Ocultar botón oscuro (3)
    } else {
        $botonClaro.style.display = "none"; // Ocultar botón claro (3)
        $botonOscuro.style.display = "inline-block"; // Mostrar botón oscuro (3)
    }
}; // Fin actualizarBotones

//// Panel derecho (Imagen) 

// Función para actualizar imagen de fondo (4)
const actualizarImagen = () => {  
    const url = $urlImagen.value; // Obtener la URL de la imagen del campo de entrada y eliminar espacios en blanco (4)
    $imagenContenedor.style.backgroundImage = url ? `url(${url})` : ''; // Establecer la imagen de fondo del contenedor del meme (4)
}; // Fin actualizarImagen

// Funcion para cambiar color de fondo (5) 
const cambiarColorFondo = () => {
    $imagenContenedor.style.backgroundColor = $colorFondo.value;
    // console.log("Color seleccionado:", $colorFondo.value); 
}; // Fin cambiarColorFondo

// Función para cambiar modo de mezcla (6)
const cambiarModoMezcla = () => {
    if ($modoMezcla.value === 'ninguno') {
        $imagenContenedor.style.backgroundBlendMode = 'unset';
    } else if ($modoMezcla.value === 'aclarar') {
        $imagenContenedor.style.backgroundBlendMode = 'lighten';
    } else if ($modoMezcla.value === 'oscurecer') {
        $imagenContenedor.style.backgroundBlendMode = 'darken';
    } else if ($modoMezcla.value === 'diferencia') {
        $imagenContenedor.style.backgroundBlendMode = 'difference';
    } else if ($modoMezcla.value === 'luminosidad') {
        $imagenContenedor.style.backgroundBlendMode = 'luminosity';
    } else if ($modoMezcla.value === 'multiplicar') {
        $imagenContenedor.style.backgroundBlendMode = 'multiply';
    }
    // console.log("Modo de mezcla seleccionado:", $modoMezcla.value); 
}; // Fin cambiarModoMezcla

// Función para aplicar filtros a la imagen del meme (7)
const aplicarFiltros = () => { 
    const brillo = $filtroBrillo.value;
    const opacidad = $filtroOpacidad.value;
    const contraste = $filtroContraste.value;
    const desenfoque = $filtroDesenfoque.value;
    const escalaGrises = $filtroEscalaGrises.value;
    const sepia = $filtroSepia.value;
    const matiz = $filtroMatiz.value;
    const saturacion = $filtroSaturacion.value;
    const negativo = $filtroNegativo.value;

    // Aplicar los filtros a la imagen del meme (7)
    $imagenContenedor.style.filter = ` 
        brightness(${brillo})
        opacity(${opacidad})
        contrast(${contraste}%)
        blur(${desenfoque}px)
        grayscale(${escalaGrises}%)
        sepia(${sepia}%)
        hue-rotate(${matiz}deg)
        saturate(${saturacion}%)
        invert(${negativo})
    `;
}; // Fin de aplicarFiltros

//Función para restablecer filtros a sus valores predeterminados (8)
const restablecerFiltros = () => {   
    $filtroBrillo.value = 1;
    $filtroOpacidad.value = 1;
    $filtroContraste.value = 100;
    $filtroDesenfoque.value = 0;
    $filtroEscalaGrises.value = 0;
    $filtroSepia.value = 0;
    $filtroMatiz.value = 0;
    $filtroSaturacion.value = 100;
    $filtroNegativo.value = 0;
    aplicarFiltros();
}; //Fin restablecerFiltros
//// Fin del panel derecho (Imagen)


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
//// Panel derecho (Imagen) 
$urlImagen.addEventListener("input", actualizarImagen); // Actualizar la imagen al cambiar la URL (4)
$colorFondo.addEventListener("input", cambiarColorFondo); // Actualizar el color de fondo al cambiar la selección (5)
$modoMezcla.addEventListener("change", cambiarModoMezcla); // Actualizar el modo de mezcla al cambiar la selección (6)
$filtroBrillo.addEventListener("input", aplicarFiltros); // Actualizar filtros (7)
$filtroOpacidad.addEventListener("input", aplicarFiltros); 
$filtroContraste.addEventListener("input", aplicarFiltros); 
$filtroDesenfoque.addEventListener("input", aplicarFiltros); 
$filtroEscalaGrises.addEventListener("input", aplicarFiltros);
$filtroSepia.addEventListener("input", aplicarFiltros);
$filtroMatiz.addEventListener("input", aplicarFiltros);
$filtroSaturacion.addEventListener("input", aplicarFiltros);
$filtroNegativo.addEventListener("input", aplicarFiltros);  
const $botonRestablecerFiltros = $(".reestablecer-filtros"); // Botón para restablecer filtros (8)
$botonRestablecerFiltros.addEventListener("click", restablecerFiltros); 
//// Fin del panel derecho (Imagen) 


//...--->



//... Inicialización ...

if (modoAlmacenado) {
    $body.classList.add(modoAlmacenado); // Aplicar modo guardado (3)
} else {
    $body.classList.add("claro"); // Modo claro por defecto (3)
}
actualizarBotones(); // Actualizar botones modo claro/oscuro (3)




