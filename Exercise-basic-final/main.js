window.onload = () => {
  
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

randomize.addEventListener('click', checkName);
}

const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:,
they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised —
:insertx: weighs 300 pounds, and it was a hot day.`;

const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const inserty = ['The soup kitchen', 'Disneyland', 'the White House'];
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function randomValueFromArray (array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random]
  
}

const checkName = () => {
  let verifyName = document.querySelector('#customname').value;
  const errorMessage = document.querySelector('#message-error');
  
  // Esconde a mensagem de erro inicialmente
  errorMessage.style.display = 'none'

  // verifica se o campo nome está preenchido
  if(!verifyName) {
    errorMessage.textContent = 'Insira um nome válido';
     errorMessage.style.display = 'block'; // Exibe a mensagem de erro

    setTimeout(() => {
      errorMessage.style.display = 'none'; // Oculta a mensagem de erro
    }, 3500);
  } 
  else {
    const nameChecked  = verifyName;
    
    let newHistory = storyText;
    let xItem =  randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);
    
    newHistory = newHistory.replace(':insertx:', xItem);
    newHistory = newHistory.replace(':inserty:', yItem);
    newHistory = newHistory.replace(':insertz:', zItem);
    newHistory = newHistory.replace(':insertx:', xItem);
    newHistory = newHistory.replace('Bob', nameChecked);

  }

  const language = () => {
    const usLang = document.querySelector('#us');
    if (usLang.checked) {
      const weight = Math.round(300);
      const temperature = Math.round(94);
      story.textContent = "";
      story.style.visibility = 'visible';
    } else {
      const ptLang = document.querySelector('#pt');
    };
  };


    

  
 


  
  
}




  



