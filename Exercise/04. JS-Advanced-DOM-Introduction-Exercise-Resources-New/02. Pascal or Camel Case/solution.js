function solve() {
  let firstInput = document.getElementById('text').value;
  let secondInput = document.getElementById('naming-convention').value;
  let fullWord = firstInput.split(' ').map((word) => word.toLowerCase());
  let firstWord = fullWord.shift();
  let result = firstWord;

  if (secondInput === 'Pascal Case') {   
    result = firstWord[0].toUpperCase() + firstWord.slice(1);
  } else if (secondInput !== 'Camel Case') {
    result = 'Error!'
  }

  if (result !== 'Error!') {
    for (let word of fullWord) {
      word = word[0].toUpperCase() + word.slice(1);
      result += word;
    }
  }
  
  let spanElement = document.getElementById('result');
  spanElement.textContent = result;

}