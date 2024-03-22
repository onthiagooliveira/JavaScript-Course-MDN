/* Aprendizado Ativo

  Exercício : 
  Imprimindo nomes de produtos e preços em uma fatura, então totalizando os preços e imprindindo eles ao final.

  1 | Abaixo do comentário // Number 1 está um número de strings, cada uma contendo um nome de produto e preço separado por uma
  vírgula. Nós gostaríamos que você colocasse eles dentro de uma array chamada products.

  2 | Elabore um laço que percorra a array, com um teste condicional que termine o laço quando o i for menor que o tamanho da array 
  products.

  3 | Escreva uma linha de código que divide o item da array (name:price) em dois itens separados, um contendo
  somente o nome e outro só com o preço. 

  4 | Como parte da linha de código acima, você também quer converter o preço de string para número. 

  5 | Defina um avariável chamada total, atribuída o valor 0.
  Dentro do loop (abaixo // number 4), escreva uma linha que adicione o preço atual ao total em cada iteração do laço, então ao final
  do código o preço total é impresso na fatura.

  6 | A variável itemText seja igual a "nome do item atual - $ preço do item atual", por exemplo "Shoes - $23.99" em cada caso,
  então a informação correta para cada item é impressa na fatura.

*/

// Declarando as variáveis para manipulação do html
let list = document.querySelector('.output ul');
let totalBox = document.querySelector('.output p');

list.innerHTML = '';
totalBox.textContent = ''

/* Number 1 
    'Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers: 31.99',
    'Shoes:23.99';
*/

// Step 1 
let products = [];
products.push(
  'Cuecas:6.99',
  'Meias:5.99',
  'Camisetas:14.99',
  'Calças:31.99',
  'Tênis:23.99'  
);

var total = 0;

// Step 2
for (var i = 0; i < products.length; i++) {
  //Step 3
  let productName = products[i].split(':');
  let productValue = Number(productName[1]); // Step 4

  // Step 5
  total += productValue;

  let itemText = `${productName[0]} - R$ ${productValue}`;
  console.log(itemText)
  
  let listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);

  totalBox.textContent = `Total R$ ${total.toFixed(2)}`;  
}



