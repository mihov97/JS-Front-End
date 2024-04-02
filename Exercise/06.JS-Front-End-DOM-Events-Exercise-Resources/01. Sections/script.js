function create(words) {
   maindivEl = document.getElementById('content');

   for (const word of words) {
      const pEl = document.createElement('p');
      const divEl = document.createElement('div');

      pEl.textContent = word;
      pEl.style.display = 'none';

      divEl.appendChild(pEl);

      divEl.addEventListener('click', (e) => {
         pEl.style.display = 'block';
      });

      maindivEl.appendChild(divEl);
   }

}