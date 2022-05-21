function licenciaGoce(licencia){
      if (licencia == ""){
          licencia = ".-";
      }
      return licencia
  }
  function datosPersonales(){
    let personaApellido = document.querySelector(".personaApellido");
    let personaNombre = document.querySelector(".personaNombre");
    let personaDni = document.querySelector(".dni");
    let licencia = document.querySelector(".licencia");
    let form = document.querySelector("form");
    let apellidoInput = form.apellido.value;
    let nombreInput = form.nombre.value;
    let dniInput = form.dni.value;
    let licenciaInput = form.licencia.value;
  
    personaApellido.innerHTML = apellidoInput;
    personaNombre.innerHTML = nombreInput;
    personaDni.innerHTML = dniInput;
    licencia.innerHTML = licenciaGoce(licenciaInput);
  }

  