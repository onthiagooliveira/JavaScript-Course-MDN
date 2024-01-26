/* 
  ? O que é JavaScript
  Javascript é uma linguagem de programação que permite implementar itens complexos em páginas web, 
  toda vez que uma página web faz mais do que simplesmente mostrar a você infomações estática, mostrando
  conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D, animados, etc.

  É a terceira camada do bolo das tecnologias padões da web.

  ? HTML
  É a linguagem de marcação que nós usamos para estruturar e dar significado para nosso conteúdo web.
  Por exemplo definindo parágrafos, cabeçalhos, tabelas de conteúdo, ou inserindo imagens e vídos na página.

  ? CSS
  É uma linguagem de regras de estilo que nós usamos para aplicar o estilo ao nosso conteúdo HTML.
  Por exemplo, definindo cores de fundo e fontes, posicionando nosso conteúdo em múltiplas colunas.

  ? JavaScript
  É uma linguagem de programação que nos permite criar conteúdo que se atualiza dinimicamente, controlar
  multimídias, imagens animadas, e tudo o mais que há de interessante.


  ? O que ele pode Realmente fazer?
  O núcleo da linguagem JavaScript consiste em alguns benefícios comuns da programação, que nos permite:

  - Armazenar conteúdo útil em variáveis (exemplo em exercícios: exrcícioIntroduction.html).
  
  - Operações com pedaços de texto (conhecidos como 'strings' em programação).(Como concatenar textos).

  - Executar o código em resposta a determinados eventos que ocorrem em uma página web (como um click do mouse).

  - E muito mais...


  ? A funcionalidade construída no topo do núcleo da linguagem JavaScript
  As APIs (Application Programming Interfaces - Interface de programação de Aplicativos) proveem superpoderes extras 
  para uarmos em nosso código JavaScript.

  APIs são conjuntos prontos de blocos de construção de código que permitem que um desenvolvedor implemente programas
  que seriam difíceis ou impossíveis de implementar. Eles fazem o mesmo para programação que os kits de móveis prontos
  para construção de casas, é muito mais fácil pegar painéis prontos e parafusá-los para formar uma estante de livros
  do que elaborar o design, sair e encontrar a madeira, cortar todos os painéis no tamanho e formato certos, encontrar
  parafusos de tamanho correto e depois montá-los para formar uma estante de livros.

  Elas geralmente se dividem em duas categorias:
  
  ? APIs de navegadores
  Já vem implementadas no naveagdor, e são capazes de expor dados do ambiente do computador, ou fazer coisas complexas e
  úteis. Por exemplo:

  - A API DOM (Document Object Model)
  Permite manipular HTML e CSS, criando, removendo e mudando HTML, aplicando dinamicamente novos estilos para a sua página
  etc. Toda vez que uma janela pop-up aparecer em uma página, ou algum novo conteúdo sendo exibido, isso é o DOM em ação.

  - A API de Geolocalização
  Recupera informações geográficas. É Assim que o Google Maps consegue encontrar sua localização e colocar em um mapa.

  - As APIs Canvas e WebGL 
  Permite criar gráficos 2D e 3D animados. 

  - APIs de aúdio e vídeo
  Como HTMLMediaElement e WebRTC nos permitem fazer coisas realmente interessantes com multimídia, tanto tocar música e vído
  em uma página da web, como capturar vídeos com a sua câmera e exibir no computador de outra pessoa.


  ? APIs de Terceiros
  Não estão implementadas no navegador automaticamente, você geralmente tem que pegar seu código e informações em algum lugar
  da web. Por exemplo.

  - A API do Twitter
  Permite fazer coisas como exibir seus últimos tweets no seu website.

  - A API do Google Maps
  Permite inserir mapas customizadas no seu site e outras diversas funcinalidades.



  ? O que JavaScript está fazendo na sua página web?
  Quando carregamos uma página da web em em unvagador, estamos executando seu código, o HTML, CSS e JavaScriptm dentro de um 
  ambiente de execução (a guia do navegador). Isso é como uma fábrica que pega a matéria prima (o código) e transforma em um
  produto (a página web).

  Um uso muito comum do JS é modificar dinamicamente HTML e CSS para atualizar uma interface do usuário, por meio da API do DOM.
  Observe que o código em seus documentos web geralmente é carregado e executadona ordem em que aparece na página. Se o JS carregar
  antes e tentar executar antes do carregamento HTML e CSS afetado, poderão ocorrer erros. (Veremos como contorná-los mais adiante).


  ? Ordem de execução do JavaScript
  Quando o navegador encontra um bloco de código JS, ele geralmente executa na ordem, decima para baixo.
  Isso significa que precisamos ter cuidado com a ordem na qual colocamos as coisas. 
  Por exemplo, levemos em consideração o exerciseIntroduction.html 

  const button = document.querySelector("button");

  button.addEventListener("click", atualizarNome);

  function atualizarNome() {
    let nome = prompt("Informe um novo nome:");
    button.textContent = "Jogador 1: " + nome;
  }

  Se invertermos a ordem das duas primeiras linhas de código, ele não funcionaria, receberíamos um erro no console do navegador
  TypeError: button is undefined. Isso significa que o objeto button não existe ainda, então ós não podemos adiconar um evenListener
  a ele.


  ? Código interpretado x Compilado
  JS é uma linguagem de programação leve e interpretada.

  O código é executado de cima para baixo e o resultado da execução do código é imediatamente retornado. Você não tem que transformar
  o código em algo diferente antes do navegador executá-lo.

  Linguagens compiladas, por outro lado, são transformadas (compiladas) em algo diferente antes que sejam executadas pelo computador. 
  Por exemplo, C/C++ são compiladas em linguagem Assembly, e depois são executadas pelo computador.

  Com JS, o navegador recebe o código JS em sua forma de texto original e executa o script a partir dele. Do ponto de vista técnico, 
  a maioria dos intérpretes modernos de JavaScript realmente usa a técnica chamada compilação jus-in-time para melhorar o desempenho;
  o código font JS é compilado em um formato binário mais rápido enquanto o script está sendo usado, para que possa ser executado o mais
  rápido possível. No entanto, o JS ainda é considerado uma linguagem interpretada pois a compilação é manipulada em tempo de execução e
  não antes. 
  
  ! ...Estratégias para o carregamento de scripts

*/
