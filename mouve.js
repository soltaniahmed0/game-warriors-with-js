function moveWarriorsOneStep() {
    blueCastle.warriors.forEach(blueWarrior => {
      if (blueWarrior.position < 10) {
        blueWarrior.position++; 
      } 
    });
  
    checkMeetings();
    blueCastle.warriors.forEach(blueWarrior => {
      if (blueWarrior.position == 10) startpopup("Red");
      
    });

    redCastle.warriors.forEach(redWarrior => {
      if (redWarrior.position > 2) {
        redWarrior.position--; 
      } else {
        redWarrior.position--;
        startpopup("Blue")
        //alert('Red warriors have reached p0!');
      }
    });
  
   
    checkMeetings();
  
    // Update display after movement
    displayWarriorsOnTrack();
    //blueCastle.showWarriorPositions;
    //redCastle.showWarriorPositions;
  
  }
  
  var bluePositions;
  var redPositions ;
  function checkMeetings() {
    bluePositions = blueCastle.warriors.map(warrior => warrior.position);
    redPositions = redCastle.warriors.map(warrior => warrior.position);
  
    const maxBluePosition = Math.max(...bluePositions, -1);
    const maxRedPosition = Math.min(...redPositions, 11);
  
  
    if (maxBluePosition==maxRedPosition) {
      
      alert(`Meeting detected at position ${maxRedPosition}!`);
      startFight(maxRedPosition);
    }
  }