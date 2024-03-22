// Declarando uma array
let shopping = ["bread", "milk", "cheese", "hummus", "noodles", "cakes"];
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ["tree", 795, [0, 1, 2]];

// Acessando e modificando itens de uma array
shopping[0];
// return 'bread';

shopping[0] = "tahini";
// Posição 0 agora é tahini, substituiu o valor anterior.

// Acessando uma array dentro de uma array
random[2][1];
//return 1;

// Encontrando o comprimento de uma array
sequence.length;

// Percorrendo a array para exibir seus itens
for (var i = 0; i < shopping.length; i++) {
  // console.log(shopping[i])
}



// Métodos úteis em array

// *Convertendo uma string com vários dados em uma array:
// Método split(), Sintaxe:  .split(caractereQueDesejaSepararDaString);

var myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

var myArray = myData.split(",");
// return ['Manchester', ' London', ' Liverpool', ' Birmingham', ' Leeds', ' Carlisle']

let arrayLength = myArray.length;
//return 6

myArray[0];
// return a primeira posição do array

myArray[myArray.length - 1];
// return a última posição do array

// * Convertendo uma array para string
// Método join()

var myNewString = myArray.join(","); //join(',') ou join('-'), ou join('|')
// return Manchester,London,Liverpool,Birmingham,Leeds,Carlisle

// Outro jeito de converter uma array em string é utilizando o método toString(), não permite escolher separador
var dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames = dogNames.toString();



// *Adicionando e Removendo itens no final de uma array
// Método .push()

myArray.push("Cardiff");
myArray.push("Bradford");
myArray.push("Bringhton");

// *Atualizando o comprimento da array
let newLength = myArray.push("Bristol");
myArray;
newLength;

// *Removendo o último item de uma array
myArray.pop();
// Remove 'Bristol'

// *Salvando o item removido em uma nova variável
let removeItemFinal = myArray.pop();
// Remove 'Bringhton e armazena na variável removeItem



// *Adiconando e removendo itens no início de uma array
myArray.unshift("Edinburgh");
// Adciciona 'Edinburgh' na primeira posicão da array,  índice zero

let removeItemInicio = myArray.shift();
// Remove o valor na primeira posição da array,'Edinburh', e armazena na variável removeItemInicio;
myArray;
removeItemInicio;


// * Definindo uma array com uma quantidade específica de posições
let listaAlunos = new Array (30);
// ou let listaAlunos = (40);


//Execute view
console.log(listaAlunos);


