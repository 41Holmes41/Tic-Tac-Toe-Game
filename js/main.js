//defining constants
let COLORS = {
    '0' : "gray",
    '1' : "red",
    "-1" : "blue"
};

//defining variables
let winArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let board;

let turn= null;

let winner = 0;

//store play square elements

let squares= document.querySelectorAll('section div');

//event listeners
document.querySelector('section').addEventListener('click', handleClick);
document.querySelector('button').addEventListener('click', function() {
    
    init();
});

//functions
init();

function init() {
    board = [0,0,0,0,0,0,0,0,0];
    turn = 1;
    winner = 0;

    render();
}

function render() {
    //render the board
    if ( winner != 0) {
        return;
    };

   for(let i=0; i<9; i++) {
      let B=  document.querySelectorAll('section div');
      let C = B.item(i);
      C.style.backgroundColor=COLORS[board[i]];
   }

    winCheckPass(winArray); 


    if (winner !=0){

        turnDisplay = document.querySelector('h2');

        if (winner === 1) {
            turnDisplay.innerHTML = `Player 1 wins!`;
        } else {
            turnDisplay.innerHTML = `Player 2 wins!`; 
        }

   } else {
       turnDisplay = document.querySelector('h2');
       if (turn === 1) {
        turnDisplay.innerHTML = `Player 1's turn!`;
        } else {
            turnDisplay.innerHTML = `Player 2's turn!`;
        };
   };
};

function handleClick(evt) {

    
    let target = evt.target.id;
    let target2= document.getElementById(target).dataset.square;

    if ( Math.abs(board[target2]) != 1 ) {
        board[target2]=turn;
        turn = turn *-1;
    };
    //console.log(target2);
    
    render();

}

 function winCheckPass(winArray2) {
    winCheck(winArray2[0]);
    winCheck(winArray2[1]);
    winCheck(winArray2[2]);
    winCheck(winArray2[3]);
    winCheck(winArray2[4]);
    winCheck(winArray2[5]);
    winCheck(winArray2[6]);
    winCheck(winArray2[7]);
}; 

function winCheck(winCombo) {
    if ( board[winCombo[0]] + board[winCombo[1]] + board[winCombo[2]] === 3 ) {
        winner = 1;
    };

    if ( board[winCombo[0]] + board[winCombo[1]] + board[winCombo[2]] === -3 ) {
        winner = -1;
    };
};