function search() {
   const townsList = document.getElementById('towns');
   const textElement = document.getElementById('searchText').value;
   const resultElement = document.getElementById('result');

   let count = 0
   const townElements = Array.from(townsList.children);
   for (const townElement of townElements) {
      if (townElement.textContent.toLowerCase().includes(textElement.toLowerCase())) {
         townElement.style.textDecoration = 'underline';
         townElement.style.fontWeight = 'bold';
         count++;
      }
      
   }
   resultElement.textContent = `${count} matches found`
}
