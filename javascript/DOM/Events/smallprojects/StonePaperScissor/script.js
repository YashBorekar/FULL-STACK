const arr = ["stone","paper","scissor"];

let result_element = document.querySelector(".result");
let box = document.querySelector(".box");
box.addEventListener("click",(event)=>{
  if(event.target.id == 'btn'){
    getWinner(); 
  } 
  console.log(event.target);
})
function getWinner(){
let player1 = Math.floor(Math.random()*arr.length);
let player2 = Math.floor(Math.random()*arr.length);
document.getElementById("p1").innerText = arr[player1];
document.getElementById("p2").innerText = arr[player2];
console.log(arr[player2]);
if(player1!=player2){
   if(player1==0){
    if(player2 == 1){
      result(2);
    }else{
      result(1);
    } 
   }else if(player1 == 1){
     if(player2==0){
      result(1);
     }else{
      result(2);
     }
   }else{
    if(player2==0){
      result(2);
     }else{
      result(1);
     }

   }
}else{
  result(0);
}
}
function result(n){   
  if(n==1){
    result_element.innerText = "Player 1 Wins";
  }else if(n==2){
    result_element.innerText = "Player 2 Wins";
  }else{
    result_element.innerText = "It's a Tie";
  }
}
