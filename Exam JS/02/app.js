window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const nameInputElement = document.getElementById('name');
    const phoneNumberInputElement = document.getElementById('phone');
    const categoryInputElement = document.getElementById('category');
    const checkListElement = document.getElementById('check-list');
    const contactsElement = document.getElementById('contact-list');
    

    addButtonElement.addEventListener('click', () => {
        const name = nameInputElement.value;
        const phone = phoneNumberInputElement.value;
        const category = categoryInputElement.value;

        if (!name || !phone || !category) {
            return;
        
        } 

        const checkLiElement = createArticleElement(name, phone, category);
        checkListElement.appendChild(checkLiElement)

       

        nameInputElement.value = '';
        phoneNumberInputElement.value = '';
        categoryInputElement.value = '';

        const editButtonElement = checkLiElement.querySelector('.edit-btn');
        const saveButtonElement = checkLiElement.querySelector('.save-btn');

        editButtonElement.addEventListener('click', () => {
            
            nameInputElement.value = name;
            phoneNumberInputElement.value = phone;
            categoryInputElement.value = category;

            checkLiElement.remove();

           
        })

        saveButtonElement.addEventListener('click', () => {

            const checkEditButtonsElement = checkLiElement.querySelector('.edit-btn');
            checkEditButtonsElement.remove();

            const checkSaveButtonsElement = checkLiElement.querySelector('.save-btn');
            checkSaveButtonsElement.remove();

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('del-btn');
            

            checkLiElement.appendChild(deleteButtonElement);
            contactsElement.appendChild(checkLiElement);

            deleteButtonElement.addEventListener('click', () => {
                contactsElement.remove()
        
            });

        })
    })

    
    
    function createArticleElement (name, phone, category) {
        const pNameElement = document.createElement('p');
        pNameElement.textContent = `name:${name}`;

        const pPhoneElement = document.createElement('p');
        pPhoneElement.textContent = `phone:${phone}`;

        const pCategoryElement = document.createElement('p');
        pCategoryElement.textContent = `category:${category}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pNameElement);
        articleElement.appendChild(pPhoneElement);
        articleElement.appendChild(pCategoryElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');
        

        const saveButtonElement = document.createElement('button');
        saveButtonElement.classList.add('save-btn');
       

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(saveButtonElement);

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsDivElement);    
           

    return liElement;
    }
    
  }

  
