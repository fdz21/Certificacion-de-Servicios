function imprimirElemento(elemento) {
    var ventana = window.open('', 'PRINT', 'height=800,width=1000');
    ventana.document.write('<html><head><title>' + document.title + '</title>');
    ventana.document.write('<link rel="stylesheet" href="style.css">'); //Aquí agregué la hoja de estilos
    ventana.document.write('</head><body >');
    ventana.document.write(elemento.innerHTML);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.focus();
    ventana.onload = function() {
      ventana.print();
      ventana.close();
    };
    return true;
  }

  document.querySelector("#btnImprimir").addEventListener("click", function() {
    var div = document.querySelector("#imprimible");
    imprimirElemento(div);
  });