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

function setRandomQuestions(questions) {
  // const questionSet = new Set();
  // while(questionSet.size != 5){
  //   const randomIndex = Math.floor(Math.random() * questions.length);
  //   questionSet.add(questions[randomIndex]);
  // }
  // return [...questionSet];
  let arr = [];
  for(let i=0;i<5;i++){
  let num = Math.floor(Math.random()*(questions.length-i));
  arr.push(questions[num]);
  // let a= questions[num];
  // questions[num]= questions[questions.length-1-i];
  // questions[questions.length-1-i]=a;
  [questions[num], questions[questions.length-1-i]] = [questions[questions.length-1-i], questions[num]];
  }
  return arr;
}

const problem = setRandomQuestions(questions);
const quizapp = document.querySelector(`form`);
const original_answers={};
problem.forEach((obj,index)=>{
   original_answers[`q${index+1}`] = obj['answer'];
   let div = document.createElement('div');
    div.className = 'question-block';
    quizapp.appendChild(div);   
   let para = document.createElement('p');
   para.innerText = obj['question'];
   div.appendChild(para);
   let br = document.createElement('br');
   div.appendChild(br);

   obj['options'].forEach((option)=>{
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.type = 'radio';
    input.name = `q${index+1}`;
    input.value = option;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    div.appendChild(label);
    let br = document.createElement('br');
    div.appendChild(br);
   })
})

let submit = document.createElement('button');
submit.type = 'submit';
submit.innerText = 'Submit';
quizapp.appendChild(submit);

quizapp.addEventListener("submit", (e)=>{
  e.preventDefault();
  let data = new FormData(quizapp);
  let score = 0;
  
  console.log(original_answers);
  for(let [key,value] of data.entries()){
    console.log(key,value);
    if(value === original_answers [key]){
      score++;
    }
  }
  let result = document.createElement('h2');
  result.innerText = `Your score is ${score} out of 5`;
  quizapp.appendChild(result);
});

