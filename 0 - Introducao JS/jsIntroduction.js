/* 
  ? O que é JavaScript
  Javascript é uma linguagem de programação que permite implementar itens complexos em páginas web, toda 
  vez que uma página web faz mais do que simplesmente mostrar a você infomações estática, mostrando
  conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D, animados, etc.

  É a terceira camada do bolo das tecnologias padões da web.

  ? HTML
  É a linguagem de marcação que nós usamos para estruturar e dar significado para nosso conteúdo web.
  Por exemplo definindo parágrafos, cabeçalhos, tabelas de conteúdo, ou inserindo imagens e vídeos na página.

  ? CSS
  É uma linguagem de regras de estilo que nós usamos para aplicar o estilo ao nosso conteúdo HTML.
  Por exemplo, definindo cores de fundo e fontes, posicionando nosso conteúdo em múltiplas colunas.

  ? JavaScript
  É uma linguagem de programação que nos permite criar conteúdo que se atualiza dinamicamente, controlar
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
  Já vem implementadas no navegador, e são capazes de expor dados do ambiente do computador, ou fazer coisas complexas
  e úteis. Por exemplo:

  - A API DOM (Document Object Model)
  Permite manipular HTML e CSS, criando, removendo e mudando HTML, aplicando dinamicamente novos estilos para a sua página
  etc. Toda vez que uma janela pop-up aparecer em uma página, ou algum novo conteúdo sendo exibido, isso é o DOM em ação.

  - A API de Geolocalização
  Recupera informações geográficas. É Assim que o Google Maps consegue encontrar sua localização e colocar em um mapa.

  - As APIs Canvas e WebGL 
  Permite criar gráficos 2D e 3D animados. 

  - APIs de aúdio e vídeo
  Como HTMLMediaElement e WebRTC nos permitem fazer coisas realmente interessantes com multimídia, tanto tocar música e 
  vídeos em uma página da web, como capturar vídeos com a sua câmera e exibir no computador de outra pessoa.


  ? APIs de Terceiros
  Não estão implementadas no navegador automaticamente, você geralmente tem que pegar seu código e informações em algum lugar
  da web. Por exemplo.

  - A API do Twitter
  Permite fazer coisas como exibir seus últimos tweets no seu website.

  - A API do Google Maps
  Permite inserir mapas customizadas no seu site e outras diversas funcinalidades.



  ? O que JavaScript está fazendo na sua página web?
  Quando carregamos uma página da web em um naveagador, estamos executando seu código, o HTML, CSS e JavaScript dentro de um 
  ambiente de execução (a guia do navegador). Isso é como uma fábrica que pega a matéria prima (o código) e transforma em um
  produto (a página web).

  Um uso muito comum do JS é modificar dinamicamente HTML e CSS para atualizar uma interface do usuário, por meio da API do DOM.
  Observe que o código em seus documentos web geralmente é carregado e executado na ordem em que aparece na página. Se o JS 
  carregar antes e tentar executar antes do carregamento HTML e CSS afetado, poderão ocorrer erros. (Veremos como contorná-los
  mais adiante).


  ? Ordem de execução do JavaScript
  Quando o navegador encontra um bloco de código JS, ele geralmente executa na ordem, de cima para baixo.
  Isso significa que precisamos ter cuidado com a ordem na qual colocamos as coisas. 
  Por exemplo, levemos em consideração o exerciseIntroduction.html 

  const button = document.querySelector("button");

  button.addEventListener("click", atualizarNome);

  function atualizarNome() {
    let nome = prompt("Informe um novo nome:");
    button.textContent = "Jogador 1: " + nome;
  }

  Se invertermos a ordem das duas primeiras linhas de código, ele não funcionaria, receberíamos um erro no console do navegador
  TypeError: button is undefined. Isso significa que o objeto button não existe ainda, então não podemos adiconar um EventListener
  a ele.


  ? Código interpretado x Compilado
  JS é uma linguagem de programação leve e interpretada.

  O código é executado de cima para baixo e o resultado da execução do código é imediatamente retornado. Você não tem que transformar
  o código em algo diferente antes do navegador executá-lo.

  Linguagens compiladas, por outro lado, são transformadas (compiladas) em algo diferente antes que sejam executadas pelo computador. 
  Por exemplo, C/C++ são compiladas em linguagem Assembly, e depois são executadas pelo computador.

  Com JS, o navegador recebe o código JS em sua forma de texto original e executa o script a partir dele. Do ponto de vista técnico, 
  a maioria dos intérpretes modernos de JavaScript realmente usa a técnica chamada compilação jus-in-time para melhorar o desempenho;
  o código font JS é compilado em um formato binário mais rápido enquanto o script está sendo usado, para que possa ser executado o 
  mais rápido possível. No entanto, o JS ainda é considerado uma linguagem interpretada pois a compilação é manipulada em tempo de 
  execução e não antes. 
  

  ? Estratégias para o carregamento de scripts
  Há um considerável número de problemas envolvendo o carregamento de scripts na ordem correta.

  Um problema comum é que todo o HTML de uma página é carregado na ordem em que ele aparece. Se você estiver usando JavaScript para 
  manipular alguns elementos da página (Mais precisamente o DOM), seu código não irá funcionar caso o JS for carregado e executado antes
  mesmo dos elementos HTML estarem disponíveis.

  Em alguns exemplos que vimos, tanto nos scripts internos ou externos, o JS é carregado e acionado dentro do cabeçalho do documento,
  antes do corpo da página ser completamente carregado. Isso poderá causar algum erro. Assim, temos algumas soluções para isso.

  - No exemplo interno:

    document.addEventListner("DOMContentLoaded", function () {...})

    Isso é um event listener (Ouvidor de eventos), que ouve e aguarda o disparo do evento "DOMContentLoaded" vindo do browser, evento
    este que significa que o corpo do HTML está completamente carregado e pronto. O código JS que estiver dentro desse bloco não será 
    executado até que o evento seja disparado, portanto, o erro será evitado (Aprenderemos sobre eventos mais adiante).


  - No exemplo externo, vimos um recurso moderno do JS para resolver esse problema.
    Trata-se do atributo defer, que informa ao browser para continuar renderizando o conteúdo HTML uma vez que a tag <script> foi atingida.
    
    *<script src="script.js" defer></script>

    Neste caso, ambos script e HTML irão carregar de forma simultânea e o código irá funcionar.
  

    Nota: No caso externo, nós não precisamos utilizar o evento DOMContentLoaded porque o atributo defer resolve o nosso problema.
    Nós não utilizamos defer como solução para os exemplos internos pois defer funciona apenas com scripts externos.

    Uma solução à moda antiga para esse problema era colocar o elemento script bem no final do body da página (antes da tag </body).
    Com isso, os scripts iriam carregar logo após todo conteúdo HTML. O problema com esse tipo de solução é que o carregamento/renderização 
    do script seria completamente bloqueado até que todo o conteúdo HTML fosse analisado. Em sites de maior escala, com muitos scripts,
    essa solução causaria um grande problema de performance e deixaria o site lento.



    ? async e defer

    Atualmente, há dois recursos modernos que podemos usar para evitar o problema com o bloqueio de scripts, async e defer.

    Os scripts que são carregados usando o atributo async, irão baixar o script sem bloquear a renderização da página e irão executar imediatamente
    após o script terminar de ser disponibilizado. 
    
    - Nesse modo você não tem garantia nenhuma que os scripts carregados irão rodar em uma ordem específica, mas saberá que dessa forma eles não irão
    impedir o carregamento do restante da página.

    - O melhor uso para o async é quando os scripts de uma página rodam de forma independentes entre si e também não dependem de nenhum outro script.
    
      Por exemplo se tivermos os seguintes elementos script:

        <script async src="js/vendor/jquery.js"></script>

        <script async src="js/script2.js"></script>

        <script async src="js/script3.js"></script>

    Você não pode garantir que o script jquery.js carregará antes ou depois do script2.js e script3.js. Nesse caso, se alguma função desses scripts
    dependerem de algo vindo do jquery, ele produzirá um erro pois o jquery ainda não foi definido/carregado quando os scripts executaram essa função.

    - async deve ser usado quando houver muitos scripts rodando no background, e você precisa que estejam disponíveis o mais rápido possível.
    Por exemplo, talvez você tenha muitos arquivos de dados de um jogo para carregar que serão necessários assim que o jogo iniciar, mas por enquanto,
    você só quer entrar e ver a tela de carregamento, a do título do jogo e o lobby sem ser bloqueado pelo carregamento desses scripts.


    Scripts que são carregados utilizando o atributo defer irão rodar exatamente na ordem em que aparecem na página e serão executados assim que o script 
    e o conteúdo for baixado.

      <script defer src="js/vendor/jquery.js"></script>

      <script defer src="js/script2.js"></script>

      <script defer src="js/script3.js"></script>

    - Todos os scripts com o atributo defer irão carregar na ordem que aparecem na página. Aqui podemos ter a certeza que o script jquery.js irá carregar
    antes do script2 e script3 e o script2.js irá carregar antes do script3.js, Os scripts irão rodar sem que antes todo o conteúdo da página seja carregado,
    que no caso, é muito útil se os seus scripts dependem de um DOM completamente disponibilizado em tela (por exemplo scripts que modificam um elemento).

    
    * Resumindo
    
    - async e defer instruem o browser a baixar os scripts num thread (processo) à parte, enquanto o resto da página (o DOM, etc) está sendo baixado e 
    disponibilizado de forma não bloqueante.

    - Se os seus scripts precisam rodar imediatamente, sem que dependam de outros para serem executados, use async.

    - Se seus scripts dependem de outros scripts ou do DOM completamente disponível em tela, carregue-os usando defer e que coloque os elementos <script>
    na ordem exata que deseja que sejam carregados.
    

*/
