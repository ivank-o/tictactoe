
const message = document.querySelector('.turn');
const cells = document.querySelectorAll('.cell');
const cell1 = document.querySelector('.cell1');
const cell2 = document.querySelector('.cell2');
const cell3 = document.querySelector('.cell3');
const cell4 = document.querySelector('.cell4');
const cell5 = document.querySelector('.cell5');
const cell6 = document.querySelector('.cell6');
const cell7 = document.querySelector('.cell7');
const cell8 = document.querySelector('.cell8');
const cell9 = document.querySelector('.cell9');


const checkWinner = () => {
    const board = [
        [cell1.textContent, cell2.textContent, cell3.textContent],
        [cell4.textContent, cell5.textContent, cell6.textContent],
        [cell7.textContent, cell8.textContent, cell9.textContent]
    ]
    //FOR ROWS
    for (let i = 0; i < 3; i++){
        if ((board[i][0] === 'X' || board[i][0] === 'O') && (board[i][1] === board[i][0] && board[i][2] === board[i][1])){
            message.textContent = `${board[i][0]} WON!`
            message.style.backgroundImage = 'var(--gradient)';
            message.style.backgroundSize = '400%';
            message.style.animation = 'bg-animation 2s infinite alternate';
            message.style.color = 'white';
        }
    }

    //FOR COLS
    for (let i = 0; i < 3; i++){
        if ((board[0][i] === 'X' || board[0][i] === 'O') && (board[0][i] === board[1][i] && board[2][i] === board[1][i])){
            message.textContent = `${board[0][i]} WON!`;
            message.style.backgroundImage = 'var(--gradient)';
            message.style.backgroundSize = '400%';
            message.style.animation = 'bg-animation 2s infinite alternate';
            message.style.color = 'white';
        }
    }

    //DIAGONAL
    if ((board[0][0] === 'X' || board[0][0] === 'O') && (board[0][0] === board[1][1] && board[0][0] === board[2][2])){
        message.textContent = `${board[0][0]} WON!`
        message.style.backgroundImage = 'var(--gradient)';
        message.style.backgroundSize = '400%';
        message.style.animation = 'bg-animation 2s infinite alternate';
        message.style.color = 'white';
    }

    if ((board[0][2] === 'X' || board[0][2] === 'O') && (board[0][2] === board[1][1] && board[0][2] === board[2][0])){
        message.textContent = `${board[0][0]} WON!`
        message.style.backgroundImage = 'var(--gradient)';
            message.style.backgroundSize = '400%';
            message.style.animation = 'bg-animation 2s infinite alternate';
        message.style.color = 'white';
    }
}
// function createPlayer(){
//     //how to switch between players
//     let currentPlayer = false;
//     let name = prompt('hello, your name?');
//     let choice = prompt('X or O? ').toUpperCase();
//     //let counter =0;
//     while(choice !== 'X' && choice !== 'O'){
//         counter++;
//         choice = prompt('sorry, it is only X or O').toUpperCase();
//         //counter === 3 ? alert('r u dumb') : alert('r u dumb?');
//     }
//     const getName = () => name;
//     const getChoice = () => choice; 
//    return {getName, getChoice}
// }

/////////////////////////////   
const move = () => {
    let currentPlayer = 'X';
    let turnCounter = 0;
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '') {
                if (currentPlayer == 'X'){
                    cell.style.color = '#FFD639'
                    message.style.background = '#F19A3E'
                } else {
                    message.style.background = '#9FC490'
                }
                cell.textContent = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                
                turnCounter++;
                //console.log(turnCounter)
                message.textContent = `It's turn ${currentPlayer}`;
                    //console.log(checkWinner())
                if (turnCounter == 9){
                    message.textContent = `it's a draw`;
                    message.style.background = '#17BEBB'
                }
                checkWinner();
            }
        });
    });
}

const startGame = () => {
    
    move();
}

startGame();
        


