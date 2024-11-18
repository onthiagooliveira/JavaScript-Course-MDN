// As declarações à seguir criam Arrays equivalentes
var bandas = new Array("Lynyrd Skynyrd", "Black Sabah");
var games = Array("Red Dead Redemption", "The Last of Us");
var hardware = ["Monitor", "Teclado"]; // Array Literals

// Criando Array com tamanho diferente de zero mas sem nenhum item, qualquer esquema abaixo pode ser utilizado:
var coffes = new Array(5);
var country = Array(193);

// Estes produzem o mesmo efeito que:
var books = [];
books.length = 5;

// Criando um Array como propriedade de um objeto
var obj = {};
obj.prop = ["Mouse", "Fones"];

// O mesmo que
var obj_2 = { prop: ["Coooler", "NVME"] };

/* Se desejarmos iniciar um Array com um único elemento, e este elemento é um número, deveremos utlizar a sintaxe dos colchetes */
var listPecas = [35];

// Povoando um array
var employee = [];
employee[0] = "Casey Jhones";
employee[1] = "Phil Jhones";
employee[2] = "August West";

// Povoando um array logo quando o criamos
var myArray = new Array("Hello", "myVar", 3.14);
var fruits = ["Mongo", "Litter", "Lemon"];

//Referenciando os elementos do Array com
fruits[2]; // Return 'Lemon'

// Referenciando os elementos do Array com o operador do array
fruits["2"]; // Return 'Lemon'

// Compreendendo o comprimento
var cats = ["Dusty", "Misty", "Twiggy"];
// console.log(cats.length); // Comprimento do array = 3

cats.length = 2;
// console.log(cats); // Exibe "Dusty", "Misty", Twiggy foi removido

cats.length = 0;
// console.log(cats) // Nada é apresentado, o array está vazio

cats.length = 3;
// console.log(cats);  // [undefined, undefined, undefined]

// Iteração em Arrays
var colors = ["Red", "Green", "Blue"];

for (var i = 0; i < colors.length; i++) {
  // for (var contadora inicia em 0; enquanto contadora < comprimento do Array; incremente +1)
  // A cada volta do laço o valor do índice é exibido, isso para cada elemento do array
  // console.log(colors[i]);
}

// O método forEach() também permite um jeito de iterar sobre/em um array
colors.forEach(function (color) {
  //console.log(color)
});

// Alternativamente, podemos encurtar o código para o parâmetro forEach com Arrow functions ES6
//colors.forEach((color) => console.log(color));

// Valores não atribuídos (undefined) não são iterados no loop forEach()
var array = ['primeiro', 'segundo', , 'quarto'];
// array.forEach((itens) => console.log(itens) );

if( array[2] === undefined) {
  console.log('Undefined field')
  array[2] = undefined;  // Valores undefined somente são listados quando atribuídos manualmente no elemento
  //array.forEach((itens) => console.log(itens))
  
}

