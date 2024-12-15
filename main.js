// Evento que asegura la funcionalidad al cargar HTML
window.onload = () => {
    // Funcion que selecciona un elemento
    const $ = (selector) => document.querySelector(selector);

    //.........................................Inicio de selecciones de elementos .........................................
    //// PANEL SUPERIOR...
    const $botonImagen = $(".boton-imagen"); // Botón de imagen (1)
    const $botonTexto = $(".boton-texto"); // Botón de texto (1)
    const $panelDerecho = $(".panel-derecho"); // Panel derecho (imagen) (1)
    const $panelIzquierdo = $(".panel-izquierdo"); // Panel izquierdo (texto) (1)
    const $botonClaro = $(".boton-claro"); // Botón para activar modo claro (3)
    const $botonOscuro = $(".boton-oscuro"); // Botón para activar modo oscuro (3)
    const $body = document.body; // Elemento <body> (3)
    /// Abrir y cerrar panel
    const $botonCerrarDerecho = $(".panel-derecho .cerrar-panel"); // Botón para cerrar panel derecho (2)
    const $botonCerrarIzquierdo = $(".panel-izquierdo .cerrar-panel"); // Botón para cerrar panel izquierdo (2)
    //// PANEL DERECHO - SECCION IMAGEN...
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
    //// PANEL IZQUIERDO - SECCION TEXTO...
    const $textoSuperior = $("#texto-superior"); // Párrafo de texto superior (9)...
    const $inputTextoSuperior = $("#input-texto-superior"); // Input para editar texto superior (9)
    const $sinTextoSuperior = $("#sin-texto-superior"); // Checkbox para remover texto superior (10)
    const $textoInferior = $("#texto-inferior"); // Párrafo de texto superior (11)...
    const $inputTextoInferior = $("#input-texto-inferior"); // Input para editar texto superior (11)
    const $sinTextoInferior = $("#sin-texto-inferior"); // Checkbox para remover texto superior (12)
    const $fuente = $("#fuente"); // Selector para cambiar la familia de la fuente (13)
    const $tamañoFuente = $("#tamaño-fuente"); // Input para cambiar el tamaño de la fuente (14)
    const $alineacionIzquierda = $(".alineacion-izquierda"); // Botón para alinear el texto a la izquierda (15)
    const $alineacionCentro = $(".alineacion-centro"); // Botón para alinear el texto al centro (15)
    const $alineacionDerecha = $(".alineacion-derecha"); // Botón para alinear el texto a la derecha (15)
    const $colorTexto = $("#color"); // Input para cambiar el color del texto (16)
    const $colorFondoTexto = $("#fondo"); // Input para cambiar el color de fondo del texto (17)
    const $fondoTransparente = $("#fondo-transparente"); // Checkbox para hacer el fondo transparente (18)
    const $contornoNinguno = $(".contorno-ninguno"); // Botón para seleccionar sin contorno (19)
    const $contornoClaro = $(".contorno-claro"); // Botón para seleccionar contorno claro (19)
    const $contornoOscuro = $(".contorno-oscuro"); // Botón para seleccionar contorno oscuro (19)
    const $espaciado = $("#espaciado"); // Input para cambiar el relleno (padding) del texto (20)
    const $interlineado = $("#interlineado"); // Selector para cambiar el alto de línea (21)
    /// Descargar meme
    const $descargarMeme = $(".descargar"); // Boton para descargar meme (22)
    const $contenedorMeme = $(".meme"); //  Contenedor completo del meme (22)
    ////......................................... Fin de selecciones de elementos .........................................--->

    //............................................Inicio de Variables ..........................................................
    const modoAlmacenado = localStorage.getItem("modo"); // Modo guardado en localStorage (3)
    ////......................................... Fin de Variables ...........................................................--->

    //............................................Inicio de Funciones ...........................................................
    //// PANEL SUPERIOR...
    //Función para alternar paneles (1)
    const alternarPaneles = (panelMostrar, panelOcultar) => {
        panelMostrar.style.display = "block"; // Mostrar el panel (1)
        panelOcultar.style.display = "none"; // Ocultar el panel (1)
        // Agregar o remover la clase 'panel-responsive' según el tamaño de la pantalla
        if (window.innerWidth <= 768) {
            panelMostrar.classList.add("panel-responsive");
        } else {
            panelMostrar.classList.remove("panel-responsive");
        }
    };

    // Función para alternar modo claro/oscuro (3)
    const alternarModo = () => {
        $body.classList.toggle("claro"); // Alternar modo claro (3)
        $body.classList.toggle("oscuro"); // Alternar modo oscuro (3)
        actualizarBotones(); // Actualizar botones (3)
        localStorage.setItem(
            "modo",
            $body.classList.contains("oscuro") ? "oscuro" : "claro"
        ); // Guardar preferencia (3)
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
    ////... FIN PANEL SUPERIOR

    /// Abrir y cerrar panel...
    //Función para ocultar panel Imagen/Texto (2)
    const ocultarPanel = (panel) => {
        panel.style.display = "none"; // Ocultar el panel
    }; //Fin ocultarPanel
    ///...Fin abrir y cerrar panel

    //// PANEL DERECHO - SECCION IMAGEN...
    // Función para actualizar imagen de fondo (4)
    const actualizarImagen = () => {
        const url = $urlImagen.value.trim(); // Obtener la URL de la imagen y eliminar los espacios en blanco
        $imagenContenedor.style.backgroundImage = url ? `url(${url})` : ""; // Configurar la imagen de fondo si la URL es válida, de lo contrario, eliminarla
        $imagenContenedor.style.backgroundSize = "contain"; // Ajustar el tamaño de la imagen para que se ajuste al contenedor
        $imagenContenedor.style.backgroundPosition = "center"; // Centrar la imagen dentro del contenedor
        $imagenContenedor.style.backgroundRepeat = "no-repeat"; // Evitar que la imagen se repita
    }; // Fin actualizarImagen

    // Funcion para cambiar color de fondo (5)
    const cambiarColorFondo = () => {
        $imagenContenedor.style.backgroundColor = $colorFondo.value;
    }; // Fin cambiarColorFondo

    // Función para cambiar modo de mezcla (6)
    const cambiarModoMezcla = () => {
        if ($modoMezcla.value === "ninguno") {
            $imagenContenedor.style.backgroundBlendMode = "unset";
        } else if ($modoMezcla.value === "aclarar") {
            $imagenContenedor.style.backgroundBlendMode = "lighten";
        } else if ($modoMezcla.value === "oscurecer") {
            $imagenContenedor.style.backgroundBlendMode = "darken";
        } else if ($modoMezcla.value === "diferencia") {
            $imagenContenedor.style.backgroundBlendMode = "difference";
        } else if ($modoMezcla.value === "luminosidad") {
            $imagenContenedor.style.backgroundBlendMode = "luminosity";
        } else if ($modoMezcla.value === "multiplicar") {
            $imagenContenedor.style.backgroundBlendMode = "multiply";
        }
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
    ////... FIN PANEL DERECHO - SECCION IMAGEN

    //// PANEL IZQUIERDO - SECCION TEXTO... > sigue en eventos
    //..................................................Fin de Funciones..........................................................--->

    //.................................................. Inicio de Eventos ..........................................................
    //// PANEL SUPERIOR...
    $botonImagen.addEventListener("click", () =>
        alternarPaneles($panelDerecho, $panelIzquierdo)
    ); // Click botón imagen (1)
    $botonTexto.addEventListener("click", () =>
        alternarPaneles($panelIzquierdo, $panelDerecho)
    ); // Click botón texto (1)
    $botonClaro.addEventListener("click", alternarModo); // Click modo claro (3)
    $botonOscuro.addEventListener("click", alternarModo); // Click modo oscuro (3)
    ////... FIN PANEL SUPERIOR

    /// Abrir y cerrar panel...
    // Mostrar el panel de imagen y ocultar el panel de texto (2)
    $botonImagen.addEventListener("click", () => {
        ocultarPanel($panelIzquierdo); // Ocultar el panel izquierdo si está visible
        mostrarPanel($panelDerecho); // Mostrar el panel derecho
    });

    // Mostrar el panel de texto y ocultar el panel de imagen (2)
    $botonTexto.addEventListener("click", () => {
        ocultarPanel($panelDerecho); // Ocultar el panel derecho si está visible
        mostrarPanel($panelIzquierdo); // Mostrar el panel izquierdo
    });

    // Cerrar el panel derecho (imagen) (2)
    $botonCerrarDerecho?.addEventListener("click", () =>
        ocultarPanel($panelDerecho)
    );

    // Cerrar el panel izquierdo (texto) (2)
    $botonCerrarIzquierdo?.addEventListener("click", () =>
        ocultarPanel($panelIzquierdo)
    );
    ///...Fin abrir y cerrar panel

    /// PANEL DERECHO - SECCION IMAGEN...
    $urlImagen.addEventListener("input", actualizarImagen); // Actualizar la imagen al cambiar la URL (4)
    $colorFondo.addEventListener("input", cambiarColorFondo); // Actualizar el color de fondo al cambiar la selección (5)
    $modoMezcla.addEventListener("change", cambiarModoMezcla); // Actualizar el modo de mezcla al cambiar la selección (6)
    $filtroBrillo.addEventListener("input", aplicarFiltros); // Actualizar filtro (7)
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
    ////... FIN PANEL DERECHO - SECCION IMAGEN

    //// PANEL IZQUIERDO - SECCION TEXTO...
    // Función para editar el texto superior (9)
    $inputTextoSuperior.addEventListener("input", (e) => {
        $textoSuperior.innerText = e.target.value;
        // Actualiza el texto superior
    });

    // Función para remover el texto superior (10)
    $sinTextoSuperior.addEventListener("change", (e) => {
        $textoSuperior.style.display = e.target.checked ? "none" : "block";
        // Muestra/oculta el texto superior
    });

    // Función para editar el texto inferior (11)
    $inputTextoInferior.addEventListener("input", (e) => {
        $textoInferior.innerText = e.target.value;
        // Actualiza el texto inferior
    });

    // Función para remover el texto inferior (12)
    $sinTextoInferior.addEventListener("change", (e) => {
        $textoInferior.style.display = e.target.checked ? "none" : "block";
        // Muestra/oculta el texto inferior
    });

    // Función para cambiar la familia de la fuente (13)
    $fuente.addEventListener("change", () => {
        $textoSuperior.style.fontFamily = $fuente.value;
        $textoInferior.style.fontFamily = $fuente.value;
        // Cambia la fuente del texto
    });

    // Función para cambiar el tamaño de la fuente (14)
    $tamañoFuente.addEventListener("input", () => {
        $textoSuperior.style.fontSize = `${$tamañoFuente.value}px`;
        $textoInferior.style.fontSize = `${$tamañoFuente.value}px`;
        // Cambia el tamaño del texto
    });

    // Función para cambiar la alineación a la izquierda (15)
    $alineacionIzquierda.addEventListener("click", () => {
        $textoSuperior.style.textAlign = "left";
        $textoInferior.style.textAlign = "left";
        // Alinea el texto a la izquierda
    });

    // Función para cambiar la alineación al centro (15)
    $alineacionCentro.addEventListener("click", () => {
        $textoSuperior.style.textAlign = "center";
        $textoInferior.style.textAlign = "center";
        // Alinea el texto al centro
    });

    // Función para cambiar la alineación a la derecha (15)
    $alineacionDerecha.addEventListener("click", () => {
        $textoSuperior.style.textAlign = "right";
        $textoInferior.style.textAlign = "right";
        // Alinea el texto a la derecha
    });

    // Función para cambiar el color del texto (16)
    $colorTexto.addEventListener("input", () => {
        $textoSuperior.style.color = $colorTexto.value;
        $textoInferior.style.color = $colorTexto.value;
        // Cambia el color del texto
    });

    // Función para cambiar el color de fondo del texto (17)
    $colorFondoTexto.addEventListener("input", () => {
        $textoSuperior.style.backgroundColor = $colorFondoTexto.value;
        $textoInferior.style.backgroundColor = $colorFondoTexto.value;
        // Cambia el fondo del texto
    });

    // Función para fondo transparente (18)
    $fondoTransparente.addEventListener("change", () => {
        const color = $fondoTransparente.checked
            ? "transparent"
            : $colorFondoTexto.value;
        $textoSuperior.style.backgroundColor = color;
        $textoInferior.style.backgroundColor = color;
        // Alterna fondo transparente del texto
    });

    // Función para remover el contorno del texto (19)
    $contornoNinguno.addEventListener("click", () => {
        $textoSuperior.style.textShadow = "none";
        $textoInferior.style.textShadow = "none";
        // Remueve el contorno del texto
    });

    // Función para aplicar un contorno claro al texto (19)
    $contornoClaro.addEventListener("click", () => {
        $textoSuperior.style.textShadow =
            "2px 2px 3px #ffffff, 0 0 1.5em #ffffff";
        $textoInferior.style.textShadow =
            "2px 2px 3px #ffffff, 0 0 1.5em #ffffff";
        // Contorno claro al texto
    });

    // Función para aplicar un contorno oscuro al texto (19)
    $contornoOscuro.addEventListener("click", () => {
        $textoSuperior.style.textShadow =
            "3px 3px 5px #000000, 0 0 2em #000000";
        $textoInferior.style.textShadow =
            "3px 3px 5px #000000, 0 0 2em #000000";
        // Contorno oscuro al texto
    });

    // Función para cambiar el relleno (padding) del texto (20)
    $espaciado.addEventListener("input", () => {
        $textoSuperior.style.padding = `${$espaciado.value}px 0`;
        $textoInferior.style.padding = `${$espaciado.value}px 0`;
        // Cambia el relleno del texto
    });

    // Función para cambiar el alto de línea del texto (21)
    $interlineado.addEventListener("change", () => {
        $textoSuperior.style.lineHeight = $interlineado.value;
        $textoInferior.style.lineHeight = $interlineado.value;
        // Cambia el interlineado del texto
    });
    ////... FIN PANEL IZQUIERDO - SECCION TEXTO

    /// Descargar meme
    // Función para descargar el contenedor del meme (22)
    $descargarMeme.addEventListener("click", () => {
        domtoimage.toBlob($contenedorMeme).then((blob) => {
            saveAs(blob, "meme.png");
        });
    });
    /// Fin Descargar meme
    //...............................................Fin de eventos ...........................................................--->

    //............................................... Inicialización ............................................................
    if (modoAlmacenado) {
        $body.classList.add(modoAlmacenado); // Aplicar modo guardado (3)
    } else {
        $body.classList.add("claro"); // Modo claro por defecto (3)
    }
    actualizarBotones(); // Actualizar botones modo claro/oscuro (3)
};
