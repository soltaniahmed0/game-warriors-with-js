// Define the Warrior class
class Warrior {
  constructor(imageUrl, resourceCost,color) {
    this.strength = 10;
    this.healthPoints = 100;
    this.imageUrl = imageUrl; // Image URL for the warrior
    this.resourceCost = resourceCost; // Resource cost to add this warrior
    this.position = color === 'blue' ? 1 : 10; // Initial position based on castle color
  }

  // Method to calculate damage
  calculateDamage() {
    let damage = 0;
    for (let i = 0; i < this.strength; i++) {
      damage += Math.floor(Math.random() * 3) + 1; // Roll a 3-sided die
    }
    return damage;
  }
}

// Define the Elf class inheriting from Warrior
class Elf extends Warrior {
  constructor(color) {
    super("elf.png", 2,color); // Image URL and resource cost for Elf
    this.strength *= 2; // Elf's strength is twice the base strength
  }
}

// Define the Dwarf class inheriting from Warrior
class Nain extends Warrior {
  constructor(color) {
    super("dwarf.png", 1,color); // Image URL and resource cost for Dwarf
    this.healthPoints *= 2; // Dwarf has double the health points
  }

  // Override the calculateDamage method for Dwarf
  calculateDamage() {
    return super.calculateDamage() / 2; // Dwarf receives half the damage
  }
}

// Define the ChiefElf class inheriting from Elf
class ChiefElf extends Elf {
  constructor(color) {
    super(color);
    this.imageUrl = "chief-elf.png"; // Image URL for Chief Elf
    this.resourceCost = 4; // Resource cost for Chief Elf
    this.strength *= 2; // Chief Elf's strength is twice the Elf's strength
  }
}

// Define the ChiefDwarf class inheriting from Dwarf
class ChiefNain extends Nain {
  constructor(color) {
    super(color);
    this.imageUrl = "chief-nain.png"; // Image URL for Chief Dwarf
    this.resourceCost = 3; // Resource cost for Chief Dwarf
    this.healthPoints *= 2; // Chief Dwarf has double the health points
  }
}

// Define the Chateau class
class Chateau {
  constructor(color) {
    this.color = color;
    this.resources = 3; // Initial resource count
    this.warriors = []; // Array to store warrior objects
  }

  // Method to update resources count based on the type of warrior
  updateResources(warriorType) {
    const warrior = this.createWarriorInstance(warriorType, this.color);
    this.resources -= warrior.resourceCost;
  }

  // Method to create an instance of the warrior based on the type
  createWarriorInstance(warriorType, color) {
    switch (warriorType) {
      case "elf":
        return new Elf(color);
      case "chief-elf":
        return new ChiefElf(color);
      case "nain":
        return new Nain(color);
      case "chief-nain":
        return new ChiefNain(color);
      default:
        throw new Error("Invalid warrior type.");
    }
  }

  // Method to add warriors to the castle
  addWarrior(warriorType) {
    // Check if there are enough resources to add the warrior
    if (this.resources >= this.createWarriorInstance(warriorType, this.color).resourceCost) {
      // Subtract the resource cost of the warrior
      this.updateResources(warriorType);
      // Add the warrior object to the castle's warriors array
      this.warriors.push(this.createWarriorInstance(warriorType, this.color));
      console.log(this.resources);
      this.showWarriorPositions(); // Display warrior positions
      this.showWarriorList(); // Update the warrior list display
    } else {
      console.log("Not enough resources to add this warrior.");
    }
    displayWarriorsOnTrack();
  }

  // Method to display the list of warriors in the castle
  showWarriorList() {
    const listElement = document.getElementById(`${this.color}-warrior-list`);
    listElement.innerHTML = ""; // Clear previous list
    this.warriors.forEach(warrior => {
      const listItem = document.createElement("li");
      listItem.textContent = warrior.constructor.name; // Display warrior's class name
      listElement.appendChild(listItem);
    });
  }
  // Method to display the positions of warriors in the console
  showWarriorPositions() {
    console.log(`Positions of ${this.color} warriors:`);
    this.warriors.forEach(warrior => {
      console.log(`${warrior.constructor.name}: Position ${warrior.position}`);
    });
  }
}


// ***********************************************************************************************************

// Create instances of Chateau for red and blue castles
const redCastle = new Chateau("red");
const blueCastle = new Chateau("blue");

// Function to update resources display for blue castle
function updateBlueResources() {
  document.getElementById("blue-resources").textContent = blueCastle.resources;
}

// Function to update resources display for red castle
function updateRedResources() {
  document.getElementById("red-resources").textContent = redCastle.resources;
}

// Add event listeners for blue castle buttons
document.querySelector(".Belf").addEventListener("click", function() {
  blueCastle.addWarrior("elf");
  updateBlueResources();
});

document.querySelector(".Bchief-elf").addEventListener("click", function() {
  blueCastle.addWarrior("chief-elf");
  updateBlueResources();
});

document.querySelector(".Bnain").addEventListener("click", function() {
  blueCastle.addWarrior("nain");
  updateBlueResources();
  
});

document.querySelector(".Bchief-nain").addEventListener("click", function() {
  blueCastle.addWarrior("chief-nain");
  updateBlueResources();
});

// Add event listeners for red castle buttons
document.querySelector(".Relf").addEventListener("click", function() {
  redCastle.addWarrior("elf");
  updateRedResources();
});

document.querySelector(".Rchief-elf").addEventListener("click", function() {
  redCastle.addWarrior("chief-elf");
  updateRedResources();
});

document.querySelector(".Rnain").addEventListener("click", function() {
  redCastle.addWarrior("nain");
  updateRedResources();
});

document.querySelector(".Rchief-nain").addEventListener("click", function() {
  redCastle.addWarrior("chief-nain");
  updateRedResources();
});

// Function to display warriors on the track
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
      const warriorImage = document.createElement('img'); // Create image element for the warrior
      warriorImage.src = warrior.imageUrl; // Set image source
      warriorImage.alt = warrior.constructor.name; // Set image alt attribute
      tile.appendChild(warriorImage); // Append warrior image to the tile
    });
  });
}

// Function to move warriors one step on the track
// Function to move warriors one step on the track
function moveWarriorsOneStep() {
  // Move blue warriors one step towards p10
  blueCastle.warriors.forEach(blueWarrior => {
    if (blueWarrior.position < 10) {
      blueWarrior.position++; // Move one step towards p10
    } else {
      alert('Blue warriors have reached p10!');
    }
  });

  // Check for meetings after blue warriors move
  checkMeetings();

  // Move red warriors one step towards p0
  redCastle.warriors.forEach(redWarrior => {
    if (redWarrior.position > 1) {
      redWarrior.position--; // Move one step towards p0
    } else {
      alert('Red warriors have reached p0!');
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
  const maxBluePosition = Math.max(...bluePositions, 0);
  const maxRedPosition = Math.min(...redPositions, 10);


  if (maxBluePosition==maxRedPosition) {
    alert(`Meeting detected at position ${maxRedPosition}!`);
    startFight();
  }
}

// Example of calling moveWarriorsOneStep function
// Call this function whenever you want to move the warriors one step (e.g., when a button is clicked)
// Add event listener to the "move" button
document.getElementById("move").addEventListener("click", function() {
  moveWarriorsOneStep(); // Call the moveWarriorsOneStep function when the button is clicked
});
function startFight() {
  // Loop until one team is defeated
  while (true) {
    // Get the positions of blue and red warriors
    const bluePositions = blueCastle.warriors.map(warrior => warrior.position);
    const redPositions = redCastle.warriors.map(warrior => warrior.position);

    // Find positions where blue and red warriors meet
    const meetingPositions = bluePositions.filter(position => redPositions.includes(position));

    // Iterate over meeting positions to simulate fights
    meetingPositions.forEach(position => {
      // Find blue and red warriors at this position
      const blueWarriors = blueCastle.warriors.filter(warrior => warrior.position === position);
      const redWarriors = redCastle.warriors.filter(warrior => warrior.position === position);

      // Blue warriors attack red warriors first
      blueWarriors.forEach(blueWarrior => {
        // Find the first living red warrior
        const targetRedWarrior = redWarriors.find(redWarrior => redWarrior.healthPoints > 0);
        // If there is a living red warrior, let blue warrior attack
        if (targetRedWarrior) {
          fight(blueWarrior, targetRedWarrior);
        }
      });

      // Red warriors attack blue warriors
      redWarriors.forEach(redWarrior => {
        // Find the first living blue warrior
        const targetBlueWarrior = blueWarriors.find(blueWarrior => blueWarrior.healthPoints > 0);
        // If there is a living blue warrior, let red warrior attack
        if (targetBlueWarrior) {
          fight(redWarrior, targetBlueWarrior);
        }
      });
      
      // Check if any blue warriors at this position are defeated
      blueWarriors.forEach(blueWarrior => {
        if (blueWarrior.healthPoints <= 0) {
          const index = blueCastle.warriors.indexOf(blueWarrior);
          blueCastle.warriors.splice(index, 1); // Remove the defeated warrior from the castle's warriors array
        }
      });

      // Check if any red warriors at this position are defeated
      redWarriors.forEach(redWarrior => {
        if (redWarrior.healthPoints <= 0) {
          const index = redCastle.warriors.indexOf(redWarrior);
          redCastle.warriors.splice(index, 1); // Remove the defeated warrior from the castle's warriors array
        }
      });
    });

    // Check if blue team is defeated
    if (blueCastle.warriors.length === 0) {
      alert('Red team wins!');
      break; // End the fight
    }

    // Check if red team is defeated
    if (redCastle.warriors.length === 0) {
      alert('Blue team wins!');
      break; // End the fight
    }
  }
  redCastle.resources+=2;
  blueCastle.resources+=2;
}


function fight(attacker, defender) {
  // Calculate damage for the attacker
  const damage = attacker.calculateDamage();

  // Inflict damage on the defender
  defender.healthPoints -= damage;

  // Check if the defender is defeated
  if (defender.healthPoints <= 0) {
    console.log(`${defender.constructor.name} has been defeated!`);
    // Remove the defeated warrior from their castle's warriors array
    const castle = defender.color === 'blue' ? blueCastle : redCastle;
    castle.warriors = castle.warriors.filter(warrior => warrior !== defender);
  }
}

