function addItem() {
    const inputEl = document.getElementById('newItemText');
    const itemEl = document.getElementById('items');

    
    const newEl = document.createElement('li');

    
    newEl.textContent = inputEl.value;

     itemEl.appendChild(newItemElement);

    inputEl.value = '';
}
