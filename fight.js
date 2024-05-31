function startFight() {
    let iterationCount = 0; 
    // Loop until one team is defeated
    while (true) {
        // Get the positions of blue and red warriors
        var bluePositions = blueCastle.warriors.map(warrior => warrior.position);
        var redPositions = redCastle.warriors.map(warrior => warrior.position);
        iterationCount++;
        // Find positions where blue and red warriors meet
        const meetingPositions = bluePositions.filter(position => redPositions.includes(position));
        console.log(`Meeting positions: ${meetingPositions}`);
        console.log(`Iteration count: ${iterationCount}`);
        // Iterate over meeting positions to simulate fights
        if (meetingPositions.length === 0) {
            break; // Break the loop if there are no meeting positions left
        }
        for (const position of meetingPositions) {
            // Find blue and red warriors at this position
            const blueWarriors = blueCastle.warriors.filter(warrior => warrior.position === position);
            const redWarriors = redCastle.warriors.filter(warrior => warrior.position === position);
            console.log("Blue warriors:", blueWarriors);
            console.log("Red warriors:", redWarriors);
            console.log("Blue attack now ");
            // Blue warriors attack red warriors first
            for (const blueWarrior of blueWarriors) {
                // Find the first living red warrior
                const targetRedWarrior = redWarriors.find(redWarrior => redWarrior.healthPoints > 0);
                // If there is a living red warrior, let blue warrior attack
                if (targetRedWarrior) {
                    fight(blueWarrior, targetRedWarrior);
                }
                
            }
            // Check if any red warriors at this position are defeated
            for (const redWarrior of redWarriors) {
                if (redWarrior.healthPoints <= 0) {
                    console.log(redWarrior.healthPoints);
                    points=redWarrior.healthPoints;
                    console.log(points);
                    const index = redWarriors.findIndex(warrior => warrior.id === redWarrior.id);
                    if (index !== -1) {
                        // Remove the defeated warrior from the redWarriors array by ID
                        redWarriors.splice(index, 1);
                        // Also remove from the redCastle's warriors array
                        redCastle.warriors = redCastle.warriors.filter(warrior => warrior.id !== redWarrior.id);
                    }
                    console.log(redWarriors.length);
                    if (redWarriors.length!==0){
                      console.log('pp'+redWarriors[0].healthPoints);
                      redWarriors[0].healthPoints+=points
                      console.log(redWarriors[0].healthPoints);
                      displayWarriorsOnTrack;
                    }
                }
            }
            
            console.log("Red attack now ");
            // Red warriors attack blue warriors
            for (const redWarrior of redWarriors) {
                // Find the first living blue warrior
                const targetBlueWarrior = blueWarriors.find(blueWarrior => blueWarrior.healthPoints > 0);
                // If there is a living blue warrior, let red warrior attack
                if (targetBlueWarrior) {
                    fight(redWarrior, targetBlueWarrior);
                }
            }
            
            // Check if any blue warriors at this position are defeated
            for (const blueWarrior of blueWarriors) {
                if (blueWarrior.healthPoints <= 0) {
                    console.log(blueWarrior.healthPoints);
                    const index = blueWarriors.findIndex(warrior => warrior.id === blueWarrior.id);
                    if (index !== -1) {
                        // Remove the defeated warrior from the blueWarriors array by ID
                        blueWarriors.splice(index, 1);
                        // Also remove from the blueCastle's warriors array
                        blueCastle.warriors = blueCastle.warriors.filter(warrior => warrior.id !== blueWarrior.id);
                    }
                }
            }
  
            console.log("Blue warriors:", blueWarriors);
            console.log("Red warriors:", redWarriors);
        }
        
        // Check if blue team is defeated
        if (blueCastle.warriors.length === 0) {
            //alert('Red team wins!');
            break; // End the fight
        }
  
        // Check if red team is defeated
        if (redCastle.warriors.length === 0) {
            //alert('Blue team wins!');
            break; // End the fight
        }
    }
  
    redCastle.resources += 1;
    blueCastle.resources += 1;
    updateBlueResources();
    updateRedResources();
  }
  
  // Define the sleep function
  function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  
  
  
  function fight(attacker, defender) {
    // Store the list of warriors before the battle
    const initialBlueWarriors = [...blueCastle.warriors];
    const initialRedWarriors = [...redCastle.warriors];
  
    // Calculate damage for the attacker
    const damage = attacker.calculateDamage();
  
    // Inflict damage on the defender
    defender.healthPoints -= damage;
    
    // Check if the defender is defeated
    if (defender.healthPoints <= 0) {
      
      console.log(`${defender.constructor.name} with ID ${defender.id} has been defeated!`);
      
      // Remove the defeated warrior from their castle's warriors array
      const castle = defender.color === 'blue' ? blueCastle : redCastle;
      castle.warriors = castle.warriors.filter(warrior => warrior.id !== defender.id);
  
      // Log the list of warriors before and after the battle
      console.log(`List of blue warriors before battle:`, initialBlueWarriors);
      console.log(`List of red warriors before battle:`, initialRedWarriors);
      console.log(`List of blue warriors after battle:`, blueCastle.warriors);
      console.log(`List of red warriors after battle:`, redCastle.warriors);
    }
  }
  