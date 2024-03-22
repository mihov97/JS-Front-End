function words(input) {
    let searchWords = wordsArr[0].split(' ')
    let obj = {}

    for (let firstWord of searchWords) {
        obj[firstWord] = 0
        for (let secondWord of wordsArr.slice(1)) {
            if (firstWord === secondWord) {
                obj[firstWord] += 1
            }
        }
    }

    for (let [key, value] of Object.entries(obj).sort((a, b) => b[1] - a[1])) {
        console.log(`${key} - ${value}`)
    }
}
