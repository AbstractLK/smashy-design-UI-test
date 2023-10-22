
let FName = document.getElementById('FName');
let errFName = document.getElementById('checkFName');
let LName = document.getElementById('LName');
let errLName = document.getElementById('checkLName');
let email = document.getElementById('email');
let errEmail = document.getElementById('checkEmail');
let address = document.getElementById('address');
let errAddress = document.getElementById('checkAddress');

let input1 = false;
let input2 = false;
let input3 = false;
let input4 = false;

FName.addEventListener('input', function(e){
    var pattern = /^[a-zA-Z]+$/;
    if (pattern.test(e.target.value)) {
        errFName.style.display = 'none';
        FName.style.color = '#05253C';
        input1 = true;
    } else {
        errFName.style.display = 'block';
        FName.style.color = 'red';
        console.log(email.value);
        input1 = false;
    }
})

LName.addEventListener('input', function(e){
    var pattern = /^[a-zA-Z]+$/;
    if (pattern.test(e.target.value)) {
        errLName.style.display = 'none';
        LName.style.color = '#05253C';
        input2 = true;
    } else {
        errLName.style.display = 'block';
        LName.style.color = 'red';
        console.log(email.value);
        input2 = false;
    }
})

email.addEventListener('input', function(e){
    var pattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (pattern.test(e.target.value)) {
        errEmail.style.display = 'none';
        email.style.color = '#05253C';
        input3 = true;
    } else {
        errEmail.style.display = 'block';
        email.style.color = 'red';
        console.log(email.value);
        input3 = false;
    }
})

address.addEventListener('input', function(e){
    var pattern = /^[\w/,.\s]+$/;
    if (pattern.test(e.target.value)) {
        errAddress.style.display = 'none';
        address.style.color = '#05253C';
        input4 = true;
    } else {
        errAddress.style.display = 'block';
        address.style.color = 'red';
        console.log(email.value);
        input4 = false;
    }
})

let submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click',function () {
    if (input1 && input2 && input3 && input4) {
        alert("Registration Successfully");
    } else {
        alert("Registration Failed");
    }
    
})