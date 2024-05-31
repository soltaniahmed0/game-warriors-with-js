function startpopup(a){
    removeAllEventListeners();
    const gameOverPopup = document.getElementById('game-over-popup');
    const restartButton = document.getElementById('restart-button');
    const gameOverMessage = document.getElementById('game-over-message');
  
    // Function to show the game over popup
    function showGameOver(message) {
        gameOverMessage.textContent = message;
        gameOverPopup.classList.remove('hidden');
    }
  
    // Function to hide the game over popup
    function hideGameOver() {
        gameOverPopup.classList.add('hidden');
    }
  
    // Event listener for the restart button
    restartButton.addEventListener('click', () => {
        hideGameOver();
        // Add your game restart logic here
        location.reload();
        console.log('Restarting the game...');
    });
  
    // Example of triggering the game over popup
    // You can call this function when the game is actually over
    showGameOver(a+' Castle down You have lost all your health points!');
  
  
  }
  function removeAllEventListeners() {
    const allElements = document.querySelectorAll('*');
  
    allElements.forEach(element => {
        const newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);
    });
  }