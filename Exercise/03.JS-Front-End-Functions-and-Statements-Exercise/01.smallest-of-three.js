function solve(num1, num2, num3) {
    const result = mathMin([num1, num2, num3]);

    console.log(result);

    function mathMin(numbers) {
        let minNum = Number.MAX_SAFE_INTEGER;
    
        for (const n of numbers) {
            if (minNum > n) {
                minNum = n;
            }
        }
        
        return minNum;
    }
}

