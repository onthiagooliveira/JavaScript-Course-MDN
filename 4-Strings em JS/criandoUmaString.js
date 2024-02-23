//  Declarando e incializando a string; 
//  /' Carecter de escape para aspas simples, para não haver erro pois optei por utiliza-la para conter a string.
var bigMouth = 'I\'ve got no right to take my place';
console.log(bigMouth);

/*  Convertendo variáveis 
  1 - declarando uma String
  2 - Convertendo uma String para Number
  3 - Convertendo uma variável do tipo Number para String através do método toString() (método do objeto Number);
*/
var myNum = '123';

var myNum = Number(myNum);
console.log(typeof myNum);

var myNum = myNum.toString();
console.log(typeof myNum);
