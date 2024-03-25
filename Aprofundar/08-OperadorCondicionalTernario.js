/*
  ? Operador Condicional Ternário

  O Operador condicional (ternário) é o único operador JavaScript que possui três operandos. 
  * Este operador é frequentemente usado como um atalho para a instrução if.

  ? Sintaxe 
  condiiton ? expre1 : expre2 
  
  ou melhor explicando...

  condição ? verdadeiro : falso
  

  ? Parâmetros
  Uma expresão que é avaliada como true ou false.
  Exemplo....  10 >= 2 

  expre1, expre2
  Expressões com valores de qualquer tipo.

  ? Funcionamento
  Se condiiton é true, o operador retornará o valor de expre1; se não, ele retorna o valor de expre2.
  Exemplo prático: 1

  Também são possíveis múltiplas avaliações ternárias. (O operaor condiconal é associativo a direita)
  Exemplo prático firstChek.
  Exemplo 2 multiplas avaliações

  Você também pode fazer mais do que uma única operação em cada caso, separando-os por vírgula,
  Exemplo stop.
  Exemplo 3 

  ! Este operador é indicado como um atalho para instruções if simples.

*/


// Exemplo 1
var biggerThanPI = Math.PI > 4 ? "Yes" : "No";
console.log(biggerThanPI);



// Exemplo 2 multiplas avaliações
var firstChek = false,
 secondCheck = false,
 access = firstChek ? "Access denied" : secondCheck ? "Access denied" : "Access granted"; 
 console.log(access);



 // Exemplo 3 | + Operações por caso 
 var stop = false,
  age = 19;
  age > 18
  ? (console.log("OK, you can go."), console.log("continue.html"))
  : ((stop = true), console.log("Sorry, you are much too young!"));
