function BBD(palavraChave) {
 
  throw new Error("Não foi possível encontrar: " + palavraChave);
}

var palavraChave = "abacaxi";

try {
  var resultado = BBD(palavraChave);
  console.log("Resultado da busca:", resultado);
} catch (erro) {
  console.error("Ocorreu um erro durante a busca:", erro.message);

  console.error("Desculpe, não foi possível encontrar o item desejado.");
}
