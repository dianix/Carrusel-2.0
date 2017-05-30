var target = 0;

var cargarPagina = function () {
	// Elementos
	var botones = document.querySelectorAll(".control");
	var anterior = document.querySelector(".anterior");
	var siguiente = document.querySelector(".siguiente");
	
	// Eventos
	botones.forEach(function (boton) {
		boton.addEventListener("click", cambiarImagen);
	});
	anterior.addEventListener("click", anteriorImagen);
	siguiente.addEventListener("click", siguienteImagen);
};

var cambiarImagen = function () {
	target = parseInt(this.dataset.target);
	mostrarImagen(target);
};

var mostrarImagen = function (target) {
	var imagenActual = document.querySelector("div.activo");
	var imagenSiguiente = document.querySelector("div[data-imagen='" + target + "']");
	imagenActual.classList.remove("activo");
	imagenSiguiente.classList.add("activo");
};

var anteriorImagen = function (e) {
	e.preventDefault();
	target = target - 1;
	target = (target < 0) ? 3 : target;
	mostrarImagen(target);
};

var siguienteImagen = function (e) {
	e.preventDefault();
	target = target + 1;
	target = (target > 3) ? 0 : target;
	mostrarImagen(target);mostrarImagen(target);
};


window.addEventListener("load", cargarPagina);