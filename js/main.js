//defining constants
let COLORS = {
    '0' : "gray",
    '1' : "red",
    "-1" : "blue"
};

//defining variables
let win1= [0,1,2];
let win2= [3,4,5];
let win3= [6,7,8];
let win4= [0,3,6];
let win5= [1,4,7];
let win6= [2,5,8];
let win7= [0,4,8];
let win8= [2,4,6];

let board = [[1,2,3],[4,5,6],[7,8,9]];

let turn= null;

let winner = null;

//store play square elements

let squares= document.querySelectorAll('section div');
console.log(squares);

//event listeners
document.querySelector('section').addEventListener('click', handleClick)

//functions
init();

function init() {
    board = [0,0,0,0,0,0,0,0,0];
    turn = 1;
    render();
}

function render() {
    //render the board
/*     board.forEach(function(colArr, rowIdx) {
        colArr.forEach(function(cell, colIdx){
            let div= document.getElementById(`c${colIdx}r${rowIdx}`);
            div.style.backgroundColor=COLORS[cell]
        });
    });
 */

   for(let i=0; i<9; i++) {
      let B=  document.querySelectorAll('section div');
      let C = B.item(i);
      C.style.backgroundColor=COLORS[board[i]];
   }
}

function handleClick(evt) {
    let target = evt.target.id;
    let target2= document.getElementById(target).dataset.square;
    board[target2]=turn;
    turn = turn *-1;
    
    render();

}