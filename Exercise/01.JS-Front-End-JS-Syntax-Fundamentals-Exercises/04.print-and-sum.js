function numbers(m,n) {
    let result = ''
    let sum = 0
    for(let i=m; i<=n; i++) {
        sum += i;
        result  += i + ' ';
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}

numbers(0, 26)