// As declarações à seguir criam Arrays equivalentes
var bandas = new Array ('Lynyrd Skynyrd', 'Black Sabah');
var games = Array ('Red Dead Redemption', 'The Last of Us');
var hardware = ['Monitor', 'Teclado'];


// Criando Array com tamanho diferente de zero mas sem nenhum item, qualquer esquema abaixo pode ser utilizado:
var coffes = new Array(5);
var  country = Array(193)

// Estes produzem o mesmo efeito que:
var books = [];
books.length = 5;


// Criando um Array como propriedade de um objeto
var obj = {};
obj.prop = ['Mouse', 'Fones'];

// O mesmo que
var obj_2 = {prop: ['Coooler', 'NVME']};


/* Se desejarmos iniciar um Array com um único elemento, e este elemento é um número, deveremos utlizar a sintaxe dos colchetes */
var listPecas = [35];

// Povoando um array
