function solve(word, text) {
   const words = text.toLowerCase().split(' ');
   const isInc = words.includes(word.toLowerCase())

   if (isInc) {
        return word;
   }

   return `${word} not found!`;
}