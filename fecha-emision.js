function diaDeEmision() {
  let form = document.querySelector("form");
  let fechaEmision = form.fechaEmision.value;
  let fecha = new Date(fechaEmision);
  let diaEmision1 = document.querySelector("#dia1");
  let diaEmision2 = document.querySelector("#dia2");
  diaEmision1.innerText = fecha.getUTCDate();
  diaEmision2.innerText = fecha.getUTCDate();
}
function mesDeEmision() {
  let form = document.querySelector("form");
  let fechaEmision = form.fechaEmision.value;
  let fecha = new Date(fechaEmision);
  let mesEmision1 = document.querySelector("#mes1");
  let mesEmision2 = document.querySelector("#mes2");
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  mesEmision1.innerText = meses[fecha.getUTCMonth()];
  mesEmision2.innerText = meses[fecha.getUTCMonth()];
}
function yearDeEmision() {
    let form = document.querySelector("form");
    let fechaEmision = form.fechaEmision.value;
    let fecha = new Date(fechaEmision);
    let yearEmision1 = document.querySelector("#year1");
    let yearEmision2 = document.querySelector("#year2");
    yearEmision1.innerText = fecha.getUTCFullYear();

    if (fecha.getUTCFullYear() == "2022") {
        yearEmision2.innerText = " Dos mil Veintidós";
    }
    else if(fecha.getUTCFullYear() == "2023") {
        yearEmision2.innerText = " Dos mil Veintitrés";
    }
    else if(fecha.getUTCFullYear() == "2024") {
        yearEmision2.innerText = " Dos mil Veinticuatro";
    } 
  }