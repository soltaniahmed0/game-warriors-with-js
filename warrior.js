
class Warrior {
    constructor(id, color) {
      this.id = id; 
      this.strength = 10;
      this.healthPoints = 100;
      this.imageUrl = ""; 
      this.resourceCost = 0; 
      this.position = color === 'blue' ? 1 : 10; 
    }
  
    
    calculateDamage() {
      let damage = 0;
      for (let i = 0; i < this.strength; i++) {
        damage += Math.floor(Math.random() * 3) + 1; 
      }
      return damage;
    }
  }
  
  // Define the Elf class inheriting from Warrior
  class Elf extends Warrior {
    constructor(id,color) {
      super(id,color); 
      this.strength *= 2; 
      this.resourceCost=2;
      this.imageUrl=color==='red'?"img/elf.png":"img/blueelf.png";
    }
  }
  
  
  class Nain extends Warrior {
    constructor(id,color) {
      super(id,color); 
      this.healthPoints *= 2; 
      this.resourceCost=1;
      this.imageUrl=color==='red'?"img/rnain.png":"img/bnain.png";
    }
  
    // Override the calculateDamage method for Dwarf
    calculateDamage() {
      return super.calculateDamage() / 2; // Dwarf receives half the damage
    }
  }
  
  // Define the ChiefElf class inheriting from Elf
  class ChiefElf extends Elf {
    constructor(id,color) {
      super(id,color);
      this.imageUrl = color==='red'?"img/rchefelf.png":"img/bchefelf.png"; // Image URL for Chief Elf
      this.resourceCost = 4; // Resource cost for Chief Elf
      this.strength *= 2; // Chief Elf's strength is twice the Elf's strength
    }
  }
  
  // Define the ChiefDwarf class inheriting from Dwarf
  class ChiefNain extends Nain {
    constructor(id,color) {
      super(id,color);
      this.imageUrl = color==='red'?"img/rchefnain.png":"img/bchefnain.png"; // Image URL for Chief Dwarf
      this.resourceCost = 3; // Resource cost for Chief Dwarf
      this.healthPoints *= 2; // Chief Dwarf has double the health points
    }
  }