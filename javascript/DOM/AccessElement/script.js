
// const id = document.querySelector('#first'); // id selector #
// id.innerHTML = "Hello Money";

// const id2 = document.querySelector('.header2');
// id2.style.backgroundColor = "pink";


//  How to iterate over Node list

// const obj = document.querySelectorAll('.header1')

//1:  obj.forEach((val)=>{
//     console.log(val)
//     })


// 2: for(let val of obj)
// console.log(val)

// 3: for(i=0;i<obj.length;i++)
//     obj[i].style.color = "red";

//  Convert NodeList into array
//  Array.from(obj)





// ****************************

// const obj = document.getElementsByTagName('h1');

// let team = document.getElementsByTagName('li');

// How to iterate over it
// 1:for(let i=0;i<team.length;i++)
// team[i].style.color = "black";

// 2: for(let val of team)
    // console.log(val)

// 3: Array.from(team).forEach((val)=>{
// console.log(val);
//  })





// ****************************

// const list = document.querySelector('li');
  // console.log(list.parentElement);
// console.log(list.parentNode);


// const par = document.querySelector('ul');
// console.log(par);

// console.log(par.childNodes);// NodeList(9) [text, li, text, li, text, li, text, li, text]
// text - whitespaces

// console.log(par.children); // HTMLCollection(4) [li, li, li, li]

// console.log(par.firstChild); // #text
// console.log(par.firstElementChild);// <li>CN</li>

// console.log(par.lastChild); // #text
// console.log(par.lastElementChild); // <li>JS</li>

// console.log(par.nextSibling); // #text
// console.log(par.nextElementSibling); // <script src="./script.js"></script>



// innerHTML - display all the html tags inside the element
// textContent - display the text content only
// innerText - display the text which presents on the screen
