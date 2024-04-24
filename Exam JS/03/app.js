function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/games/'
 
    let buttonLoadGames = document.getElementById('load-games')
    buttonLoadGames.addEventListener('click', loadingGames)
    let listOfGamesElement = document.getElementById('games-list')
 
    let addGameButton = document.getElementById('add-game')
    addGameButton.addEventListener('click', newGameAdding)
    
    let editingGameButt = document.getElementById('edit-game')
 
    let nameInput = document.getElementById('g-name')
    let typeInput = document.getElementById('type')
    let playersInput = document.getElementById('players')
 
    async function loadingGames(event) {
        let gamesResponse = await fetch(baseUrl)
        let games = await gamesResponse.json()
 
        listOfGamesElement.innerHTML = ''
 
        for (let game of Object.values(games)) {
            let firstDiv = document.createElement('div')
            firstDiv.className = 'board-game'
 
            
            let secondDiv = document.createElement('div')
            secondDiv.className = 'content'
 
            let paraElement = document.createElement('p')
            let nameGame = game.name
            paraElement.textContent = nameGame
 
            let paraSecElement = document.createElement('p')
            let players = game.players
            paraSecElement.textContent = players
 
            let paraThirdElement = document.createElement('p')
            let type = game.type
            paraThirdElement.textContent = type
 
            secondDiv.appendChild(paraElement)
            secondDiv.appendChild(paraSecElement)
            secondDiv.appendChild(paraThirdElement)
 
           
            let buttonContDiv = document.createElement('div')
            buttonContDiv.className = 'buttons-container'
            
            let changeButtonElement = document.createElement('button')
            changeButtonElement.className = 'change-btn'
            
            changeButtonElement.textContent = 'Change'
            changeButtonElement.addEventListener('click', gameChangeF)
 
            let deleteButtonElement = document.createElement('button')
            deleteButtonElement.className = 'delete-btn'
            
            deleteButtonElement.textContent = 'Delete'
            deleteButtonElement.addEventListener('click', gameDeleteF)
 
            buttonContDiv.appendChild(changeButtonElement)
            buttonContDiv.appendChild(deleteButtonElement)
 
           
            firstDiv.appendChild(secondDiv)
            
            firstDiv.appendChild(buttonContDiv)
 
            listOfGamesElement.appendChild(firstDiv)
            
            async function gameChangeF(event) {
                firstDiv.remove()
 
                nameInput.value = nameGame
                typeInput.value = type
                playersInput.value = players
 
                editingGameButt.disabled = false
                editingGameButt.addEventListener('click', gameEdit)
                
                
                addGameButton.disabled = true
                
                async function gameEdit(event) {
                    let gamesForEditing = {
                        name: nameInput.value,
                        type: typeInput.value,
                        players: playersInput.value,
                        '_id': game._id
                    }
 
                    await fetch(baseUrl + game._id, {
                        method: 'PUT',
                        body: JSON.stringify(gamesForEditing)
                    })
 
                    editingGameButt.disabled = true
                    
                    addGameButton.disabled = false
 
                    loadingGames()
 
                    nameInput.value = ''
                    typeInput.value = ''
                    playersInput.value = ''
                }
            }
 
            async function gameDeleteF(event) {
                await fetch(baseUrl + game._id, {
                    method: 'DELETE'
                })
 
                loadingGames()
            }
        }
    }
 
    async function newGameAdding(event) {
        let newGame = {
            'name': nameInput.value,
            'type': typeInput.value,
            'players': playersInput.value
        }
 
        await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(newGame)
        })
 
        loadingGames()
 
        nameInput.value = ''
        typeInput.value = ''
        playersInput.value = ''
    }
}
 
solve()