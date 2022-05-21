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