function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableElement = document.querySelectorAll('table.container tbody tr');
      const searchEl = document.getElementById('searchField');
      const searchText = searchEl.value;

      
      for (const tr of tableElement) {
         const tdEle = tr.querySelectorAll('td');
         
         let flag = false;

         tr.classList.remove('select');

         for (const td of tdEle) {
            if (td.textContent.includes(searchText)) {
               flag = true;
               break;
            }
         }

         if (flag) {
            tr.className = 'select';
         }
      }
      searchEl.value = '';
   }
}