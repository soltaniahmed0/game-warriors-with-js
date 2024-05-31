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
    // Method to create an instance of the warrior based on the type
  createWarriorInstance(warriorType, color) {
    const id = Date.now() + Math.random(); // Generate a unique ID
    switch (warriorType) {
      case "elf":
        return new Elf(id, color);
      case "chief-elf":
        return new ChiefElf(id, color);
      case "nain":
        return new Nain(id, color);
      case "chief-nain":
        return new ChiefNain(id, color);
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
        //this.showWarriorList(); // Update the warrior list display
      } else {
        console.log("Not enough resources to add this warrior.");
      }
      displayWarriorsOnTrack();
    }
  
    // Method to display the list of warriors in the castle
   /* showWarriorList() {
      const listElement = document.getElementById(`${this.color}-warrior-list`);
      listElement.innerHTML = ""; // Clear previous list
      this.warriors.forEach(warrior => {
        const listItem = document.createElement("li");
        listItem.textContent = warrior.constructor.name; // Display warrior's class name
        listElement.appendChild(listItem);
      });
    }*/
    // Method to display the positions of warriors in the console
    showWarriorPositions() {
      console.log(`Positions of ${this.color} warriors:`);
      this.warriors.forEach(warrior => {
        console.log(`${warrior.constructor.name}: Position ${warrior.position}`);
      });
    }
  }