window.addEventListener('DOMContentLoaded', function() {
    // Get all the divs inside the board
    let squares = document.querySelectorAll('#board div');
    
    // Loop through each and give it the "square" class (Exercise 1)
    squares.forEach(function(square) {
        square.classList.add('square');
    });

    let currentPlayer = 'X';
    let boardState = ['', '', '', '', '', '', '', '', ''];

    // Exercise 4: Get status div
    let statusDiv = document.getElementById('status');

    // Exercise 4: Function to check for winner
    function checkWinner() {
        let winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if (boardState[a] !== '' && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                statusDiv.textContent = 'Congratulations! ' + boardState[a] + ' is the Winner!';
                statusDiv.classList.add('you-won');
                return true;
            }
        }

        return false;
    }

    squares.forEach(function(square, index) {
        square.addEventListener('click', function() {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                boardState[index] = currentPlayer;

                // Exercise 4: Check for winner after move
                if (!checkWinner()) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        square.addEventListener('mouseover', function() {
            square.classList.add('hover');  
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover'); 
        });

    });

    // Exercise 5: Reset the game
    let newGameBtn = document.querySelector('.btn');
    newGameBtn.addEventListener('click', function() {
        // Reset all squares
        squares.forEach(function(square) {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });

        // Reset the board state array
        boardState = ['', '', '', '', '', '', '', '', ''];

        // Reset current player to X
        currentPlayer = 'X';

        // Reset the status message
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
    });

});
