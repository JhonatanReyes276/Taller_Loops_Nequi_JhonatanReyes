const movimientos = [30000, -10000, 45000, -50000, 100000, -25000];

let total = 0;
let cantidadRetiros = 0;

for (let i = 0; i < movimientos.length; i++) {
  total += movimientos[i];

  if (movimientos[i] < 0) {
    cantidadRetiros += 1; 
  }
}

console.log("Total:", total);
console.log("Cantidad de retiros:", cantidadRetiros);
