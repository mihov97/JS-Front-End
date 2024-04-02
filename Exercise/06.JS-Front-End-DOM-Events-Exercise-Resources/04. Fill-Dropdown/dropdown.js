function addItem() {
    const inputElText = document.getElementById('newItemText');
    const inputElValue = document.getElementById('newItemValue');
    const inputElMenu = document.getElementById('menu');

    const newEl = document.createElement('option');
    newEl.value = inputElValue.value;
    newEl.textContent = inputElText.value;

    inputElMenu.appendChild(newEl);

    inputElText.value = '';
    inputElValue.value = '';
}