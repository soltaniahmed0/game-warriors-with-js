
function displayWarriorsOnTrack() {

    document.querySelectorAll('.tile').forEach(tile => {
      tile.innerHTML = ''; 
    });
  

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
        switch (warrior.constructor.name) {
          case "Nain":
            healthBar.style.width = `${warrior.healthPoints/2}%`;
            break;
          case "ChiefNain":
            healthBar.style.width = `${warrior.healthPoints/4}%`;
            break;
          
          default:
            healthBar.style.width = `${warrior.healthPoints}%`;
        }
        
        
        warriorContainer.appendChild(warriorImage); 
        warriorContainer.appendChild(healthBar); 
        tile.appendChild(warriorContainer); 
      });
    });
  }
  