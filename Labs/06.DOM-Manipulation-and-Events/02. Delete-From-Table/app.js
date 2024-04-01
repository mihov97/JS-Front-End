function deleteByEmail() {
    const inputEmail = document.querySelector('input[name=email]');
    const resultEl = document.getElementById('result');
    const trElements = document.querySelectorAll('table#customers tbody tr')

    
    const resultTrEl = Array
        .from(trElements)
        .find(trElement => trElement.children[1].textContent.includes(inputEmail.value))

    if (resultTrEl) {
       
        resultTrEl.remove();
        
        
        resultEl.textContent = 'Deleted.';
    } else {
        resultEl.textContent = 'Not found.';
    }

   
    inputEmailElement.value = '';
}

