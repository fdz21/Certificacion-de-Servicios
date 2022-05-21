"use strict";

// Funciones
function prevenirDefault(event) {
  event.preventDefault();
}

function datosPersonales(){
  let personaApellido = document.querySelector(".personaApellido");
  let personaNombre = document.querySelector(".personaNombre");
  let personaDni = document.querySelector(".dni");
  let form = document.querySelector("form");
  let apellidoInput = form.apellido.value;
  let nombreInput = form.nombre.value;
  let dniInput = form.dni.value;

  personaApellido.innerHTML = apellidoInput;
  personaNombre.innerHTML = nombreInput;
  personaDni.innerHTML = dniInput;
}

function continuidad() {
  let diaBaja = document.querySelector("#diaBaja");
  let mesBaja = document.querySelector("#mesBaja");
  let añoBaja = document.querySelector("#añoBaja");
  let divBaja = document.querySelector("#baja");
  let h3Baja = document.querySelector("#h3");
  if (diaBaja.disabled && mesBaja.disabled && añoBaja.disabled) {
    diaBaja.disabled = false;
    mesBaja.disabled = false;
    añoBaja.disabled = false;
    divBaja.classList.remove("div--baja");
    h3Baja.classList.remove("div--baja");
  } else {
    diaBaja.disabled = true;
    mesBaja.disabled = true;
    añoBaja.disabled = true;
    divBaja.classList.add("div--baja");
    h3Baja.classList.add("div--baja");
  }
}

function enviarDatos() {

  function celdaContinua(diaBaja, mesBaja, añoBaja) {
    if (diaBaja == "" && mesBaja == "" && añoBaja == "") {
      tdContinua.colSpan = 3;
      trFila.appendChild(tdContinua);
      tdDiaTotal.textContent = calcularDiasHoy(fechaAlta);
      tdMesTotal.textContent = calcularMesesHoy(fechaAlta);
      tdAñoTotal.textContent = calcularYearsHoy(fechaAlta);
    } else {
      tdDiaTotal.textContent = calcularDias(fechaAlta, fechaBaja);
      tdMesTotal.textContent = calcularMeses(fechaAlta, fechaBaja);
      tdAñoTotal.textContent = calcularYears(fechaAlta, fechaBaja);
      trFila.appendChild(tdDiaBaja);
      trFila.appendChild(tdMesBaja);
      trFila.appendChild(tdAñoBaja);
    }
  }

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
  let tabla = document.querySelector("#prueba"); //Pendiente

  tdCargo.textContent = cargo;
  tdHora.textContent = hora;
  tdTitularidad.textContent = titularidad;
  tdResolucion.textContent = calcularResolucion(resolucion);
  tdDiaAlta.textContent = diaAlta;
  tdMesAlta.textContent = mesAlta;
  tdAñoAlta.textContent = añoAlta;
  tdContinua.textContent = "CONTINUA";
  tdDiaBaja.textContent = diaBaja;
  tdMesBaja.textContent = mesBaja;
  tdAñoBaja.textContent = añoBaja;
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

  celdaContinua(diaBaja, mesBaja, añoBaja);

  trFila.appendChild(tdAñoTotal);
  trFila.appendChild(tdMesTotal);
  trFila.appendChild(tdDiaTotal);
  trFila.appendChild(tdObservacion);
  tabla.appendChild(trFila);

  datosPersonales();
}

// Eventos
const button = document.querySelector("#button");
button.addEventListener("click", prevenirDefault);
button.addEventListener("click", enviarDatos);
const continua = document.querySelector("#continua");
continua.addEventListener("click", continuidad);
