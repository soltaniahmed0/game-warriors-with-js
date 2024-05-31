
function displayWarriorsOnTrack() {
    // Clear previous warrior positions
    document.querySelectorAll('.tile').forEach(tile => {
      tile.innerHTML = ''; // Clear HTML content of each tile
    });
  
    // Loop through each castle's warriors and display them on the track
    [redCastle, blueCastle].forEach(castle => {
      castle.warriors.forEach(warrior => {
        const tileIndex = warrior.position - 1; // Adjust position to match array index
        const tile = document.getElementById(`p${tileIndex + 1}`); // Get corresponding tile element
        const warriorContainer = document.createElement('div'); // Create a container for the warrior and health bar
        warriorContainer.classList.add('warrior-container'); // Add class name 'warrior-container' to the container
        
        const warriorImage = document.createElement('img'); // Create image element for the warrior
        warriorImage.classList.add('img'); // Add class name 'img' to the image element
        warriorImage.src = warrior.imageUrl; // Set image source
        warriorImage.alt = warrior.constructor.name; // Set image alt attribute
        
        const healthBar = document.createElement('div'); // Create health bar element
        healthBar.classList.add('health-bar'); // Add class name 'health-bar' to the health bar element
        
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
        
        warriorContainer.appendChild(warriorImage); // Append warrior image to the container
        warriorContainer.appendChild(healthBar); // Append health bar to the container
        tile.appendChild(warriorContainer); // Append warrior container to the tile
      });
    });
  }
  