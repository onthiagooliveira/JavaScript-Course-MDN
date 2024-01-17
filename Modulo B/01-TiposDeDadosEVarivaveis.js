/* Declaração de Variáveis

  Variáveis são espaços que reservamos na memória do computador para arzenar dados, à estes espaços damos um 
  identificador (nome da variável) e atribuímos o valor que queremos armazenar.

  Para declaramos uma variável em JS, utlizamos as palavras chave var, let e const.

  var | Com essa keyword a variável pode ser acessada de qualquer lugar do documento. 

  let | Com essa keyword a variável fica acessível apenas em nível de bloco. 
  Exemplo { let age = 10, console.log(age) } => age só pde ser acessado dentro desse bloco, gerando erro
  se tentarmos acessá-lo externamente.

  const | Utilizamos esa keyword para declaramos dados que serão permanentes, nunca serão alterados, como
  o valor de pi por exemplo. pi = 3,14;


  O nome de uma variável nós apelidamos como identificador, um identificador deve seguir alguns padrões:

  - Podem começar com letra, $ ou undescore.
  - Não podem começar com números.
  - É possível usar acentos e Símbolos.
  - Não podem conter espaços.
  - Não podem ser palavras reservadas da linguagem.

  Dicas para nomear identificadores 
  - JavaScript é case sensitive, diferencia letras maiúsculas de minúsculas.
  - Utilize nomes coerentes para as variáveis.


  Obs. Para atribuirmos valores do tipo String podemos utilizar 'aspas simples', "aspas duplas",
  e `crase`, porém JS as entende de modos diferentes, veremos à diante.


  Data Types em JavaScript, os primordiais são:

  - number
    A linguagem não separa inteiros ou flutuantes(reais), trata ambos como number

  - string 
    Cadeias de caracteres.

   - booleans
     Valores lógicos, true or false
*/

let salario = 1460.32;
console.log(salario.toLocaleString("pt-BR", {style:"currency", currency:"BRL"}))