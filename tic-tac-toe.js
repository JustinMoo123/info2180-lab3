window.addEventListener('DOMContentLoaded', function() {
    // Get all the divs inside the board
    let squares = document.querySelectorAll('#board div');
    
    // Loop through each and give it the "square" class (Exercise 1)
    squares.forEach(function(square) {
        square.classList.add('square');
    });

    
    let currentPlayer = 'X';

    
    let boardState = ['', '', '', '', '', '', '', '', ''];

    
    squares.forEach(function(square, index) {
        square.addEventListener('click', function() {
            
            if (square.textContent === '') {
                
                square.textContent = currentPlayer;
                
                square.classList.add(currentPlayer);
                
                boardState[index] = currentPlayer;
                
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});
