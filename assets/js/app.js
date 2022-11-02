// select player number
 
// button container (player number section)
const buttonContainer = document.getElementById('button-container');
// player number section 
const playerNumberSection = document.getElementById('player-number-section');
// add click to select how many players play the game
buttonContainer.addEventListener('click', playerNumber);
// select player img section to hide and show after player number is not 0
const playerImgSection = document.getElementById('player-img-section');
// select the game table 
const tableGame = document.querySelectorAll('.visible-cells');



let playerNum; // number of player chosen
let playerImg = [];


// select number of player, hide the selection and show the img to take 
function playerNumber(e){
    playerNum = e.target.innerHTML;
    playerNumberSection.classList.add('hidden');
    playerImgSection.classList.remove('hidden');


    for (let index = 0; index <playerNum; index++) {
        playerImg[index] = 0
    }


}

const numPlayerSelect = document.getElementById('text-player-avatar-seclect');
playerImgSection.addEventListener('click', choseImg);


let imgChosen = 0;
let playerThatChoice = 1;

function choseImg(e){
    if(e.target.classList.contains('character-img')){

        playerImg[imgChosen] = e.target.src;
        e.target.style.display = 'none';
        playerThatChoice +=1 ;
        document.getElementById('text-player-avatar-seclect').innerHTML = `Player ${playerThatChoice} select your avatar`;

        // add the img to the start position
        tableGame[11].children[imgChosen].src = playerImg[imgChosen];

        imgChosen +=1 ;

        if(imgChosen >= playerNum){
            playerImgSection.classList.add('hidden');
            document.getElementById('dice-roll-section').classList.remove('hidden');
        }
        
    }
}



