function findOccurrences(text, word) {
    
    let wordsArray = text.split(' ')
    let occurrences = 0

    for (let wordFromArray of wordsArray) {
        if (wordFromArray === word ) {
            occurrences += 1
        }
    }
 console.log(occurrences)
}
