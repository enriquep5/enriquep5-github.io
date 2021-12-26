

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

