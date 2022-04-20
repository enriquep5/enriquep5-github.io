
/* Mobile Menu Functionality */

document.getElementById('hbmenu').addEventListener('click', function() {
    document.querySelector('.navright-alt').classList.add('menu-open');
  })

  document.getElementById('close').addEventListener('click', function(){
    document.querySelector('.navright-alt').classList.remove('menu-open');
  })

/* Appointment Form */

/* Identifying Input Fields & Buttons */
let nameBar = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let date = document.getElementById('date');
// let chosenService = document.querySelectorAll('input[type="checkbox"]:checked');
//let service = document.getElementById('service');


let submitButton = document.getElementById('submitButton');


/* Function to trigger alerts for errors and successful submission */

function getInfo(e) {
  e.preventDefault()

  if (nameBar.value === '' || nameBar.value == null || phone.value === '' || phone.value == null || email.value ==='' || email.value == null || date.value ==='' || date.value == null) {
   alert('Пожалуйста, введите свои данные, чтобы записаться на прием!')
  } 
  
  if (typeof phone.value != "string") {
    alert('Пожалуйста, введите действующий телефонный номер!')
  }
  
  if (typeof nameBar.value === "string" && typeof phone.value === "string" && typeof date.value ==="string") {
    alert(`Поздравления ${nameBar.value}! Ваша встреча назначена на ${date.value}!`)
    console.log(nameBar.value, email.value, phone.value, date.value);
/* needed to consult StackOverflow for this! Still find it weird that service could be iterated through without being defined in JS  https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox */ 
    for(let i=0; service[i]; ++i){
      if(service[i].checked){
           checkedValue = service[i].value;
           console.log(checkedValue)
      }
  }
  
  }
}

/* Event Listener for submit button */

submitButton.addEventListener('click', getInfo); 


/* Calculator */
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }
  
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
  
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
  
    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default: 
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay 
    if (isNaN(integerDigits)) {
        integerDisplay = ''
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
    } else {
        return integerDisplay
    }
    }
  
    updateDisplay() {
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
  }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })