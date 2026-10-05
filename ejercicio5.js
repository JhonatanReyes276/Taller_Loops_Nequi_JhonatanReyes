const usuarios = [
  { nombre: "Rodrigo", movimientos: [30000, -10000, 45000, 15000] },
  { nombre: "Gonzalo", movimientos: [100000, -50000, -25000, 10000] },
  { nombre: "Maria", movimientos: [15000, 20000, -75000] }
];

for (let i = 0; i < usuarios.length; i++) {
  const usuarioActual = usuarios[i];

  let totalUsuario = 0;

  for (let j = 0; j < usuarioActual.movimientos.length; j++) {
    totalUsuario += usuarioActual.movimientos[j];
  }

  console.log(`Usuario: ${usuarioActual.nombre} | Total en cuenta: $${totalUsuario}`);
}