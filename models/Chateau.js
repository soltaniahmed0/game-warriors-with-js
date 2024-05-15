export class Chateau {
  constructor(color) {
    this.color = color;
    this.resources = 3; // Initial resource count
    this.warriors = []; // Array to store warriors
  }

  // Method to update resources count based on the type of warrior
  updateResources(warriorType) {
    switch (warriorType) {
      case "elf":
        this.resources -= 2;
        break;
      case "chief-elf":
        this.resources -= 4;
        break;
      case "nain":
        this.resources -= 1;
        break;
      case "chief-nain":
        this.resources -= 3;
        break;
      default:
        break;
    }
  }

  // Method to add warriors to the castle
  addWarrior(warriorType) {
    // Check if there are enough resources to add the warrior
    if (this.resources - this.getResourceCost(warriorType) >= 0) {
      // Subtract the resource cost of the warrior
      this.updateResources(warriorType);
      // Add the warrior to the castle
      this.warriors.push(warriorType);
      console.log(this.resources);
    } else {
      console.log("Not enough resources to add this warrior.");
    }
  }

  // Helper method to get the resource cost of a warrior
  getResourceCost(warriorType) {
    switch (warriorType) {
      case "elf":
        return 2;
      case "chief-elf":
        return 4;
      case "nain":
        return 1;
      case "chief-nain":
        return 3;
      default:
        return 0;
    }
  }
}
