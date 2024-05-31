function startFight(meetingPositions) {
    let iterationCount = 0; 
    while (true) {
        
            const blueWarriors = blueCastle.warriors.filter(warrior => warrior.position === meetingPositions);
            const redWarriors = redCastle.warriors.filter(warrior => warrior.position === meetingPositions);
            
            
            for (const blueWarrior of blueWarriors) {
                const targetRedWarrior = redWarriors.find(redWarrior => redWarrior.healthPoints > 0);
                
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
                        redWarriors.splice(index, 1);
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
            
            
            for (const redWarrior of redWarriors) {
                
                const targetBlueWarrior = blueWarriors.find(blueWarrior => blueWarrior.healthPoints > 0);
                
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
                        blueWarriors.splice(index, 1);
                         blueCastle.warriors = blueCastle.warriors.filter(warrior => warrior.id !== blueWarrior.id);
                    }
                    if (blueWarriors.length!==0){
                        console.log('pp'+blueWarriors[0].healthPoints);
                        blueWarriors[0].healthPoints+=points
                        console.log(blueWarriors[0].healthPoints);
                        displayWarriorsOnTrack;
                      }
                }
            }
  
            
        
        if (blueWarriors.length === 0) {
            //alert('Red team wins!');
            break; 
        }
  
        
        if (redWarriors.length === 0) {
            //alert('Blue team wins!');
            break; 
        }
    }
  
    redCastle.resources += 1;
    blueCastle.resources += 1;
    updateResources();
  }
  

  
  
  
  function fight(attacker, defender) {
    
    const initialBlueWarriors = [...blueCastle.warriors];
    const initialRedWarriors = [...redCastle.warriors];
    const damage = attacker.calculateDamage();
    defender.healthPoints -= damage;
    if (defender.healthPoints <= 0) {
      
      console.log(`${defender.constructor.name} with ID ${defender.id} has been defeated!`);

      //const castle = defender.color === 'blue' ? blueCastle : redCastle;
      //castle.warriors = castle.warriors.filter(warrior => warrior.id !== defender.id);
 
    }
  }
  