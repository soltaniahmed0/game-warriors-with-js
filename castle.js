class Chateau {
    constructor(color) {
      this.color = color;
      this.resources = 3; 
      this.warriors = []; 
    }
  
    
updateResources(warriorType) {
      //const warrior = this.createWarriorInstance(warriorType, this.color);
      this.resources -= this.createWarriorInstance(warriorType, this.color).resourceCost;
    }

createWarriorInstance(warriorType, color) {
    const id = Date.now() + Math.random(); 
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
  
  

addWarrior(warriorType) {
      if (this.resources >= this.createWarriorInstance(warriorType, this.color).resourceCost) {
        this.updateResources(warriorType);
        this.warriors.push(this.createWarriorInstance(warriorType, this.color));
      } else {
        console.log("Not enough resources to add this warrior.");
      }
      displayWarriorsOnTrack();
}
  
 
}