var frutas = ['pitaia', 'banana', 'caju', 'laranja', 'pera'];


var palavraChave = 'abacaxi';

var encontrou = false;


for (var i = 0; i < frutas.length; i++) {
  switch (frutas[i]) {
    case 'abacaxi':
      encontrou = true;
      break;
   
  }
}


if (encontrou) {
  console.log('Encontrou a palavra-chave: ' + palavraChave);
} else {
  console.log('A palavra-chave não foi encontrada');
}
