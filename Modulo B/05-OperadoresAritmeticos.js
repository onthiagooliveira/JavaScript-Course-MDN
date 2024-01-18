/*
  ? JavaScript possui uma série de operadores, sendo eles: 
   Aritméticos, 
   Atribuição, 
   Relacionais, 
   Lógicos, 
   Ternário,

  ? Operadores Aritméticos 
  São os operadores que utilizamos para fazer as operações aritméticas básicas
  
  + | => Adição
  - | => Subtração
  * | => Multiplicação
  / | => Divisão Inteira
  % | => Resto da divisão
  **| => Exponenciação   

  ? Precedência de Operadores
  Algumas operações serão aplciadas antes de outras quando calcularmos o resultado de uma soma (referida em programação
  como uma expressão). A precedência de operadores em JS é semelhante ao ensinado nas aulas de matemática: 
  * Exponenciação é realziada primeiro,  --Multiplicação e divisão serão realizadas em sequência, depois a adição e subtração
  (A soma é sempre realizada da esqueda para a direita.

  Se quisermos substituir a precedência do operador, podemos colocar parênteses em volta das partes que  desejarmos serem 
  explicitamente tratadas primeiro

  ? Operadores de Incremento e Decremento
  Às vezes será necessário adcionar ou subtrair, repetidamente, um valor de uma variável numérica. Convenientemente isto pode
  ser feito usando os operadores de incremento ++ e decremento --.

  - Regras de uso:
  Não podemos aplicá-los diretamente a um número, estamos atruibuindo a variável um novo valor atualizado, não operando o próprio
  valor. Ou seja 3++ por exemplo, retornará um erro.

  O modo correto de incrementar é: 
  var numero1 = 4;
  numero1++;  (teste no console com incremente e decremento)  

  Quando fizermos isso, veremos um valor de 4 retornado, isso ocorre porque o navegador retorna o valor atual, e em seguida, 
  incrementa a variável. Você pode ver que ele foi incrementado se você retornar o valor da variável novamente.
  
  ! Nota: Podemos fazer o navegador fazer o contrário, incrementar/decrementar a variável e depois retornar o valor, colocando o 
  !operador no início da variável ao invés do final. Tente os exemplos acima novamente, --numero1 e ++numero1.

  
  ? Operadores de Atribuição
  Operadores de atribuição são os que atribuem um valor à uma variável.
  Nós já usamos o básic, =, muitas vezes, simplesmente atribuindo à variável do lado esquerdo e o valor indicado do lado direito do
  operador.

  Mas existem alguns tipos mais complexos, que fornecem atalhos úteis para manter seu código mais puro e mais eficiente.

  += | => Atribuição de adição  (Adiciona o valor à direita ao valor da variável à esquerda, e em seguida, retorna o novo valor da variável)
  -= | => Atribuição de subtração  (Subtrai o valor à direita do valor da variável à esquerda e retorna o novo valor da variável)
  *= | => Atribuição de multiplicação  (Multiplica o valor da variável à esquerda pelo valor à direita e retonar o novo valor da variável)
  /= | => Atribuição de divisão  (Divide o valor da variável à esquerda pelo valor à direita e retorna o novo valor da variável)
  
*/

