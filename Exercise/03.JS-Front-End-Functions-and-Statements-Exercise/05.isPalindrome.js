function isPalindrom(numbers) {
    result = []

    for (let num of numbers) {
        stringOfNums = num.toString()

        if (stringOfNums === stringOfNums.split('').reverse().join('')) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result.join('\n')
}


