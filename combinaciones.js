function generarCombinaciones() {
  const E = ['a', 'b'];
  const n = 3;
  const combinaciones = [];

  function backtracking(posicion, combinacion) {
    if (posicion === n) {
      combinaciones.push(combinacion);
      return;
    }

    const letraAgregada = combinacion + 'a';
    backtracking(posicion + 1, letraAgregada);

    const otraLetraAgregada = combinacion + 'b';
    backtracking(posicion + 1, otraLetraAgregada);
  }

  backtracking(0, '');
  return combinaciones;
}

const combinaciones = generarCombinaciones();
const combinacionesList = document.getElementById('combinaciones');

for (let i = 0; i < combinaciones.length; i++) {
  const combinacion = combinaciones[i];
  const combinacionItem = document.createElement('li');
  combinacionItem.textContent = combinacion;
  combinacionesList.appendChild(combinacionItem);
}
