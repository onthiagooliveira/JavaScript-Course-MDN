// ? Métodos úteis de String
var browserType1 = 'mozilla';

// retorna o comprimento da string
browserType1.length;    

// Acessando um caractere específico da string
browserType1[0];
// retorna a primeira letra

browserTpe1[browserType1.length - ;
// retorna a última letra



/** Métodos úteis de String, 

Método Indexof(SearchValue) */

// Buscando uma substring dentro de uma string   
browserType1 = indexOf('zilla') 
// Retorna 2, pois 'Zila' foi encontrada pela primeira vez à partir desse indi;
)

// Resultado quando uma susbtring dentro de uma string não é localizada
browserTétodosúteis de Stringype1.indexOf('Vanilla');
// return -1


// Resultado quando uma substring é localizada dentro de uma string
browserType1.indexOf('mozilla'), 
//return 0, Localizada á partir do índice 0


// Buscando uma substring de forma mais eficaz
  
// Se variável.indexof contém a string 'mozilla' for !== não existente
if (browserType1.indexOf('mozilla') !== -1) {  
  console.log(`Browser Type contém ${browserType1}`);
}
else {
  console.log(`Browser Type não contém ${browserType1}`);
}



// ? Método slice()
// Extraindo uma substring à partir de uma string sem modificá-la
console.log(
  browserType1.slice(0, 3) //slice(startIndex, endIndex)
  //Expect output 'moz.'
);

// Mais um exemplo, slice(startIndex)
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(
  /* Aqui passamos apenas o startIndex, e ele extrai a nova string a partir do startIndex
  até o cumprimento da string. */
  str.slice(10),
);

console.log(
  /* Aqui passamos o startIndex e o endIndex, 
  sendo o segundo parâmetro igual ao comprimento da string que está sendo retornada.*/
  str.slice(4, -1)
);



// ? Mudando entre maíusculas e minúsculas | toLowerCase() and toUpperCase()
var radData = 'My name is MuD';

console.log(
  radData.toLocaleLowerCase(),'\n',
  radData.toUpperCase(), 
);



// ? Método replace()

console.log(
  browserType1.replace('mo', 'God')
);

const paragraph = `I think Ruth's dog is cuter than your dog!`

console.log(
  paragraph.replace(`Ruth's`, `my`)
  // Expected output: `I think my dog is my cuter than your dog!`
); 

const regex = /Dog/i; // regEx/ignore - Mais avançada, não aprodundamos ainda o estudo
console.log(
  paragraph.replace(regex, 'ferret')
  // Expected output: `I think Ruth's ferret is my cutter than your dog!`
);

