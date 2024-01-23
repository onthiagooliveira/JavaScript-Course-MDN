/*
  ? Introdução ao DOM
  Em seu sentido original, o "DOM", O document Object Model, é uma API para acessar e manipular
  documentos (em partcular, HTML e XML). Nesta especificação, o termo "documento" é usado para
  qualquer recurso baseado em marcação, variando de documentos estáticos curtos a ensaios longos
  ou relatórios com multimídia avançada, bem como para interativos, de pleno direito Aplicativos.

  o DOM é uma interface de programação para os documentos html e xml.
  Representa a página de forma que os programas possam alterar a estrutura do documento, alterar
  o estilo e conteúdo. 
  
  O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem
  se conectar à página.

  Uma página Web é um documento. 
  Este documento pode ser exibido na janela do navegador ou como a fonte HTML.
  Mas é o mesmo documento nos dois casos.
  
  O DOM representa o mesmo documento para que possa ser manipulado. O DOM é uma representação 
  orientada a objetos da página web, que pode ser modificada com uma linguagem de script como
  JavaScript.

  Cada documento é representado como uma arvore de nós (Nós são objetos que implementam). 
  Alguns dos nós de uma árvore podem ter filhos, enquanto outros são sempre folhas.

  * Para ilustrar, considere este documento HTML:

  <!DOCTYPE html>
  <html class=e>
    <head>
      <title>Aliens?</title>
    </head>
    <body>
      Why yes.
    </body>
  </html>

 * Ele é representado da seguinte forma:

  Documento
    Tipo de documento: html
    Element: classe="e"html
      Element: head
        Element: title
          Text: Alienígenas?
    Text: ⏎␣
    Element: body
      Text: Por que sim.⏎


  ! Documentação oficial:
    https://dom.spec.whatwg.org/



  ? DOM e JavaScript
  O DOM não é uma linguagem de programação, mas sem ela, a linguagem JS não teria nehum modelo ou
  noção de páginas da web, documentos HTML, documentos XML e suas partes componentes (por ex. elementos).

  Cada elemento de um documento, o documento como um todo, o cabeçalho, as tabelas, do documento, os
  cabeçalhos da tabela, o texto nas cédulas da tabela, faz parte do modelo de objeto do documento desse 
  documento, para que todos possam ser acessados e manipulados usando o método DOM uma e uma linguafem de 
  script como JavaScript.

  No início JavaScript e o DOM estavam fortemente interligados, mas eventualmente, evoluíram para entidades
  separadas. 

  * O conteúdo da página é armazenado no DOM e pode ser acessado e manipulado via JavaScript, para que possamos
  escrever esta equação aproximada:
  
  API (página HTML ou XML) = DOM + JS (linguagem de script)

  O DOM foi projetado para ser independente de qualquer linguagem de programação específica, disponibilizando
  a representação estrutural do documento a partir de uma única API consistente. Embora nos concentremos exclu-
  -sivamente no JavaScript nesta documentação, as implementações do DOM poder ser construídas para qualquer 
  idioma, como Pyhton etc.


  ? Acessando o DOM
  Você não precisa fazer nada de especial para começar a usar o DOM. 
  Navegadores difentes têm implementações diferentes do DOM e essas implementações exibem graus variados de 
  conformidade com o padrão DOM real, mas todo navegador usa um modelo de objeto de documento para tornar as 
  páginas da web acessíveis via JavaScript.

*/
