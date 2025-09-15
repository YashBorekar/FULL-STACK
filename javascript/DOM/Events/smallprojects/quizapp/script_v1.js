// let questions = [
//   "What is the capital of France?",
//   "Which planet is known as the Red Planet?",
//   "What is the chemical symbol for water?",
//   "Who wrote the play 'Romeo and Juliet'?",
//   "What is the tallest mammal?",
//   "What does CPU stand for?",
//   "Who painted the Mona Lisa?",
//   "What is the largest ocean on Earth?",
//   "In which country are the Great Pyramids of Giza located?",
//   "What is the powerhouse of the cell?"
// ];
const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    answer: "H2O"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the tallest mammal?",
    options: ["Elephant", "Giraffe", "Whale", "Hippo"],
    answer: "Giraffe"
  },
  {
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Central Program Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "In which country are the Great Pyramids of Giza located?",
    options: ["Mexico", "Peru", "Egypt", "Sudan"],
    answer: "Egypt"
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondrion", "Cell Wall"],
    answer: "Mitochondrion"
  }
];


// let original_answers={
//   q1: "Paris",
//   q2: "Mars",
//   q3: "Pacific Ocean",
//   q4:"Europe",
//   q5:"Willian Shakespeare"
// }


// const form = document.querySelector("form");
// form.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   let data = new FormData(form);
//   let score = 0;
//   // console.log(Object.entries(data));
//   // console.log(data.entries());
//   // for(const [name, value] of data.entries()){
//   //   console.log(`${name} : ${value}`);
//   // } 

//   for(let [key,value] of data.entries()){
//     if(value === original_answers[key]){
//       score++;
//     }
//   }
//   console.log(score);
// });

const quizapp = document.querySelector(`form`);
  
for(let i=0;i<5;i++){
  let num = Math.floor(Math.random()*(questions.length-i));
  console.log(num);
  setQuestion(questions[num].question);
  setOptions(questions[num].options,i);

  let a= questions[num];
  questions[num]= questions[questions.length-1-i];
  questions[questions.length-1]=a;
}
createSubmitButton();

function setQuestion(que) {
  let label = document.createElement('label');
   label.innerText = que;
   quizapp.appendChild(label);
 
   let br = document.createElement('br');
   quizapp.appendChild(br);
}

function setOptions(options,questionNumber) {
  for(let i=0;i<options.length;i++){
    let input1 = document.createElement('input');
    input1.type = 'radio';
    input1.name = `q${questionNumber+1}`;
    input1.value = options[i];
    quizapp.appendChild(input1);
    quizapp.appendChild(document.createTextNode(options[i]));
    quizapp.appendChild(document.createElement('br'));
  }
}
  function createSubmitButton()
  {const button = document.createElement("button")
  button.type = "submit";
  button.innerText = "Submit";
  quizapp.appendChild(button)}

quizapp.addEventListener("submit", (e)=>{
  e.preventDefault();
  let data = new FormData(quizapp);
  for(let [key,value] of data.entries()){
    console.log(`${key} : ${value}`);
  }
  // alert(`Your Score is ${score}`);
});