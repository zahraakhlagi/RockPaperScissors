let choices=["rock","paper","scissors"];
let score=[0,0];
const result= document.getElementById("resultPro");
const playerScore=document.getElementById("playerscore");
const computerScore= document.getElementById("computerScore");

function check(choice){
    let rand= Math.floor(Math.random() *3);
    console.log(rand);
    player=choice;
    computer=choices[rand];

    if(player===computer){
        result.innerHTML="Equal😝";

    }else if(
        (player===choices[0] && computer=== choices[2]) ||
        (player===choices[1] && computer=== choices[0]) ||
        (player===choices[2] && computer=== choices[1])
    ){
        score[0]++;
        playerScore.innerHTML=" Your Score:"+ score[0];
        result.innerHTML= " You Win 😎";
    } else{
        score[1]++;
        computerScore.innerHTML="PC Score:"+ score[1];
        result.innerHTML= "PC Win 💩";
    }
        
}

