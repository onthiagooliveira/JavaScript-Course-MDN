// Declarando as variáveis e atribuindo oos valores para manipulação
const buttonSubmit = document.querySelector('#btn-submit');

// Capturando o click do usuário 
buttonSubmit.addEventListener('click', validatingNumber);

// Função que gera o número enigmático
function generateRandomNumber () {
  const randomNumber = Math.round((Math.random () * 3));
  return randomNumber;
}

//Função que verifica se o input do usuário é um número válido
function  validatingNumber () {
  let userGuess = document.querySelector('#user-guess');
  userGuess = Number(userGuess.value);

  // Verifica se o valor é um número válido
  if (Number.isNaN(userGuess)) {
    console.log('O valor digitado não é um número válido.');
  }
  else {
    /* Sendo um número válido, 
       Então invoca a função que gera o número aleatório e armazena o valor gerado  */
      const randomNumberGenerate = generateRandomNumber();
      console.log(randomNumberGenerate);

    // Se o palpite do usuário for igual ao número secreto gerado, o usuário acertpu.
    if (userGuess === randomNumberGenerate) {
      console.log(`Você acertou! ${randomNumberGenerate}`);
      
    } else { // Se não, o usuário errou
      console.log(`Você errou! Seu palpite : ${userGuess}, \nO número secreto é ${randomNumberGenerate};`)
    }
  }
}

validatingNumber;


