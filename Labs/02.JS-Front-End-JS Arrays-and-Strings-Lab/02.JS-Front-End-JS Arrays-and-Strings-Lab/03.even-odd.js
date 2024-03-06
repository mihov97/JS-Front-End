function solve(numbers) {
    even = 0
    odd = 0
    
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even += numbers[i]
        } else {
            odd += numbers[i]
        }
    }
    
    console.log(even - odd)
}