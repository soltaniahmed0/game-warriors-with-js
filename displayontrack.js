
function displayWarriorsOnTrack() {
    // Clear previous warrior positions
    document.querySelectorAll('.tile').forEach(tile => {
      tile.innerHTML = ''; // Clear HTML content of each tile
    });
  
    // Loop through each castle's warriors and display them on the track
    [redCastle, blueCastle].forEach(castle => {
      castle.warriors.forEach(warrior => {
         const tile = document.getElementById(`p${warrior.position}`); 
        const warriorContainer = document.createElement('div'); 
        warriorContainer.classList.add('warrior-container'); 
        
        const warriorImage = document.createElement('img'); 
        warriorImage.classList.add('img'); 
        warriorImage.src = warrior.imageUrl; 
        warriorImage.alt = warrior.constructor.name; 
        
        const healthBar = document.createElement('div'); 
        healthBar.classList.add('health-bar'); 
        
        if (warrior.healthPoints <= 100) {
          healthBar.style.width = `${warrior.healthPoints}%`; // Set width based on warrior's health points
        } else {
          const fullHealthBar = document.createElement('div'); // Create a full health bar element
          fullHealthBar.classList.add('full-health-bar'); // Add class name 'full-health-bar'
          fullHealthBar.style.width = '100%'; // Set width to 100%
          healthBar.appendChild(fullHealthBar); // Append full health bar to the health bar container
  
          const extraHealthBar = document.createElement('div'); // Create an extra health bar element for remaining health
          extraHealthBar.classList.add('extra-health-bar'); // Add class name 'extra-health-bar'
          extraHealthBar.style.width = `${warrior.healthPoints - 100}%`; // Set width based on remaining health
          healthBar.appendChild(extraHealthBar); // Append extra health bar to the health bar container
        }
        
        warriorContainer.appendChild(warriorImage); 
        warriorContainer.appendChild(healthBar); 
        tile.appendChild(warriorContainer); 
      });
    });
  }
  