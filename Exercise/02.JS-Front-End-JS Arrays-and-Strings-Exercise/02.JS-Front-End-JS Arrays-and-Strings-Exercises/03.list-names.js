function sortNames(names) {
    names.sort((a, b) => a.localеCompare(b))

    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`)
    }
}