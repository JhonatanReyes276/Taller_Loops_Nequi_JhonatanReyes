const prompt = require('prompt-sync')();
const pinCorrecto = 1520;

let intento = Number(prompt('Escribe tu PIN: '));

while (intento !== pinCorrecto) {
    console.log("PIN incorrecto. Vuelve a intentarlo");
    intento = Number(prompt('Escribe tu PIN: '));
}

console.log("¡Bienvenido a Nequi!");