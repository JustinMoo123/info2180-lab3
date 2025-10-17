window.addEventListener('DOMContentLoaded', function() {
    // Get all the divs inside the board
    let squares = document.querySelectorAll('#board div');
    
    // Loop through each and give it the "square" class
    squares.forEach(function(square) {
        square.classList.add('square');
    });
});
