const movimientos = [15000, 20000, 0, 50000, 132000, -80000, -110000, 0];

const posicionEncontrada = -110000;

for (let i = 0; i < movimientos.length; i++) {
  const movimientoActual = movimientos[i];
  if (movimientoActual === 0) {
    continue;
  }

  if (movimientoActual === posicionEncontrada) {
    console.log("¡Pago a comercio encontrado!");
    console.log("Monto: " + movimientoActual + " en la posición " + i);
    break;
  }
}



