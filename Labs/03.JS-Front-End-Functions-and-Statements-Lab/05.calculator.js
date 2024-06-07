function simpleCalculator(firstNum, secondNum, operator) {
    let operations = {
        'multiply': (firstNum, secondNum) => firstNum * secondNum,
        'divide': (firstNum, secondNum) => firstNum / secondNum,
        'add': (firstNum, secondNum) => firstNum + secondNum,
        'subtract': (firstNum, secondNum) => firstNum - secondNum,
    }

    let result = operations[operator](firstNum, secondNum)
    console.log(result)

}