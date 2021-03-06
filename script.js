// DOM elements

const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const specialEl = document.getElementById('special');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// Generator Events
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    special: getRandomSpecial
};

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSpecial = specialEl.checked;
    
    passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, length);
});

//Copy password to clipboard
clipboardEl.addEventListener('click', () => {
    const textarea = document.getElementById('password');
  
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
   
    textarea.remove();
    alert('Password copied to clipboard!');

})


//Password Function

function generatePassword(lower, upper, number, special, length) {
    let result = '';
    const typesCount = lower + upper + number + special;
    
    const typesArr = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]);
    

    if(typesCount === 0) {
        return '';
    }; 
    
    if (length < 8) {
        alert('Password length must be at least 8 characters');
        return '';
      };
      
    if (length > 128) {
        alert('Password length must less than 129 characters');
        return '';
      };


    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            

            result += randomFunc[funcName]();
        });
    }

    const finalPassword = result.slice(0, length);
    
    return finalPassword;
}


// Generator functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
    const symbols = '!@#$%^&*(){}[]=<>?';
    return symbols[Math.floor(Math.random() * symbols.length)];
}



