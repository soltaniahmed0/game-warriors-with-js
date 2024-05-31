
class Warrior {
    constructor(id, color) {
      this.id = id; 
      this.strength = 10;
      this.healthPoints = 100;
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
  
    
    calculateDamage() {
      return super.calculateDamage() / 2; 
    }
  }
  
  
  class ChiefElf extends Elf {
    constructor(id,color) {
      super(id,color);
      this.imageUrl = color==='red'?"img/rchefelf.png":"img/bchefelf.png"; 
      this.resourceCost = 4; 
      this.strength *= 2; 
    }
  }
  
  
  class ChiefNain extends Nain {
    constructor(id,color) {
      super(id,color);
      this.imageUrl = color==='red'?"img/rchefnain.png":"img/bchefnain.png"; 
      this.resourceCost = 3; 
      this.healthPoints *= 2; 
    }
  }