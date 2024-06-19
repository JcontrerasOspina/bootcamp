/* evento de javascript */
/* inicializar array datos*/
const datos = {
	nombre: '',
	celular: '',
	correo: '',
	mensaje: ''
}

//--- eventos de los input -----//
//--- metodo querySelector, devuelve el primer elemento del document que coincida con el selector
let nombre = document.querySelector('#nombre');
let celular = document.querySelector('#celular');
let correo = document.querySelector('#correo');
let mensaje = document.querySelector('#mensaje');

//--- metodo addEventListener, escucha un evento indicado y ejecuta una funcion
// nombre.addEventListener('input', funcionPrueba);
// function funcionPrueba(){
// 	alert('Hola');
// }

nombre.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento){
	//console.log(evento);
	datos[evento.target.id] = evento.target.value;
	//console.log(datos);

}

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
	evento.preventDefault();
	const { nombre, celular, correo, mensaje } = datos;
	// console.log(nombre);
	// console.log(celular);
	// console.log(correo);
	// console.log(mensaje);
if(nombre === '' || celular === '' || correo === '' || mensaje === ''){
	//console.log('Todos los campos son obligatorios');
	mostrarError('Todos los campos son obligatorios');
	return; //--- parar la ejecucuion del programa
}
	mostrarMensaje("Enviando datos correctamente");
	// console.log('Procesando formulario');
});

//Funcion sirve para mostrar un mensaje dentro del form
function mostrarError(mensaje){
	//console.log(mensaje);
	let error = document.createElement('p');
	error.textContent = mensaje;
	error.classList.add('error');
	formulario.appendChild(error);

	setTimeout(() => {
		error.remove();
		
		}, 5000);
	//console.log(error); 
}

function mostrarMensaje(mensaje){
	//console.log(mensaje);
	let alerta = document.createElement('p');
	alerta.textContent = mensaje;
	alerta.classList.add('correcto');
	formulario.appendChild(alerta);

	setTimeout(() => {
		alerta.remove();
	}, 3000);
}