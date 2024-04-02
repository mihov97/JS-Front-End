function lockedProfile() {
    buttonsEl = document.querySelectorAll('button')

    Array.from(buttonsEl).forEach(button => {
        button.addEventListener('click', (e) => {
            const parentEl = button.parentElement;
            const lockEl = parentEl.querySelector('input[value=lock]');

            if (button.textContent === 'Show more') {
                if(lockEl.checked === false) {
                    button.parentElement.querySelector('[id*=HiddenFields]').style.display = 'block';
                    button.textContent = 'Hide it';
                }
            } else {
                if (lockEl.checked === false) {
                    button.parentElement.querySelector('[id*=HiddenFields]').style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    });

}

