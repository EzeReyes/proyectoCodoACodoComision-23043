const select = document.querySelector('#select')
const entradas =document.querySelector('#entradas')


function seleccionar () { 
let total = entradas.value*200;
let descuento = total * select.value/100;
let precioTotal = total-descuento;
document.querySelector('#output').value=`Total a Pagar:$ ${precioTotal}`;
}

// // function addElement () {
//     // crea un nuevo div
//     // y añade contenido
//     var newDiv = document.createElement("div");
//     var newContent = document.createTextNode("Hola!¿Qué tal?");
//     newDiv.appendChild(newContent); //añade texto al div creado.
  
//     // añade el elemento creado y su contenido al DOM
//     var currentDiv = document.getElementById("output");
//     document.body.insertBefore(newDiv, currentDiv);
//   }