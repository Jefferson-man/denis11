let displayValue = '';   // отображение виражений 
let firstNumber = null;  // первое число
let operator = null;     // оператор дейсвтий

// добавлене чисел и операторы до дисплея 
function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;  
}

//  (+, -, *, /)
function setOperation(op) {
    if (displayValue !== '' && operator === null) {
        firstNumber = parseFloat(displayValue); // сохранение первого числа
        operator = op;                          // сохран операторов
        displayValue += ' ' + op + ' ';         // добавляю оператор до дисплея з проблеми для читаемости
        document.getElementById('display').value = displayValue;  // обновление поля ввода
    }
}

// обчисление результата
function calculate() {
    const [first, op, second] = displayValue.split(' ');  //разделение выраж на части
    if (first !== '' && op !== '' && second !== '') {
        let result;
        const firstNumber = parseFloat(first);
        const secondNumber = parseFloat(second);

        switch (op) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            default:
                return;
        }
        document.getElementById('display').value = result;  // результат
        displayValue = result.toString();  // обновление 
        operator = null;  
    }
}

// очистка
function clearDisplay() {
    displayValue = '';
    firstNumber = null;
    operator = null;
    document.getElementById('display').value = '';
}
