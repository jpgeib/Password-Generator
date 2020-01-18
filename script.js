// DOM elements
const resultEl = document.getElementById();
const lengthEl = document.getElementById();
const uppercaseEl = document.getElementById();
const resultEl = document.getElementById();
const resultEl = document.getElementById();
const resultEl = document.getElementById();
const resultEl = document.getElementById();
const resultEl = document.getElementById();

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    num: getRandomNum,
    special: getRandomSpecial
}

// Generator functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
    const symbols = '!@#$%^&*(){}[]=<>?';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSpecial());

