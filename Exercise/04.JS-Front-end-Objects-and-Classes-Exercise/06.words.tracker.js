function findWords(wordsArr) {
    let searchWords = wordsArr[0].split(' ')
    let wordsObj = {}

    for (let word1 of searchWords) {
        wordsObj[word1] = 0
        for (let word2 of wordsArr.slice(1)) {
            if (word1 === word2) {
                wordsObj[word1] += 1
            }
        }
    }

    for (let [key, value] of Object.entries(wordsObj).sort((a, b) => b[1] - a[1])) {
        console.log(`${key} - ${value}`)
    }
}