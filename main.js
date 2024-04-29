let cardNumber = document.querySelector('.number-output');
let cardName = document.querySelector('#name-output');
let date = document.querySelector('#date-output');
let cvc = document.querySelector('#cvc');
let form = document.querySelector('.form');
let complete = document.querySelector('.complete');
let name = document.getElementById('input-name');
let number = document.getElementById('card-number');
let dateM = document.getElementById('mm');
let datey = document.getElementById('yy');
let cvcInput = document.getElementById('cvc-input');
let btn = document.getElementById('btn') ;
let btn2 = document.querySelector('.btn2') ;
let numberError = document.getElementById('number-error');
let dateError = document.getElementById('date-error');
let cvcError = document.getElementById('cvc-error');
let nameError = document.getElementById('name-error')
nameError.style.display = 'none'
numberError.style.display = 'none';
dateError.style.display = 'none'
cvcError.style.display = 'none';
complete.style.display = 'none'
btn.addEventListener('click', () =>{
    if(name.value === '') {
        nameError.style.display = 'block'
        name.style.border = '1px solid #ff5252' 
    } else {
        cardName.innerHTML = name.value
    }
    if(number.value === '') {
        numberError.style.display = 'block';
        number.style.border = '1px solid #ff5252'
    } else {
        cardNumber.innerHTML = number.value
    }
 
    if(dateM.value === '' ){
    dateError.style.display = 'block'
    dateM.style.border = '1px solid #ff5252'
    } else{
        date.innerHTML = `${dateM.value} / ${datey.value}`
    }
    if(datey.value === '' ){
        dateError.style.display = 'block'
        datey.style.border = '1px solid #ff5252'
        } else{
            date.innerHTML = `${dateM.value} / ${datey.value}`
        }

        
   
        if(cvcInput.value === '') {
            cvcError.style.display = 'block'
            cvcInput.style.border = '1px solid #ff5252'
        } else{
            cvc.innerHTML = cvcInput.value
        }
        if(name.value !== '' && number.value !== '' && dateM.value !== '' && datey.value !== '' && cvcInput.value !== '') {
            form.style.display = 'none';
            complete.style.display = 'block'
        }


     
        
})

btn2.addEventListener('click', () => {
    complete.style.display = 'none';
    form.style.display = 'block';
    name.value = '';
    number.value = ''
    dateM.value = '';
    datey.value = '';
    cvcInput.value = '';
    nameError.style.display = 'none'
numberError.style.display = 'none';
dateError.style.display = 'none'
cvcError.style.display = 'none';
name.style.border = '1px solid #8e8593' 
number.style.border = '1px solid #8e8593' 
dateM.style.border = '1px solid #8e8593' 
datey.style.border = '1px solid #8e8593' 
cvcInput.style.border = '1px solid  #8e8593' 
   
})