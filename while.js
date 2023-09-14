function ordenarDecrescente(matriz) {
  var trocou;
  do {
    trocou = false;
    for (var i = 0; i < matriz.length - 1; i++) {
      if (matriz[i] < matriz[i + 1]) {
        [matriz[i], matriz[i + 1]] = [matriz[i + 1], matriz[i]]; // Trocar elementos
        trocou = true;
      }
    }
  } while (trocou);
}

var numeros = [5, 2, 9, 1, 5, 6];

// Chame a função para ordenar a matriz em ordem decrescente
ordenarDecrescente(numeros);

// Exiba a matriz ordenada em ordem decrescente
console.log(numeros);
