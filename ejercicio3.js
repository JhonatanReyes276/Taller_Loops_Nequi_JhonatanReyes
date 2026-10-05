const prompt = require('prompt-sync')();

let opcion = 0;

do {
  console.log("Menú:");
  console.log("1. Ver saldo");
  console.log("2. Enviar dinero");
  console.log("3. Recargar");
  console.log("4. Salir");

  opcion = Number(prompt("Selecciona una opción (1-4): "));

  if (opcion === 1) {
    console.log("Seleccionaste: Ver saldo.");
  } else if (opcion === 2) {
    console.log("Seleccionaste: Enviar dinero.");
  } else if (opcion === 3) {
    console.log("Seleccionaste: Recargar.");
  } else if (opcion === 4) {
    console.log("Gracias por usar Nequi. ¡Adiós!");
  } else {
    console.log("Opción no válida. Inténtalo de nuevo.");
  }
} while (opcion !== 4);