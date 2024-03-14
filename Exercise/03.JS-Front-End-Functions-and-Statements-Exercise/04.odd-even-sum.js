function evenAndOdd(num) {
    stringNum = num.toString()

    oddSum = 0
    evenSum = 0

    for (let digit of stringNum) {
        let numDigit = Number(digit)

        if (numDigit % 2 !== 0) {
            oddSum += numDigit
        } else {
            evenSum += numDigit
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}