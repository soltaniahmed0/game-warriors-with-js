function moveWarriorsOneStep() {
    blueCastle.warriors.forEach(blueWarrior => {
      if (blueWarrior.position < 10) {
        blueWarrior.position++; 
      } 
    });
  
    // Check for meetings after blue warriors move
    checkMeetings();
    blueCastle.warriors.forEach(blueWarrior => {
      if (blueWarrior.position == 10) startpopup("Red");
      
    });
    // Move red warriors one step towards p0
    redCastle.warriors.forEach(redWarrior => {
      if (redWarrior.position > 2) {
        redWarrior.position--; // Move one step towards p0
      } else {
        redWarrior.position--;
        startpopup("Blue")
        //alert('Red warriors have reached p0!');
      }
    });
  
    // Check for meetings after red warriors move
    checkMeetings();
  
    // Update display after movement
    displayWarriorsOnTrack();
    blueCastle.showWarriorPositions;
    redCastle.showWarriorPositions;
  
  }
  
  // Function to check for meetings between blue and red warriors
  function checkMeetings() {
    // Get positions of blue and red warriors
    const bluePositions = blueCastle.warriors.map(warrior => warrior.position);
    const redPositions = redCastle.warriors.map(warrior => warrior.position);
  
    // Find the maximum position among blue and red warriors
    const maxBluePosition = Math.max(...bluePositions, -1);
    const maxRedPosition = Math.min(...redPositions, 11);
  
  
    if (maxBluePosition==maxRedPosition) {
      alert(`Meeting detected at position ${maxRedPosition}!`);
      startFight();
    }
  }