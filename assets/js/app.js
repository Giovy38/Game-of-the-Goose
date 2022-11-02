// select player number
 
const buttonContainer = document.getElementById('button-container');
const playerNumberSection = document.getElementById('player-number-section');
buttonContainer.addEventListener('click', playerNumber);

let playerNum;

function playerNumber(e){
    playerNum = e.target.innerHTML;
    playerNumberSection.style.display = 'none';
    console.log(playerNum);
}