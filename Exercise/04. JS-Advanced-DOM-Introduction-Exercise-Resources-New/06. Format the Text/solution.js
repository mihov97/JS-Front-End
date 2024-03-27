function solve() {
    const outputEl = document.getElementById('output');
    const textAreaEl = document.getElementById('input');
    const text = textAreaEl.value;

    const result = text
        .split('.')
        .filter(sentence => !!sentence)
        .reduce((result, sentence, i) => {
            const resultIdx = Math.floor(i / 3);
        
            if (!result[resultIdx]) {
                result[resultIdx] = []
            }

            result[resultIdx].push(sentence.trim());

            return result;
        }, [])
        .map(sentences => `<p>${sentences.join('. ')}.</p> `)
        .join('\n')
   
    outputEl.innerHTML = result;
}  
