'use strict';

let secretNumber= Math.floor(Math.random()*20) + 1;
console.log(secretNumber);
let score= 20; //initial
const numberHidden= document.querySelector('.number');


//GameHandler 
const btnHandler= document.querySelector('.checkBTN').addEventListener('click',function compareNumbers(){
    let userInput= Number(document.getElementById('guess').value);
    const messageDisplay= document.querySelector('.message');
    
        if(userInput == ''){
            alert('1～20までの数字を入力してください。');
        }else if (score > 0 && userInput == secretNumber){
            messageDisplay.textContent= '当たり！';
            document.body.style.backgroundColor="#00CC00";
            numberHidden.textContent= secretNumber;

        } else if(score > 0 && userInput > secretNumber){
            messageDisplay.textContent= '数値が高すぎる';
            score--;
            document.querySelector('.score').textContent=score;
        } else if(score > 0 && userInput < secretNumber){
            messageDisplay.textContent= '数値が低すぎる';
            score--;
            document.querySelector('.score').textContent=score;
        } else{ 
            messageDisplay.textContent= `残念。あなたのスコアは　${score}　点`;

        }
    } 
        
);

//reset the game values
const againBTN=document.getElementById('againBTN').addEventListener('click', 
function resetGame(){
 score: 20;
 secretNumber=Math.floor(Math.random()*20) + 1;
 document.querySelector('.message').textContent='もう一回やってみよう';
 document.querySelector('.score').textContent=score;
numberHidden.textContent= '?';
let userInput= document.getElementById('guess').value='';
document.body.style.backgroundColor="#000";

});



