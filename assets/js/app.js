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
const emptySpace = 'assets/img/emptyspace.png';



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
            document.getElementById('dice-roll-animation-section').classList.remove('hidden');
        }
        
    }
}

const tableGameOrder = []

// order the table game
tableGameOrder[0] = tableGame[11];
tableGameOrder[1] = tableGame[10];
tableGameOrder[2] = tableGame[9];
tableGameOrder[3] = tableGame[8];
tableGameOrder[4] = tableGame[7];
tableGameOrder[5] = tableGame[6];
tableGameOrder[6] = tableGame[5];
tableGameOrder[7] = tableGame[4];
tableGameOrder[8] = tableGame[3];
tableGameOrder[9] = tableGame[2];
tableGameOrder[10] = tableGame[1];
tableGameOrder[11] = tableGame[0];

tableGameOrder[12] = tableGame[12];
tableGameOrder[13] = tableGame[13];
tableGameOrder[14] = tableGame[25];
tableGameOrder[15] = tableGame[28];
tableGameOrder[16] = tableGame[31];
tableGameOrder[17] = tableGame[34];
tableGameOrder[18] = tableGame[38];
tableGameOrder[19] = tableGame[48];
tableGameOrder[20] = tableGame[50];

tableGameOrder[21] = tableGame[51];
tableGameOrder[22] = tableGame[52];
tableGameOrder[23] = tableGame[53];
tableGameOrder[24] = tableGame[54];
tableGameOrder[25] = tableGame[55];
tableGameOrder[26] = tableGame[56];
tableGameOrder[27] = tableGame[57];
tableGameOrder[28] = tableGame[58];
tableGameOrder[29] = tableGame[59];
tableGameOrder[30] = tableGame[60];
tableGameOrder[31] = tableGame[61];
tableGameOrder[32] = tableGame[62];

tableGameOrder[33] = tableGame[49];
tableGameOrder[34] = tableGame[47];
tableGameOrder[35] = tableGame[37];
tableGameOrder[36] = tableGame[33];
tableGameOrder[37] = tableGame[30];
tableGameOrder[38] = tableGame[27];
tableGameOrder[39] = tableGame[24];

tableGameOrder[40] = tableGame[23];
tableGameOrder[41] = tableGame[22];
tableGameOrder[42] = tableGame[21];
tableGameOrder[43] = tableGame[20];
tableGameOrder[44] = tableGame[19];
tableGameOrder[45] = tableGame[18];
tableGameOrder[46] = tableGame[17];
tableGameOrder[47] = tableGame[16];
tableGameOrder[48] = tableGame[15];
tableGameOrder[49] = tableGame[14];

tableGameOrder[50] = tableGame[26];
tableGameOrder[51] = tableGame[29];
tableGameOrder[52] = tableGame[32];
tableGameOrder[53] = tableGame[35];
tableGameOrder[54] = tableGame[39];

tableGameOrder[55] = tableGame[40];
tableGameOrder[56] = tableGame[41];
tableGameOrder[57] = tableGame[42];
tableGameOrder[58] = tableGame[43];
tableGameOrder[59] = tableGame[44];
tableGameOrder[60] = tableGame[45];
tableGameOrder[61] = tableGame[46];

tableGameOrder[62] = tableGame[36];

// DICE ROLL BUTTON 

document.getElementById('roll-dice-button').addEventListener('click', roll)

let images = ["assets/img/dice-01.svg",
"assets/img/dice-02.svg",
"assets/img/dice-03.svg",
"assets/img/dice-04.svg",
"assets/img/dice-05.svg",
"assets/img/dice-06.svg"];
let dice = document.querySelectorAll(".dice-img");

let totalRoll;

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        totalRoll = (dieOneValue +1) + (dieTwoValue + 1)
        
        playerMoove();  
        isWin();
    },
    1000
    );


}

// roll logic 

// console.log(tableGameOrder) // tabellone di gioco ordinato 
// console.log(playerImg) // 0 player 1... 1 player 2 ... 

let player1Position = 0;
let player2Position = 0;
let player3Position = 0;
let player4Position = 0;
let actualPlayerTurn = 1;
let actualPosition = 0;


function playerMoove(){

    if(actualPlayerTurn > playerNum){
        actualPlayerTurn = 1
    }

   switch (actualPlayerTurn) {
    case 1:
        tableGameOrder[player1Position].children[0].src = emptySpace;
        player1Position += totalRoll;
        if(player1Position > 62){
            player1Position -= 62;
            player1Position = 62 - player1Position;
        }
        player1Position = specialCaselControll(player1Position, totalRoll);
        actualPosition = player1Position;
        tableGameOrder[player1Position].children[0].src = playerImg[0];
        actualPlayerTurn++
        break;
    case 2:
        tableGameOrder[player2Position].children[1].src = emptySpace;
        player2Position += totalRoll;
        if(player2Position > 62){
            player2Position -= 62;
            player2Position = 62 - player2Position;
        }
        player2Position = specialCaselControll(player2Position, totalRoll);
        actualPosition = player2Position;
        tableGameOrder[player2Position].children[1].src = playerImg[1];
        actualPlayerTurn++
        break;
    case 3:
        tableGameOrder[player3Position].children[2].src = emptySpace;
        player3Position += totalRoll;
        if(player3Position > 62){
            player3Position -= 62;
            player3Position = 62 - player3Position;
        }
        player3Position = specialCaselControll(player3Position, totalRoll);
        actualPosition = player3Position;
        tableGameOrder[player3Position].children[2].src = playerImg[2];
        actualPlayerTurn++
        break;
    case 4:
        tableGameOrder[player4Position].children[3].src = emptySpace;
        player4Position += totalRoll;
        if(player4Position > 62){
            player4Position -= 62;
            player4Position = 62 - player4Position;
        }
        player4Position = specialCaselControll(player4Position, totalRoll);
        actualPosition = player4Position;
        tableGameOrder[player4Position].children[3].src = playerImg[3];
        actualPlayerTurn = 1;
        break;
   
    default:
        break;
   }


}

function isWin(){
    if(actualPosition === 62){
        if(actualPlayerTurn === 1){
            actualPlayerTurn = 5;
        }
        document.getElementById('winner-text').innerHTML = `Congratulation player ${actualPlayerTurn-1} you are the WINNER`;
        document.getElementById('winner-img').src = playerImg[actualPlayerTurn-2];

        document.getElementById('winner-section').classList.remove('hidden');
        document.getElementById('dice-roll-section').classList.add('hidden');

        setTimeout(function() {
            document.getElementById('winner-img').classList.remove('shake');
          }, 2000);
    }
}

document.getElementById('replay-button').addEventListener('click', newGame);

function newGame(){
    location.reload();
    return false;
}

const alertInfo = document.getElementById('alert-section');
const alertInfoTitle = alertInfo.children[0].children[0];
const alertInfoDetails = alertInfo.children[0].children[1];

function specialCaselControll(playerPosition, totalRoll){

    // -CASELLE DELL'OCA (5, 9, 18, 27, 36, 45, 54): 
    if(playerPosition === 5 || playerPosition === 18|| playerPosition === 27|| playerPosition === 36|| playerPosition === 45|| playerPosition === 54 ){
        playerPosition += totalRoll;
        // alert(`CASELLE DELL OCA, ti muovi di altre ${totalRoll} caselle`)
        alertInfo.classList.remove('hidden');
        alertInfoTitle.innerHTML = `CASELLE DELL'OCA (5, 9, 18, 27, 36, 45, 54)`
        alertInfoDetails.innerHTML= `Il giocatore che si muove su 
        una casella dell'oca si muove 
        di un numero di caselle pari 
        a quelle di cui si e' appena 
        spostato; la disposizione delle
         caselle dell'oca fa si' che se 
        un giocatore, durante il primo
         turno, lancia un 9, vincera' 
        la partita in una sola mossa`;
        setTimeout(function() {
            alertInfo.classList.add('hidden');
          }, 7000);
        return playerPosition;
    }

    if(playerPosition === 9){
        alert('CASELLA DELL OCA, 9 ?? il lancio perfetto, CONGRATULAZIONI');
        playerPosition = 62;
        return playerPosition;
    }

    if(playerPosition === 6){
        playerPosition += totalRoll;
        alertInfo.classList.remove('hidden');
        alertInfoTitle.innerHTML = `PONTE(6)`;
        alertInfoDetails.innerHTML= ` si ripete il movimento`;
        setTimeout(function() {
            alertInfo.classList.add('hidden');
          }, 7000);
        return playerPosition;
    }

    if(playerPosition === 42){
        playerPosition = 39;
        alertInfo.classList.remove('hidden');
        alertInfoTitle.innerHTML = `LABIRINTO(42)`;
        alertInfoDetails.innerHTML= ` si torna indietro alla casella 39`;
        setTimeout(function() {
            alertInfo.classList.add('hidden');
          }, 7000);
        return playerPosition;
    }

    if(playerPosition === 58){
        playerPosition = 1;
        alertInfo.classList.remove('hidden');
        alertInfoTitle.innerHTML = `SCHELETRO(58)`;
        alertInfoDetails.innerHTML= ` si torna alla casella 1`;
        setTimeout(function() {
            alertInfo.classList.add('hidden');
          }, 7000);
        return playerPosition;
    }



    return playerPosition;
}

// COLOR ASSIGNMENT
tableGameOrder[5].classList.add('ghoose-cell');
tableGameOrder[9].classList.add('ghoose-cell');
tableGameOrder[18].classList.add('ghoose-cell');
tableGameOrder[27].classList.add('ghoose-cell');
tableGameOrder[36].classList.add('ghoose-cell');
tableGameOrder[45].classList.add('ghoose-cell');
tableGameOrder[54].classList.add('ghoose-cell');

tableGameOrder[6].classList.add('bridge-cell');

tableGameOrder[42].classList.add('maze-cell');

tableGameOrder[58].classList.add('scheleton-cell');

tableGameOrder[62].classList.add('end-cell');

tableGameOrder[0].classList.add('start-cell');




