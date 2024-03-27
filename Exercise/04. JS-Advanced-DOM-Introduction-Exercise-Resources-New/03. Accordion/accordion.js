function toggle() {
    const extraInfo = document.getElementById('extra');
    const toggleElement = document.querySelector('.head span.button');

    const currentButtonText = toggleElement.textContent;
    if (currentButtonText === 'More') {
        extraInfo.style.display = 'block';
        toggleElement.textContent = 'Less'
    } else {
        extraInfo.style.display = 'none';
        toggleElement.textContent = 'More'
    }

    toggleElement.style.display = 'block';

}