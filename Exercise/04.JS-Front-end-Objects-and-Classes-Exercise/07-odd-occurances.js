function solve(input) {
    const words = input.split(' ');
    const wordOcc = {};

    for (const word of words) {
        if (!wordOcc.hasOwnProperty(word.toLowerCase())) {
            wordOcc[word.toLowerCase()] = 0;
        }

        wordOccs[word.toLowerCase()]++;
    }

    const result = [];
    for (const word in wordOcc) {
        if (wordOcc[word] % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}


