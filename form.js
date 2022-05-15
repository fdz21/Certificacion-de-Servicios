"use strict";

// Funciones
function prevenirDefault(event) {
  event.preventDefault();
}

  
function enviarDatos() {
  let form = document.querySelector("form");
  let cargo = form.cargo.value;
  let hora = form.hora.value;
  let titularidad = form.titularidad.value;
  let resolucion = form.resolucion.value;
  let observacion = form.observacion.value;
  let diaAlta = form.diaAlta.value;
  let mesAlta = form.mesAlta.value;
  let añoAlta = form.añoAlta.value;
  let diaBaja = form.diaBaja.value;
  let mesBaja = form.mesBaja.value;
  let añoBaja = form.añoBaja.value;


  

  let fechaAlta = añoAlta + "/" + mesAlta + "/" + diaAlta;
  let fechaBaja = añoBaja + "/" + mesBaja + "/" + diaBaja;

  let trFila = document.createElement("tr");
  let tdCargo = document.createElement("td");
  let tdHora = document.createElement("td");
  let tdTitularidad = document.createElement("td");
  let tdResolucion = document.createElement("td");
  let tdDiaAlta = document.createElement("td");
  let tdMesAlta = document.createElement("td");
  let tdAñoAlta = document.createElement("td");
  let tdContinua = document.createElement("td");
  let tdDiaBaja = document.createElement("td");
  let tdMesBaja = document.createElement("td");
  let tdAñoBaja = document.createElement("td");
  let tdDiaTotal = document.createElement("td");
  let tdMesTotal = document.createElement("td");
  let tdAñoTotal = document.createElement("td");
  let tdObservacion = document.createElement("td");
  let tabla = document.querySelector("#tabla"); 
  
  tdCargo.textContent = cargo;
  tdHora.textContent = hora;
  tdTitularidad.textContent = titularidad;
  tdResolucion.textContent = calcularResolucion(resolucion);
  tdDiaAlta.textContent = diaAlta;
  tdMesAlta.textContent = mesAlta;
  tdAñoAlta.textContent = añoAlta;
  tdDiaBaja.textContent = diaBaja;
  tdMesBaja.textContent = mesBaja;
  tdAñoBaja.textContent = añoBaja;
  tdDiaTotal.textContent = calcularDias(fechaAlta, fechaBaja);
  tdMesTotal.textContent = calcularMeses(fechaAlta, fechaBaja);
  tdAñoTotal.textContent = calcularYears(fechaAlta, fechaBaja);
  tdObservacion.textContent = rellenarObservacion(observacion);

  
  codigoCargos(tdCargo);
  resolucionCargo(tdCargo);
 
  trFila.appendChild(tdCargo);
  trFila.appendChild(tdHora);
  trFila.appendChild(tdTitularidad);
  trFila.appendChild(tdResolucion);
  trFila.appendChild(tdDiaAlta);
  trFila.appendChild(tdMesAlta);
  trFila.appendChild(tdAñoAlta);
  trFila.appendChild(tdDiaBaja);
  trFila.appendChild(tdMesBaja);
  trFila.appendChild(tdAñoBaja);
  trFila.appendChild(tdAñoTotal);
  trFila.appendChild(tdMesTotal);
  trFila.appendChild(tdDiaTotal);
  trFila.appendChild(tdObservacion);
  tabla.appendChild(trFila);
}

// Eventos
const continua = document.querySelector("#continua");
continua.addEventListener("click", continuidad);
const button = document.querySelector("#button");
button.addEventListener("click", prevenirDefault);
button.addEventListener("click", enviarDatos);



function continuidad(){

  let diaBaja = document.querySelector("#diaBaja");
  let mesBaja = document.querySelector("#mesBaja");
  let añoBaja = document.querySelector("#añoBaja");
  diaBaja.disabled = true;
  mesBaja.disabled = true;
  añoBaja.disabled = true;
}