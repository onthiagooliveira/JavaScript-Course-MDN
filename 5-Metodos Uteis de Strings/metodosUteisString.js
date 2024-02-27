// ? Métodos úteis de String
var browserType1 = 'mozilla';

console.log(
  // retorna o comprimento da string
  browserType1.length   
); 

// Acessando um caractere específico da string
console.log(
  // retorna a primeira letra
  browserType1[0]  
);
console.log(
  // retorna a última letra
  browserType1[browserType1.length - 1]
);

// ? Método Indexof(SearchValue) 
// Buscando uma substring dentro de uma string 
console.log(
  // Retorna 2, Pois 'Zilla' foi encontrada pela primeira vez à partir desse indice
  browserType1.indexOf('zilla') 
)

// Resultado quando uma susbtring dentro de uma string não é localizada
console.log (
  // return -1
  browserType1.indexOf('Vanilla') 
)

// Resultado quando uma substring é localizada dentro de uma string
console.log (
  // Localizada á partir do índice 0
  browserType1.indexOf('mozilla'), 
)

// Buscando uma substring de forma mais eficaz
// Se variável.indexof contén a string 'mozilla' for !== não existente
if (browserType1.indexOf('mozilla') !== -1) {  
  console.log(`Browser Type contém ${browserType1}`);
}
else {
  console.log(`Browser Type não contém ${browserType1}`);
}

// ? Método slice
// Extraindo uma substring à partir de uma string sem modificá-la
console.log(
  browserType1.slice(0, 3) //slice(startIndex, endIndex)
  //Expect output 'moz.'
);

// Mais um exemplo, slice(startIndex)
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(
  // Aqui passamos apenas o startIndex, e ele extrai a nova string até o último indíce.
  str.slice(10),
);

console.log(
  /* Aqui passamos o startIndex e o endIndex, 
  sendo o segundo parâmetro igual ao comprimento da string que está sendo retornada*/
  str.slice(4, -1)
);
