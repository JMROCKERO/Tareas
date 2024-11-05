var formulario = document.querySelector("#form") //No estaba apuntando en ningún lado

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  var nombre = formulario.elements[0] //se cambiaron los nombres de las variables para que se entienda mejor
  var edad = formulario.elements[1]
  var nacionalidad = formulario.elements[2]

  var nombre = nombre.value
  var edad = edad.value

  var i = nacionalidad.selectedIndex
  var nacionalidad = nacionalidad.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 && (edad > 18 && edad < 120)) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar" //No está apuntando a nada
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = document.getElementById("lista-de-invitados"); //Esto no apunta a nada

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); //No es added, es add
lista.appendChild(elementoLista);

function crearElemento(descripcion, valor) { //Se eliminó una función que estaba duplicada e incompleta
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
elementoLista.remove();
  }
}