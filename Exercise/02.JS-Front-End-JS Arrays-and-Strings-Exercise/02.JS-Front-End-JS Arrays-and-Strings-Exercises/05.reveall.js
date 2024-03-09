function solve(string, text) {
    let words = string.split(', ');
    let result = text.slice();

    let startIndex = -1;
    let endIndex = -1;
    for (let i = 0; i <= text.length; i++) {
        let symbol = text[i];

        if (symbol === '*') {
            if (startIndex < 0) {
                startIndex = i;
            }
            endIndex = i;
        } else if (startIndex >= 0) {
            let word = words.find((w) => w.length === endIndex + 1 - startIndex);
            result = result.slice(0, startIndex) + word + result.slice(endIndex + 1, text.length);
            startIndex = -1;
            endIndex = -1;
        }
    }

    console.log(result)
}


