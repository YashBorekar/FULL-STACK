const addbtn = document.querySelector('#add');
const subbtn = document.querySelector('#sub');
const mulbtn = document.querySelector('#mul');
const divbtn = document.querySelector('#div');

const result = document.querySelector('#result-value');

let number1 = document.querySelector('#input1');
let number2 = document.querySelector('#input2');


addbtn.addEventListener('click',()=> { 
  result.textContent =  Number(number1.value) + Number(number2.value);
})

subbtn.addEventListener('click',()=> { 
  result.textContent =  Number(number1.value) - Number(number2.value);
})

mulbtn.addEventListener('click',()=> { 
  result.textContent =  Number(number1.value) * Number(number2.value);
})

divbtn.addEventListener('click',()=> { 
  result.textContent =  Number(number1.value) / Number(number2.value);
})