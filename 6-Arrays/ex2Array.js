/* Top 5 Buscadores 

  Desenvolvido o site de busca, com uma caixa de busca. A idéia é que quando termos são digitados na caixa
  de busca, os 5 principais termos de busca anteriores sejam mostrados na lista. ()

  Quando o número passar de 5,  o último termo começa sendo deletado. 
  A cada vez um novo termo é adicionado ao topo, então os 5 termos anteriores são sempre mostrados.

  1 - Adicione o valor digitado atual na busca ao começo da array. 

  2 - Adicione uma linha abaixo do comentário // NUmber2 que remova o último valor no fim da array.

*/

// Declarando e armazenando as variáveis de manipulação do HTML
let searchInput = document.querySelector('#search-input');
let buttonSubmit = document.querySelector('#btn-submit');
let searchedParameters = document.querySelector('.searched-parameters ul');

buttonSubmit.addEventListener('click', search);
searchedParameters.innerHTML = '';

// Declarando a array que armazenará a lista de valores buscados
let  searchList = [];

function search () {
  
  // Verifica se o valor do campo de pesquisa (searchInput) não está vazio
  if (searchInput !== '') {
  
    // Adiciona o valor do campor de pesquisa ao INÍCIO do array searchList
    searchList.push(searchInput.value);

    // Limpando o conteúdo da div com id seachedParameters para que armazene o item atual
    searchedParameters.innerHTML = '';
    
    searchInput.value = '';
    

    // Percorre os elementos da array
    for (var i = 0; i < searchList.length; i++) {

      // Obtém o texto do item atual da array
      itemText = searchList[i];

      // Cria um elemento <li> (item de lista) no DOM
      var listItem = document.createElement('li');
      
      //  Define o conteúdo de texto do elemento <li> como o texto do item
      listItem.textContent = itemText;

      // Adiciona o elemento <li> à div de id searchedParameters
      searchedParameters.appendChild(listItem);

      // Estiliza a div searchedParameters e o item da lista
      searchedParameters.style.opacity = '1'; // Ativa a visualização da div
      listItem.style.paddingRight = '0.7rem';
      listItem.style.cursor = 'pointer';
    }

    //  Remove o ÚLTIMO item do array searchList se quantidade de itens for maior ou igual a 5
    if (searchList.length >= 5) {
      searchList.shift();
    }
  }
}



